import {
    Box,
    Button,
    DialogContent,
    DialogTitle,
    Paper,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography,
    useMediaQuery,
    useTheme,
    DialogActions,
} from '@material-ui/core'
import { ChevronRight, Done } from '@material-ui/icons'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import commonCls from '../../../commonClasses'
import { ProfilePropType } from '../../../../helper/profiles'
import ScoreInput from '../../../scoreInput'
import ResponsiveDialog from '../../../responsiveDialog'
import { DarkTableHead, PaddedTable } from '../../../table'
import { Benefit, playerDetailStyles } from '../styles'
import FirstRoundDialog from './firstRoundDialog'
import PlayerRow from './playerRow'

const calculateSteps = (score, decks) => {
    if (score === undefined || score === null) return undefined
    if (score <= 0) return 0
    return Math.min(Math.floor(score / 20 / decks), 5) + 1
}

const calculateNewLevels = (team0Level, team1Level, steps, leader) => {
    let newTeam0Lvl, newTeam1Lvl
    if (leader % 2 === 0) {
        newTeam0Lvl = team0Level + Math.max(3 - steps, 0)
        newTeam1Lvl = team1Level + Math.max(steps - 3, 0)
    } else {
        newTeam0Lvl = team0Level + Math.max(steps - 3, 0)
        newTeam1Lvl = team1Level + Math.max(3 - steps, 0)
    }

    if (team0Level < 14 && newTeam0Lvl > 14) newTeam0Lvl = 14
    if (team1Level < 14 && newTeam1Lvl > 14) newTeam1Lvl = 14

    return [newTeam0Lvl, newTeam1Lvl]
}

