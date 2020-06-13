import { Box, DialogContent, DialogTitle, Grid, makeStyles, MenuItem, TextField, Typography, DialogActions, Button } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'
import ResponsiveDialog from '../responsiveDialog'

const useStyles = makeStyles({
    settingsGrid: {
        '& .MuiGrid-item': {
            display: 'flex',
            alignItems: 'center'
        }
    }
})

const SettingsDialog = ({ open, onClose, onSettingsUpdate }) => {
    const classes = useStyles()

    const handleDisplayAceChange = event => {
        onSettingsUpdate('displayAce', event.target.value)
    }

    return (<ResponsiveDialog open={open} onClose={onClose}>
        <DialogTitle>Settings</DialogTitle>
        <DialogContent>
            <Typography variant="body2">Change settings for the application here.</Typography>
            <Box my={2} />
            <Grid container className={classes.settingsGrid} spacing={4}>
                <Grid item xs={6}>
                    <Typography variant="body2">Display levels above 10 as...</Typography>
                </Grid>
                <Grid item xs={6}>
                    <TextField select variant="outlined" size="small" fullWidth
                        defaultValue="1" onChange={handleDisplayAceChange}
                    >
                        <MenuItem value="1">11, 12, 13, 1</MenuItem>
                        <MenuItem value="14">11, 12, 13, 14</MenuItem>
                        <MenuItem value="A">J, Q, K, A</MenuItem>
                    </TextField>
                </Grid>
            </Grid>
            <Box my={2} />
        </DialogContent>
        <DialogActions>
            <Button variant="outlined" color="primary" onClick={onClose}>Close</Button>
        </DialogActions>
    </ResponsiveDialog>)
}

SettingsDialog.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    onSettingsUpdate: PropTypes.func.isRequired
}

export default SettingsDialog