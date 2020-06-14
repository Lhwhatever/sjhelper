import { Button, Paper, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'
import { LevelDisplay } from '../../../levels'
import { PlayerPropType } from '../../../player'
import { DarkTableHead, HighlightableRow, PaddedTable } from '../../../table'
import { HistoryPropType, ProfilePropType } from '../../../../helper/profiles'

const RoundRow = ({ roundNum, round, onRevert }) => (
    <TableRow>
        <TableCell align="center" variant="head">
            {roundNum + 1}
        </TableCell>
        {round.playerLevels.map((level, i) => (
            <TableCell align="center" key={i}>
                <LevelDisplay level={level.level} active={level.active} />
                {round.leader === i && <sup>L</sup>}
            </TableCell>
        ))}
        <TableCell align="center">{round.score === undefined ? '-' : round.score}</TableCell>
        {onRevert && (
            <TableCell align="center">
                <Button variant="outlined" onClick={() => onRevert(roundNum)}>
                    Revert
                </Button>
            </TableCell>
        )}
    </TableRow>
)

RoundRow.propTypes = {
    roundNum: PropTypes.number.isRequired,
    round: HistoryPropType.isRequired,
    onRevert: PropTypes.func,
}

const PresentRoundRow = ({ players }) => (
    <HighlightableRow highlight={1}>
        <TableCell align="center" variant="head">
            Now
        </TableCell>
        {players.map((player) => (
            <TableCell align="center" key={player.name}>
                <LevelDisplay player={player} />
            </TableCell>
        ))}
        <TableCell></TableCell>
    </HighlightableRow>
)

PresentRoundRow.propTypes = {
    players: PropTypes.arrayOf(PlayerPropType).isRequired,
}

const GameHistory = ({ tableSize, profile }) => (
    <TableContainer component={Paper} variant="outlined">
        <PaddedTable size={tableSize}>
            <DarkTableHead>
                <TableRow>
                    <TableCell align="center" color="inherit">
                        Round
                    </TableCell>
                    {profile.players.map((player) => (
                        <TableCell key={player.name} align="center">
                            {player.name}
                        </TableCell>
                    ))}
                    <TableCell align="center">Score</TableCell>
                </TableRow>
            </DarkTableHead>
            <TableBody>
                {profile.history.map((round, i) => (
                    <RoundRow key={i} round={round} roundNum={i} />
                ))}
                <PresentRoundRow players={profile.players} />
            </TableBody>
        </PaddedTable>
    </TableContainer>
)

GameHistory.propTypes = {
    profile: ProfilePropType,
    tableSize: PropTypes.oneOf(['small', 'medium']).isRequired,
}

export default GameHistory
