import {
    Box,
    Button,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControlLabel,
    Grid,
    Radio,
    Typography,
} from '@material-ui/core'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { PlayerPropType } from '../../../player'
import ResponsiveDialog from '../../../responsiveDialog'

const FirstRoundDialog = ({ open, setOpen, playerList, setLeader }) => {
    const [winningBidder, setWinningBidder] = useState()
    const [hasError, setErrorState] = useState(false)

    const handleClose = () => {
        if (winningBidder === undefined) {
            setErrorState(true)
            return
        }
        setOpen(false)
        setLeader(winningBidder)
    }

    return (
        <ResponsiveDialog open={open} onClose={handleClose}>
            <DialogTitle>Set winning bidder of first round</DialogTitle>
            <DialogContent>
                <Typography variant="body2">
                    The winning bidder of the first round is the bidder. Select the winning bidder below:
                </Typography>
                <Box mt={2}>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <Typography variant="h6">Team 1</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6">Team 2</Typography>
                        </Grid>
                        {playerList.map((player, i) => {
                            const handleChange = () => {
                                setWinningBidder(i)
                                setErrorState(false)
                            }
                            return (
                                <Grid item key={i} xs={6}>
                                    <FormControlLabel
                                        control={<Radio />}
                                        label={player.name}
                                        checked={winningBidder === i}
                                        value={i}
                                        onChange={handleChange}
                                    />
                                </Grid>
                            )
                        })}
                    </Grid>
                </Box>
                {hasError && (
                    <Typography variant="body2" color="error">
                        You must select the winning bidder.
                    </Typography>
                )}
            </DialogContent>
            <DialogActions>
                <Button
                    variant="contained"
                    color="primary"
                    disabled={winningBidder === undefined}
                    onClick={handleClose}
                >
                    Continue
                </Button>
            </DialogActions>
        </ResponsiveDialog>
    )
}

FirstRoundDialog.propTypes = {
    open: PropTypes.bool,
    setOpen: PropTypes.func.isRequired,
    playerList: PropTypes.arrayOf(PlayerPropType.isRequired).isRequired,
    setLeader: PropTypes.func.isRequired,
}

export default FirstRoundDialog
