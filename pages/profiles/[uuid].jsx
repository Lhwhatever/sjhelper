import { Box, makeStyles, Typography, IconButton, TextField } from '@material-ui/core'
import { ChevronLeft, Edit, Done } from '@material-ui/icons'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import React, { useEffect, useReducer, useState } from 'react'
import Header from '../../components/header'
import Layout from '../../components/layout'
import { ButtonLink } from '../../components/link'
import Loading from '../../components/loading'
import { loadProfiles, ProfilePropType, saveProfiles } from '../../helper/profiles'
import { withStyles } from '@material-ui/styles'
import { blueGrey } from '@material-ui/core/colors'
import ProfileContent from '../../components/subpages/profile/content'

const useStyles = makeStyles({
    centered: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
})

const ProfileNameField = withStyles((theme) => ({
    root: {
        '& input': {
            color: theme.palette.primary.contrastText,
        },
        '& label, & label.Mui-focused': {
            color: blueGrey[300],
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset, &:hover fieldset, &.Mui-focused fieldset': {
                borderColor: blueGrey[700],
            },
        },
        '& button': {
            color: blueGrey[300],
        },
    },
}))(TextField)

const ProfileHeader = ({ profile, onProfileNameChange, ...props }) => {
    const [nameField, setNameField] = useState(null)

    const handleStartEdit = () => setNameField(profile.name)
    const handleEndEdit = () => {
        onProfileNameChange(nameField)
        setNameField(null)
    }

    const handleNameChange = (event) => setNameField(event.target.value)

    return (
        <Header {...props}>
            <>
                <ButtonLink color="inherit" startIcon={<ChevronLeft />} to="/calc">
                    Back
                </ButtonLink>
                <Box mx={1} />
                {nameField === null && (
                    <>
                        <Typography variant="h6">{profile.name}</Typography>
                        <IconButton aria-label="edit" color="inherit" onClick={handleStartEdit}>
                            <Edit />
                        </IconButton>
                    </>
                )}
                {nameField === null || (
                    <ProfileNameField
                        variant="outlined"
                        size="small"
                        label="Profile Name"
                        value={nameField}
                        InputProps={{
                            endAdornment: (
                                <IconButton size="small" color="inherit" onClick={handleEndEdit}>
                                    <Done size="inherit" />
                                </IconButton>
                            ),
                        }}
                        onChange={handleNameChange}
                    />
                )}
                <Box ml={1} />
                <Typography variant="body2">
                    ({profile.config.decks} decks, {profile.players.length} players)
                </Typography>
            </>
        </Header>
    )
}

ProfileHeader.propTypes = {
    profile: ProfilePropType,
    onProfileNameChange: PropTypes.func.isRequired,
}

export default function ProfilePage() {
    const classes = useStyles()

    const router = useRouter()
    const { uuid } = router.query

    const [profileList, profileListDispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'init':
                return action.value
            case 'update':
                return { ...state, [uuid]: { ...action.value, lastUsed: new Date() } }
            default:
                throw `unknown profileListDispatch action.type ${action.type}`
        }
    }, undefined)

    useEffect(() => {
        profileListDispatch({ type: 'init', value: loadProfiles(window) })
    }, [])

    useEffect(() => {
        if (profileList) saveProfiles(profileList, window)
    }, [profileList])

    const profile = uuid === undefined || profileList === undefined ? undefined : profileList[uuid] || null

    useEffect(() => {
        if (profile === null)
            setTimeout(() => {
                router.push('/calc')
            }, 5000)
    }, [profile])

    const handleProfileUpdate = (profile) =>
        profileListDispatch({
            type: 'update',
            value: profile,
        })

    const handleProfileNameChange = (name) =>
        handleProfileUpdate({
            ...profile,
            name,
        })

    return (
        <Layout
            contentDisplay="block"
            header={profile ? ProfileHeader : null}
            headerProps={{
                profile,
                onProfileNameChange: handleProfileNameChange,
            }}
        >
            {profile === undefined && <Loading />}
            {profile === null && (
                <>
                    <Typography variant="h5">This profile does not exist (anymore)...</Typography>
                    <Typography variant="body1">
                        Profiles are stored in your browser&apos;s localStorage. If you recently cleared your
                        localStorage, your profiles might have been lost. You will be automatically redirected back to
                        the previous page. Or, you may click the button below...
                    </Typography>
                    <Box m={2} className={classes.centered}>
                        <ButtonLink
                            to="/calc"
                            variant="contained"
                            color="primary"
                            size="large"
                            startIcon={<ChevronLeft />}
                        >
                            Back
                        </ButtonLink>
                    </Box>
                </>
            )}
            {profile && <ProfileContent profile={profile} onUpdate={handleProfileUpdate} />}
        </Layout>
    )
}
