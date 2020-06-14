import PropTypes from 'prop-types'
import { PlayerPropType } from '../components/player'

const localStorageKey = 'shengji-helper-profiles'

const loadLevel = (x) => ({ level: x >> 1, active: (x & 0b1) === 0b1 })

export const loadProfiles = (window) =>
    Object.fromEntries(
        JSON.parse(window.localStorage.getItem(localStorageKey) || '[]').map((profile) => [
            profile.uuid,
            {
                name: decodeURIComponent(profile.name),
                lastUsed: new Date(profile.lastUsed),
                partnership: profile.floating ? 'floating' : 'fixed',
                config: profile.config,
                players: profile.players.map((player) => ({ name: player[0], ...loadLevel(player[1]) })),
                leader: profile.leader,
                victors: profile.victors,
                history: profile.history.map(([leader, score, ...levels]) => ({
                    leader,
                    score,
                    playerLevels: levels.map(loadLevel),
                })),
            },
        ])
    )

const storeLevel = ({ level, active }) => (level << 1) | (active ? 0b1 : 0b0)

export const saveProfiles = (profiles, window) => {
    window.localStorage.setItem(
        localStorageKey,
        JSON.stringify(
            Object.entries(profiles).map(([uuid, profile]) => ({
                name: encodeURIComponent(profile.name),
                uuid: uuid,
                lastUsed: profile.lastUsed.valueOf(),
                floating: profile.partnership === 'floating' ? 1 : 0,
                config: profile.config,
                players: profile.players.map((player) => [player.name, storeLevel(player)]),
                leader: profile.leader,
                victors: profile.victors,
                history: profile.history.map(({ leader, score, playerLevels }) => [
                    leader,
                    score,
                    ...playerLevels.map(storeLevel),
                ]),
            }))
        )
    )
}

export const HistoryPropType = PropTypes.exact({
    leader: PropTypes.number.isRequired,
    score: PropTypes.number,
    playerLevels: PropTypes.arrayOf(
        PropTypes.exact({
            level: PropTypes.number.isRequired,
            active: PropTypes.bool.isRequired,
        })
    ).isRequired,
})

export const ProfilePropType = PropTypes.exact({
    name: PropTypes.string.isRequired,
    lastUsed: PropTypes.instanceOf(Date).isRequired,
    partnership: PropTypes.oneOf(['fixed', 'floating']).isRequired,
    players: PropTypes.arrayOf(PlayerPropType).isRequired,
    config: PropTypes.exact({
        decks: PropTypes.number.isRequired,
        perPlayer: PropTypes.number.isRequired,
        spares: PropTypes.number.isRequired,
    }).isRequired,
    leader: PropTypes.number.isRequired,
    victors: PropTypes.arrayOf(PropTypes.number).isRequired,
    history: PropTypes.arrayOf(HistoryPropType).isRequired,
})
