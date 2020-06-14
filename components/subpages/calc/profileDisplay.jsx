import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    InputAdornment,
    makeStyles,
    TextField,
    Typography,
} from '@material-ui/core'
import { Delete, Done, Edit, ExpandLess, ExpandMore } from '@material-ui/icons'
import PropTypes from 'prop-types'
import React, { useRef, useState } from 'react'
import Moment from 'react-moment'
import formatList from '../../../helper/formatList'
import { ProfilePropType } from '../../../helper/profiles'
import commonCls from '../../commonClasses'
import Emoji from '../../emoji'
import { HExpander } from '../../structs'
import SimplePlayerStatus from './simplePlayerStatus'
import FloatingGameHistory from '../profile/floating/gameHistory'
import FixedGameHistory from '../profile/fixed/gameHistory'
import { ButtonLink } from '../../link'

const useStyles = makeStyles((theme) => ({
    profileNameField: {
        marginBottom: theme.spacing(2),
        width: 400,
    },
    cardRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
}))

const ProfileDisplay = ({ uuid, profile, setProfileName, deleteProfile, ...props }) => {
    const classes = { ...commonCls(), ...useStyles() }
    const [profileNameEditMode, setProfileNameEditMode] = useState(false)
    const [playerListVisibility, setPlayerListVisibility] = useState(false)

    const [historyDialogOpen, openHistoryDialog] = useState(false)
    const handleCloseHistoryDialog = () => openHistoryDialog(false)

    const profileNameFieldRef = useRef()

    const beginEditingProfileName = () => {
        profileNameFieldRef.current = profile.name
        setProfileNameEditMode(true)
    }

    const doneEditingProfileName = () => {
        setProfileName(profileNameFieldRef.current.value)
        setProfileNameEditMode(false)
    }

    return (
        <Card {...props}>
            <CardContent>
                {profileNameEditMode ? (
                    <TextField
                        className={classes.profileNameField}
                        label="Profile Name"
                        inputRef={profileNameFieldRef}
                        defaultValue={profile.name}
                        variant="outlined"
                        size="small"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton aria-label="done" onClick={doneEditingProfileName}>
                                        <Done />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                ) : (
                    <Box className={classes.cardRow}>
                        <Typography variant="h5" mr={1}>
                            {profile.name}
                        </Typography>
                        <Box ml={1}>
                            <IconButton aria-label="edit" size="small" onClick={beginEditingProfileName}>
                                <Edit />
                            </IconButton>
                        </Box>
                    </Box>
                )}
                <Box className={classes.cardRow}>
                    <Emoji code="watch" mr={1} />
                    <Typography variant="body2">
                        <Moment local format="DD MMM YYYY, HH:mm">
                            {profile.lastUsed}
                        </Moment>
                    </Typography>
                </Box>
                <Box className={classes.cardRow}>
                    <Emoji code="flower_playing_cards" mr={1} />
                    <Typography variant="body2">
                        {profile.config.decks} decks ({profile.config.perPlayer} per player, {profile.config.spares}{' '}
                        spare)
                    </Typography>
                </Box>
                {profile.victors.length > 0 && (
                    <Box className={classes.cardRow}>
                        <Emoji code="trophy" mr={1} />
                        <Typography variant="body2">
                            Won by {formatList(profile.victors.map((key) => profile.players[key].name))}{' '}
                        </Typography>
                    </Box>
                )}
                <Box className={classes.cardRow}>
                    <Emoji code="busts_in_silhouette" mr={1} />
                    <Typography variant="body2">
                        {profile.players.length} players ({profile.partnership} partnership)
                    </Typography>
                    <Box ml={1}>
                        {playerListVisibility ? (
                            <IconButton
                                aria-label="collapse"
                                size="small"
                                onClick={() => setPlayerListVisibility(false)}
                            >
                                <ExpandLess />
                            </IconButton>
                        ) : (
                            <IconButton aria-label="expand" size="small" onClick={() => setPlayerListVisibility(true)}>
                                <ExpandMore />
                            </IconButton>
                        )}
                    </Box>
                </Box>
                {playerListVisibility && (
                    <Box className={classes.cardRow}>
                        <Emoji code="busts_in_silhouette" mr={1} className={classes.invisible} />
                        <SimplePlayerStatus
                            players={profile.players}
                            partnership={profile.partnership}
                            leader={profile.leader}
                        />
                    </Box>
                )}
            </CardContent>
            <CardActions>
                <HExpander />
                <ButtonLink color="primary" variant="outlined" to={`/profiles/${uuid}`}>
                    Enter
                </ButtonLink>
                <Button onClick={() => openHistoryDialog(true)} color="primary">
                    History
                </Button>
                <Button onClick={deleteProfile} startIcon={<Delete />} color="secondary">
                    Delete
                </Button>
            </CardActions>
            <Dialog open={historyDialogOpen} onClose={handleCloseHistoryDialog}>
                <DialogTitle>Game History for {profile.name}</DialogTitle>
                <DialogContent>
                    {React.createElement(profile.partnership === 'floating' ? FloatingGameHistory : FixedGameHistory, {
                        profile,
                        tableSize: 'small',
                    })}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseHistoryDialog} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Card>
    )
}

ProfileDisplay.propTypes = {
    uuid: PropTypes.string.isRequired,
    profile: ProfilePropType.isRequired,
    setProfileName: PropTypes.func,
    deleteProfile: PropTypes.func.isRequired,
}

export default ProfileDisplay
