import { Paper, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'
import { LevelDisplay } from '../../../levels'
import { PlayerPropType } from '../../../player'
import { DarkTableHead, HighlightableRow, PaddedTable } from '../../../table'
import { HistoryPropType, ProfilePropType } from '../../../../helper/profiles'

const RoundRow = ({ roundNum, round, players }) => (
    <TableRow>
        <TableCell align="center" variant="head">
            {roundNum + 1}
        </TableCell>
        <TableCell align="center">
            <LevelDisplay level={round.playerLevels[0].level} active={round.playerLevels[0].active} />
        </TableCell>
        <TableCell align="center">
            <LevelDisplay level={round.playerLevels[1].level} active={round.playerLevels[1].active} />
        </TableCell>
        <TableCell>
            {players[round.leader].name} (Team {(round.leader % 2) + 1})
        </TableCell>
        <TableCell align="center">{round.score === undefined ? '-' : round.score}</TableCell>
    </TableRow>
)

RoundRow.propTypes = {
    roundNum: PropTypes.number.isRequired,
    round: HistoryPropType.isRequired,
    players: PropTypes.arrayOf(PlayerPropType).isRequired,
}

const GameHistory = ({ tableSize, profile }) => (
    <TableContainer component={Paper} variant="outlined">
        <PaddedTable size={tableSize}>
            <DarkTableHead>
                <TableRow>
                    <TableCell align="center">Round</TableCell>
                    <TableCell align="center">Team 1</TableCell>
                    <TableCell align="center">Team 2</TableCell>
                    <TableCell>Leader</TableCell>
                    <TableCell align="center">Score</TableCell>
                </TableRow>
            </DarkTableHead>
            <TableBody>
                {profile.history.map((round, i) => (
                    <RoundRow key={i} roundNum={i} round={round} players={profile.players} />
                ))}
                <HighlightableRow highlight={1}>
                    <TableCell align="center" variant="head">
                        Now
                    </TableCell>
                    <TableCell align="center">
                        <LevelDisplay level={profile.players[0].level} active={profile.players[0].active} />
                    </TableCell>
                    <TableCell align="center">
                        <LevelDisplay level={profile.players[1].level} active={profile.players[1].active} />
                    </TableCell>
                    <TableCell>
                        {profile.leader >= 0
                            ? `${profile.players[profile.leader].name} (Team ${(profile.leader % 2) + 1})`
                            : ''}
                    </TableCell>
                    <TableCell></TableCell>
                </HighlightableRow>
            </TableBody>
        </PaddedTable>
    </TableContainer>
)

GameHistory.propTypes = {
    tableSize: PropTypes.oneOf(['small', 'medium']),
    profile: ProfilePropType.isRequired,
}

export default GameHistory
