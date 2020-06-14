import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ProfilePropType } from '../../../helper/profiles'
import { makeStyles, Paper, Box, Typography, TextField, MenuItem, Button } from '@material-ui/core'
import FloatingGameHistory from './floating/gameHistory'
import FloatingPlayerDetails from './floating/playerDetails'
import { useRouter } from 'next/router'
import commonCls from '../../commonClasses'

const useStyles = makeStyles({
    roundNumField: { width: 135 },
})

const ProfileContent = ({ profile, onUpdate }) => {
    const classes = { ...commonCls(), ...useStyles() }
    const router = useRouter()

    const [revertRoundNum, setRevertRoundNum] = useState(profile.history.length ? profile.history.length - 1 : '')

    const handleRevert = () => {
        setRevertRoundNum(revertRoundNum ? revertRoundNum - 1 : '')
        onUpdate({
            ...profile,
            players: profile.players.map((player, i) => ({
                name: player.name,
                ...profile.history[revertRoundNum].playerLevels[i],
            })),
            leader:
                profile.partnership === 'floating' || revertRoundNum === 0
                    ? -1
                    : profile.history[revertRoundNum].leader,
            victors: [],
            history: profile.history.filter((_, i) => i < revertRoundNum),
        })
    }

    const handleNewRound = ({ score, leader, nextLeader, playerLevels, newPlayerLevels, victors }) => {
        onUpdate({
            ...profile,
            players: profile.players.map((player, i) => ({
                name: player.name,
                ...newPlayerLevels[i],
            })),
            victors: victors || profile.victors,
            leader: nextLeader,
            history: [...profile.history, { score, leader, playerLevels }],
        })

        setRevertRoundNum(profile.history.length)
    }

    const handleRedirect = () => router.push('/calc')

    return (
        <>
            {React.createElement(FloatingPlayerDetails, {
                profile,
                onNewRound: handleNewRound,
                mb: 2,
                tableSize: 'small',
                onRedirect: handleRedirect,
            })}
            <Paper>
                <Box p={2}>
                    <Typography variant="h5">Game History</Typography>
                    {React.createElement(FloatingGameHistory, { profile, tableSize: 'small', onRevert: handleRevert })}
                    <Box className={classes.hContainer} mt={2}>
                        <Box className={classes.hExpand} />
                        <TextField
                            select
                            variant="outlined"
                            size="small"
                            className={classes.roundNumField}
                            disabled={revertRoundNum === ''}
                            label="Round No."
                            value={revertRoundNum}
                            onChange={(event) => setRevertRoundNum(event.target.value)}
                        >
                            {[...new Array(profile.history.length)].map((_, i) => (
                                <MenuItem key={i} value={i}>
                                    {i + 1}
                                </MenuItem>
                            ))}
                        </TextField>
                        <Box mx={1} />
                        <Button variant="outlined" onClick={handleRevert} disabled={revertRoundNum === ''}>
                            Revert
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </>
    )
}

ProfileContent.propTypes = {
    profile: ProfilePropType.isRequired,
    onUpdate: PropTypes.func.isRequired,
}

export default ProfileContent
