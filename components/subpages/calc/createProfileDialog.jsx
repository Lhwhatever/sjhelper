import { Box, DialogContentText, Grid, makeStyles, MenuItem, TextField, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import commonCls from '../../commonClasses'
import DeckPlanner from '../../deckPlanner'
import DialogWizard, { asWizardStep, asWizardStepStepPropTypes } from '../../dialogWizard'
import LevelInput from '../../levelInput'
import NumOfPlayerField from '../../numOfPlayerField'
import SelectField from '../../selectField'

const useStyles = makeStyles((theme) => ({
    profileNameField: {
        marginBottom: theme.spacing(2),
    },
    capitalize: {
        textTransform: 'capitalize',
    },
    levelField: {
        width: 125,
    },
    fixedPartnershipNaming: {
        display: 'flex',
    },
    nicknameField: {
        minWidth: 170,
    },
}))

const BasicInfoStep = ({ state, dispatch }) => {
    const classes = { ...commonCls(), ...useStyles() }

    const [fixedPartnershipAllowed, setFixedPartnershipAllowed] = useState(true)

    const handleNumOfPlayerChange = (event) => {
        dispatch('numOfPlayers', event.target.value)
        if (event.target.value % 2) {
            setFixedPartnershipAllowed(false)
            dispatch('partnershipMode', 'floating')
        } else setFixedPartnershipAllowed(true)
    }

    const handleProfileNameFieldChange = (event) => {
        dispatch('profileName', event.target.value)
        dispatch('profileNameError', !event.target.value)
    }

    return (
        <>
            <DialogContentText>To create a new profile, fill in the following information.</DialogContentText>
            <Box className={classes.vContainer}>
                <TextField
                    fullWidth
                    required
                    label="Profile Name"
                    value={state.profileName}
                    error={state.profileNameError}
                    helperText={state.profileNameError ? 'Enter a profile name.' : null}
                    onChange={handleProfileNameFieldChange}
                    className={classes.profileNameField}
                    variant="filled"
                />
                <Box className={classes.hContainer}>
                    <NumOfPlayerField value={state.numOfPlayers} onChange={handleNumOfPlayerChange} required />
                    <Box ml={2} />
                    <SelectField
                        fullWidth
                        required
                        label="Partnership"
                        value={state.partnershipMode}
                        onChange={(event) => dispatch('partnershipMode', event.target.value)}
                        variant="filled"
                    >
                        <MenuItem value="floating">Floating</MenuItem>
                        {fixedPartnershipAllowed && <MenuItem value="fixed">Fixed</MenuItem>}
                    </SelectField>
                </Box>
            </Box>
        </>
    )
}

BasicInfoStep.propTypes = asWizardStepStepPropTypes

const DeckPlanningStep = ({ state, dispatch }) => {
    const onSelect = (config) => {
        dispatch('config', config)
        dispatch('error', false)
    }

    return (
        <>
            <DialogContentText>Select one of the following deck configurations.</DialogContentText>
            {state.error && (
                <Typography variant="body1" color="error">
                    You must select a deck configuration! Tap or click on the desired row.
                </Typography>
            )}
            <DeckPlanner
                numOfPlayers={state.numOfPlayers}
                config={state.config}
                setConfig={onSelect}
                dense
                error={state.error}
            />
        </>
    )
}

DeckPlanningStep.propTypes = asWizardStepStepPropTypes

const NicknameInput = ({ player, set, index, validateUnique }) => {
    const classes = useStyles()
    const handleNameChange = (event) => {
        set('errorblank', !event.target.value.trim())
        set('errordupe', 0)

        if (event.target.value.length <= 4) {
            set('name', event.target.value)
        }
    }

    const handleNameUnfocus = () => {
        const trimmedName = player.name.trim()
        set('name', trimmedName)
        if (trimmedName) validateUnique(trimmedName)
        else set('errorblank', true)
    }

    const hasDupeError = !!player.errordupe

    return (
        <TextField
            required
            label={`Player ${index} Nickname`}
            value={player.name}
            onChange={handleNameChange}
            onBlur={handleNameUnfocus}
            className={classes.nicknameField}
            error={player.errorblank || hasDupeError}
            variant="filled"
            helperText={
                player.errorblank ? 'Nickname cannot be blank!' : hasDupeError && 'Nicknames cannot be duplicates.'
            }
        />
    )
}

NicknameInput.propTypes = {
    player: PropTypes.exact({
        name: PropTypes.string,
        level: PropTypes.number.isRequired,
        errorblank: PropTypes.bool,
        errordupe: PropTypes.number,
    }).isRequired,
    set: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    validateUnique: PropTypes.func.isRequired,
}

const validateUnique = (players, newName, indexOfUpdated) => {
    const errordupes = players.map((p) => p.errordupe)
    const bitmask = 1 << indexOfUpdated

    for (let i = 0; i < players.length; ++i) {
        if (i === indexOfUpdated) continue
        const thisMask = 1 << i

        // check for duplicates
        if (players[i].name === newName) {
            errordupes[i] |= bitmask
            errordupes[indexOfUpdated] |= thisMask
        } else {
            errordupes[i] &= ~bitmask
            errordupes[indexOfUpdated] &= ~thisMask
        }
    }

    return errordupes
}

// TODO: Single level selectin for fixed partnership mode
const PlayerNamingStep = ({ state, dispatch }) => {
    const classes = useStyles()

    const NicknameInputWrapped = (player, i) => (
        <NicknameInput
            player={player}
            index={i + 1}
            set={(key, value) => dispatch(['players', i, key], value)}
            validateUnique={(name) =>
                validateUnique(state.players, name, i).map((e, j) => dispatch(['players', j, 'errordupe'], e))
            }
        />
    )

    return (
        <>
            <DialogContentText>
                Set the nicknames of the players. Nicknames should be unique and be at most 4 characters long.
            </DialogContentText>
            {state.partnership === 'floating' ? (
                state.players.map((player, i) => (
                    <Box key={i} mb={1} mr={1}>
                        {NicknameInputWrapped(player, i)}
                        <LevelInput
                            required
                            label="Starting level"
                            value={player.level}
                            className={classes.levelField}
                            onChange={(event) => dispatch(['players', i, 'level'], event.target.value)}
                        />
                    </Box>
                ))
            ) : (
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <Typography variant="h6">Team 1</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6">Team 2</Typography>
                    </Grid>
                    {[0, 1].map((i) => (
                        <Grid item key={i} xs={6}>
                            <Box mb={2}>
                                <LevelInput
                                    required
                                    label="Starting level"
                                    value={state.players[i].level}
                                    className={classes.levelField}
                                    onChange={(event) => dispatch(['players', i, 'level'], event.target.value)}
                                />
                            </Box>
                        </Grid>
                    ))}
                    {state.players.map((player, i) => (
                        <Grid item key={i} xs={6}>
                            {NicknameInputWrapped(player, i)}
                        </Grid>
                    ))}
                </Grid>
            )}
        </>
    )
}

PlayerNamingStep.propTypes = {
    state: PropTypes.exact({
        players: PropTypes.arrayOf(NicknameInput.propTypes.player).isRequired,
        partnership: PropTypes.oneOf(['fixed', 'floating']),
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
}

const CreateProfileDialog = ({ open, setOpen, onFinish }) => {
    const handleFinish = (wizardState, wizardStateDispatcher) => {
        // eslint-disable-next-line no-unused-vars
        const { numOfPlayers, ...profile } = wizardState
        onFinish(profile)
        wizardStateDispatcher({ type: 'reset' })
    }

    return (
        <DialogWizard
            open={open}
            setOpen={setOpen}
            title="Create new profile"
            initializerArg={{}}
            onFinish={handleFinish}
            steps={[
                asWizardStep(BasicInfoStep, 'Set the game mode and number of players.', {
                    validate(stepState) {
                        if (stepState.profileName) return {}
                        else
                            return {
                                error: 1,
                                actionToFeedback: {
                                    type: 'set',
                                    key: 'profileNameError',
                                    value: true,
                                },
                            }
                    },
                    onNext: (stepState) => ({
                        type: 'merge',
                        value: {
                            name: stepState.profileName,
                            numOfPlayers: stepState.numOfPlayers,
                            partnership: stepState.partnershipMode,
                        },
                    }),
                    setup: (wizardState) => ({
                        profileName: wizardState.name || '',
                        profileNameError: false,
                        numOfPlayers: wizardState.numOfPlayers || 4,
                        partnershipMode: wizardState.partnership || 'fixed',
                    }),
                }),
                asWizardStep(DeckPlanningStep, 'Decide on the number of decks.', {
                    setup: (wizardState) => ({
                        numOfPlayers: wizardState.numOfPlayers,
                        config: wizardState.config && {
                            decks: wizardState.config.decks,
                            totalCards: wizardState.config.decks * 54,
                            cardsPerPlayer: wizardState.config.perPlayer,
                            spareCards: wizardState.config.spares,
                        },
                    }),
                    validate(stepState) {
                        if (stepState.config) return {}
                        else
                            return {
                                error: 1,
                                actionToFeedback: {
                                    type: 'set',
                                    key: 'error',
                                    value: true,
                                },
                            }
                    },
                    onNext: (stepState) => ({
                        type: 'merge',
                        value: {
                            config: {
                                decks: stepState.config.decks,
                                perPlayer: stepState.config.cardsPerPlayer,
                                spares: stepState.config.spareCards,
                            },
                        },
                    }),
                }),
                asWizardStep(PlayerNamingStep, 'Set the nickname of the players.', {
                    setup: (wizardState) => ({
                        partnership: wizardState.partnership,
                        players: wizardState.players
                            ? wizardState.players.map((player) => ({ name: player.name, level: player.level }))
                            : new Array(wizardState.numOfPlayers).fill({ name: '', level: 2 }),
                    }),
                    validate(stepState) {
                        let errorCode = stepState.players.reduce((prev, current) => prev || current.errordupe, false)
                            ? 1
                            : 0

                        const actionsToFeedback = []
                        for (let i = 0; i < stepState.players.length; ++i) {
                            if (!stepState.players[i].name) actionsToFeedback.push([['players', i, 'errorblank'], true])
                        }

                        return {
                            error: errorCode | (actionsToFeedback.length ? 2 : 0),
                            actionToFeedback: {
                                type: 'setm',
                                value: actionsToFeedback,
                            },
                        }
                    },
                    onNext: (stepState) => ({
                        type: 'merge',
                        value: {
                            players: stepState.players.map((player) => ({
                                name: player.name,
                                level: player.level,
                                active: true,
                            })),
                            victors: [],
                            history: [],
                        },
                    }),
                }),
            ]}
        />
    )
}

CreateProfileDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    onFinish: PropTypes.func,
}

export default CreateProfileDialog