const PlayerDetails = ({ profile, tableSize, onNewRound, onRedirect, ...props }) => {
    const mobile = useMediaQuery(useTheme().breakpoints.down('xs'))

    const [leader, setLeader] = useState(profile.leader)

    const isFirstRound = profile.leader === -1
    const [firstRoundDialogOpen, setFirstRoundDialogOpen] = useState(isFirstRound)

    const [score, setScore] = useState(undefined)
    const handleScoreChange = setScore
    const steps = calculateSteps(score, profile.config.decks)

    const nextLeader = steps === undefined ? undefined : (leader + (steps < 3 ? 2 : 1)) % profile.players.length
    const cutFirst = steps === undefined ? undefined : (leader + (steps < 3 ? 1 : 0)) % profile.players.length

    const newLevels = calculateNewLevels(profile.players[0].level, profile.players[1].level, steps, leader)
    const willEnd = newLevels[0] > 14 || newLevels[1] > 14

    const classes = { ...commonCls(), ...playerDetailStyles() }

    const handleScoreSave = () => {
        onNewRound({
            score,
            leader,
            nextLeader,
            playerLevels: profile.players.map((player) => ({ level: player.level, active: player.active })),
            newPlayerLevels: profile.players.map((player, i) => ({
                level: newLevels[i % 2],
                active: nextLeader % 2 === i % 2,
            })),
        })
        setScore(null)
        setLeader(nextLeader)
    }

    const [victoryDialogOpen, setVictoryDialogOpen] = useState(false)
    const handleGameFinish = () => {
        setVictoryDialogOpen(true)
    }

    const handleVictoryDialogClose = () => {
        setVictoryDialogOpen(false)
        onNewRound({
            score,
            leader,
            nextLeader: -1,
            playerLevels: profile.players.map((player) => ({ level: player.level, active: player.active })),
            newPlayerLevels: profile.players.map((player, i) => ({
                level: newLevels[i % 2],
                active: nextLeader % 2 === i % 2,
            })),
            victors: profile.players.filter((player, i) => newLevels[i % 2] > 14).map((_, i) => i),
        })
        onRedirect()
    }

    return (
        <Box {...props}>
            <TableContainer component={Paper}>
                <PaddedTable size={tableSize}>
                    <DarkTableHead>
                        <TableRow>
                            <TableCell>Player</TableCell>
                            <TableCell align="center">Level</TableCell>
                            <TableCell align="center">Position</TableCell>
                            <TableCell>Next Game</TableCell>
                        </TableRow>
                    </DarkTableHead>
                    <TableBody>
                        {profile.players.map((player, playerNum) => (
                            <PlayerRow
                                key={playerNum}
                                player={player}
                                playerNum={playerNum}
                                leader={leader}
                                level={profile.players[playerNum % 2].level}
                                newLevel={newLevels[playerNum % 2]}
                                nextLeader={nextLeader}
                                cutFirst={cutFirst}
                                willEnd={willEnd}
                            />
                        ))}
                    </TableBody>
                </PaddedTable>
                <Box m={2} className={mobile ? classes.vContainer : classes.hContainer}>
                    <Box mr={2} className={mobile ? classes.hContainer : classes.vContainer}>
                        <ScoreInput
                            variant="filled"
                            size={tableSize}
                            className={classes.scoreInput}
                            label="Score"
                            value={score}
                            onChange={handleScoreChange}
                        />
                        {isFirstRound && (
                            <Box className={classes.biddingBtnContainer}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => setFirstRoundDialogOpen(true)}
                                >
                                    Bidding
                                </Button>
                            </Box>
                        )}
                    </Box>
                    {steps !== undefined && (
                        <Paper variant="outlined" className={classes.outcomeBox}>
                            <Typography variant="h6">Round Outcome</Typography>
                            {steps < 3 ? (
                                <>
                                    <Typography variant="body2">
                                        Score {'<'}
                                        {profile.config.decks * 40} points <Benefit>Defenders +1 level</Benefit>
                                    </Typography>
                                    {steps < 2 && (
                                        <Typography variant="body2">
                                            Score {'<'}
                                            {profile.config.decks * 20} points <Benefit>Defenders +1 level</Benefit>
                                        </Typography>
                                    )}
                                    {steps < 1 && (
                                        <Typography variant="body2">
                                            Score 0 points <Benefit>Defenders +1 level</Benefit>
                                        </Typography>
                                    )}
                                </>
                            ) : (
                                <>
                                    <Typography variant="body2">
                                        Score ≥{profile.config.decks * 40} points{' '}
                                        <Benefit>Attackers take over as defenders</Benefit>
                                    </Typography>
                                    {steps > 3 && (
                                        <Typography variant="body2">
                                            Score ≥{profile.config.decks * 60} points{' '}
                                            <Benefit>Attackers +1 level</Benefit>
                                        </Typography>
                                    )}
                                    {steps > 4 && (
                                        <Typography variant="body2">
                                            Score ≥{profile.config.decks * 80} points{' '}
                                            <Benefit>Attackers +1 level</Benefit>
                                        </Typography>
                                    )}
                                    {steps > 5 && (
                                        <Typography variant="body2">
                                            Score ≥{profile.config.decks * 100} points{' '}
                                            <Benefit>Attackers +1 level</Benefit>
                                        </Typography>
                                    )}
                                </>
                            )}
                            <Box className={classes.hContainer} mt={1}>
                                <Box className={classes.hExpand} />
                                {newLevels[0] > 14 || newLevels[1] > 14 ? (
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        endIcon={<Done />}
                                        onClick={handleGameFinish}
                                    >
                                        Finish Game
                                    </Button>
                                ) : (
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        endIcon={<ChevronRight />}
                                        onClick={handleScoreSave}
                                    >
                                        Next Round
                                    </Button>
                                )}
                            </Box>
                        </Paper>
                    )}
                </Box>
            </TableContainer>
            <FirstRoundDialog
                open={firstRoundDialogOpen}
                setOpen={setFirstRoundDialogOpen}
                playerList={profile.players}
                setLeader={setLeader}
            />
            <ResponsiveDialog open={victoryDialogOpen} onClose={handleVictoryDialogClose}>
                <DialogTitle>Victory!</DialogTitle>
                <DialogContent>
                    <Typography variant="body1">A team has won at the final level, ending the game.</Typography>
                    <Typography variant="body1">Team {profile.players[0].level > 14 ? 1 : 2} is the victor!</Typography>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="primary" onClick={handleVictoryDialogClose}>
                        Continue
                    </Button>
                </DialogActions>
            </ResponsiveDialog>
        </Box>
    )
}

PlayerDetails.propTypes = {
    profile: ProfilePropType.isRequired,
    tableSize: PropTypes.oneOf(['small', 'medium']),
    onNewRound: PropTypes.func.isRequired,
    onRedirect: PropTypes.func.isRequired,
}

export default PlayerDetails
