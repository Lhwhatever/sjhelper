import { Box, Button, Typography } from '@material-ui/core'
import { Add, Delete } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import React, { useEffect, useReducer, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import DeleteDialog from '../components/deleteDialog'
import Layout from '../components/layout'
import CreateProfileDialog from '../components/subpages/calc/createProfileDialog'
import ProfileDisplay from '../components/subpages/calc/profileDisplay'
import { loadProfiles, saveProfiles } from '../helper/profiles'

const useStyles = makeStyles((theme) => ({
    btn: {
        margin: theme.spacing(1),
    },
}))

export default function CalculatorPage() {
    const classes = useStyles()
    const [createProfileWizardOpen, setCreateProfileWizardOpen] = useState(false)
    const [deleteProfileDialogOpen, setDeleteProfileDialogOpen] = useState([null, null])

    const [profiles, profileDispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'setProfileName':
                state[action.key].name = action.value
                state[action.key].lastUsed = new Date()
                return state
            case 'createProfile':
                return {
                    ...state,
                    [action.key]: { ...action.value, lastUsed: new Date() },
                }
            case 'deleteProfile': {
                if (action.key === '*') return {}
                let newState = state
                delete state[action.key]
                return newState
            }
            case 'init':
                return action.value
            default:
                throw new Error(`Unknown action type ${action.type}`)
        }
    }, {})

    useEffect(() => {
        profileDispatch({ type: 'init', value: loadProfiles(window) })
    }, [])

    useEffect(() => {
        saveProfiles(profiles, window)
    }, [profiles])

    const profileEntries = Object.entries(profiles)

    return (
        <Layout>
            <Typography variant="h4">Calculator</Typography>
            <Typography variant="body2">Select a profile below: {profiles.length}</Typography>
            <Button
                variant="contained"
                color="primary"
                className={classes.btn}
                startIcon={<Add />}
                onClick={() => setCreateProfileWizardOpen(true)}
            >
                Create Profile
            </Button>
            <Button
                variant="contained"
                color="secondary"
                className={classes.btn}
                startIcon={<Delete />}
                onClick={() => setDeleteProfileDialogOpen(['*', 'all profiles'])}
                disabled={profileEntries.length === 0}
            >
                Delete All
            </Button>

            <CreateProfileDialog
                open={createProfileWizardOpen}
                setOpen={setCreateProfileWizardOpen}
                onFinish={(newProfile) => {
                    const uuid = uuidv4()
                    newProfile.leader = -1
                    profileDispatch({ type: 'createProfile', key: uuid, value: newProfile })
                }}
            />
            <DeleteDialog
                open={deleteProfileDialogOpen}
                setOpen={setDeleteProfileDialogOpen}
                onDelete={(target) => profileDispatch({ type: 'deleteProfile', key: target })}
            />
            <Box m={2}>
                {profileEntries.length
                    ? profileEntries
                          .map(([uuid, e]) => (
                              <Box mb={1} key={uuid}>
                                  <ProfileDisplay
                                      uuid={uuid}
                                      profile={e}
                                      setProfileName={(name) =>
                                          profileDispatch({
                                              type: 'setProfileName',
                                              key: uuid,
                                              value: name,
                                          })
                                      }
                                      deleteProfile={() => setDeleteProfileDialogOpen([uuid, e.name])}
                                  />
                              </Box>
                          ))
                          .reverse()
                    : []}
            </Box>
        </Layout>
    )
}
