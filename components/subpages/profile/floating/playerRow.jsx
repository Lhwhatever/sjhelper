import { Checkbox, TableCell } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'
import { LevelDisplay } from '../../../levels'
import { PlayerPropType } from '../../../player'
import { HighlightableRow } from '../../../table'
import { Benefit, Cost, Victory } from '../styles'

const PlayerRow = (props) => {
    const handleDefenderChange = (event) => props.setAsDefender(event.target.checked)

    return (
        <HighlightableRow highlight={props.isLeader ? 1 : 0}>
            <TableCell>{props.player.name}</TableCell>
            <TableCell align="center">
                <LevelDisplay player={props.player} />
            </TableCell>
            <TableCell align="center">
                {props.leaderState !== 'not set' && (
                    <Checkbox
                        color="secondary"
                        size={props.size}
                        checked={props.isDefender}
                        onChange={handleDefenderChange}
                        disabled={props.isLeader || (props.maxedDefenders && !props.isDefender)}
                    />
                )}
            </TableCell>
            <TableCell>
                {props.delta === undefined ? (
                    ''
                ) : props.newLevel.level > 14 ? (
                    <Victory size={props.size} />
                ) : (
                    <>
                        <LevelDisplay level={props.newLevel.level} active={props.newLevel.active} />{' '}
                        {props.delta > 1 && (
                            <Benefit>{props.player.active ? `+${props.delta}` : `↑${props.delta - 1}`}</Benefit>
                        )}
                        {props.delta === 1 && <Benefit>{props.player.active ? '+1' : '↑'}</Benefit>}
                        {props.delta === 0 && props.player.active && <Cost>↓</Cost>}
                    </>
                )}
            </TableCell>
        </HighlightableRow>
    )
}

PlayerRow.propTypes = {
    size: PropTypes.oneOf(['small', 'medium']).isRequired,
    player: PlayerPropType.isRequired,
    leaderState: PropTypes.oneOf(['preset', 'set', 'not set']),
    isLeader: PropTypes.bool.isRequired,
    isDefender: PropTypes.bool.isRequired,
    setAsDefender: PropTypes.func.isRequired,
    maxedDefenders: PropTypes.bool.isRequired,
    newLevel: PropTypes.exact({ level: PropTypes.number.isRequired, active: PropTypes.bool.isRequired }),
    delta: PropTypes.number,
}

export default PlayerRow
