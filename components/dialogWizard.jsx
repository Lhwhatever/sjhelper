import {
    Button,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    makeStyles,
    MobileStepper,
    Step,
    StepLabel,
    Stepper,
    useMediaQuery,
    useTheme,
} from '@material-ui/core'
import { Close, Done, NavigateBefore, NavigateNext } from '@material-ui/icons'
import PropTypes from 'prop-types'
import React, { useEffect, useReducer, useState } from 'react'
import setMember from '../helper/setMember'
import commonCls from './commonClasses'
import ResponsiveDialog from './responsiveDialog'
import { HExpander } from './structs'

const useStyles = makeStyles((theme) => ({
    mBtnClose: {
        marginLeft: theme.spacing(-2),
    },
}))

const PrevButton = ({ first, onClick }) => (
    <Button startIcon={<NavigateBefore />} onClick={onClick} color="primary" disabled={first}>
        Back
    </Button>
)

PrevButton.propTypes = {
    first: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
}

const NextButton = ({ last, onClick }) => (
    <Button endIcon={last ? <Done /> : <NavigateNext />} onClick={onClick} color="primary" variant="contained">
        {last ? 'Finish' : 'Next'}
    </Button>
)

NextButton.propTypes = {
    last: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
}

const MobileWizardButtons = ({ stepIndex, numOfSteps, prevButton, nextButton }) => {
    const classes = commonCls()
    return (
        <MobileStepper
            variant="dots"
            activeStep={stepIndex}
            steps={numOfSteps}
            position="static"
            className={classes.hExpand}
            backButton={prevButton}
            nextButton={nextButton}
        />
    )
}

MobileWizardButtons.propTypes = {
    stepIndex: PropTypes.number.isRequired,
    numOfSteps: PropTypes.number.isRequired,
    prevButton: PropTypes.node.isRequired,
    nextButton: PropTypes.node.isRequired,
}

export const asWizardStep = (Step, label, actions = {}) => {
    function WizardStep(props) {
        const [stepState, stepDispatch] = useReducer((state, action) => {
            switch (action.type) {
                case 'set': {
                    if (action.key instanceof Array) return setMember(state, action.key, action.value, true)

                    return { ...state, [action.key]: action.value }
                }
                case 'setm': {
                    let workingState = JSON.parse(JSON.stringify(state))
                    for (const [key, value] of action.value) {
                        if (key instanceof Array) setMember(workingState, key, value)
                        else workingState[key] = value
                    }
                    return workingState
                }
                case 'merge':
                    return { ...state, ...action.value }
                default:
                    throw new Error(`Unknown action type ${action.type}.`)
            }
        }, ...(actions.setup ? [props.wizardState, actions.setup] : []))

        const handleNext = () => {
            if (actions) {
                if (actions.validate) {
                    const { error, actionToFeedback } = actions.validate(stepState)
                    if (error) {
                        stepDispatch(actionToFeedback)
                        return
                    }
                }

                if (actions.onNext) props.wizardDispatch(actions.onNext(stepState))
            }
            props.advance()
        }

        const ThePrevButton = <PrevButton first={props.stepIndex === 0} onClick={props.retreat} />
        const TheNextButton = <NextButton last={props.last} onClick={handleNext} />

        return (
            <>
                <DialogContent>
                    <Step state={stepState} dispatch={(key, value) => stepDispatch({ type: 'set', key, value })} />
                </DialogContent>
                <DialogActions>
                    {props.mobile ? (
                        <MobileWizardButtons
                            stepIndex={props.stepIndex}
                            numOfSteps={props.numOfSteps}
                            prevButton={ThePrevButton}
                            nextButton={TheNextButton}
                        />
                    ) : (
                        <>
                            <Button color="primary" endIcon={<Close />} onClick={props.onCancel}>
                                Quit
                            </Button>
                            <HExpander />
                            {ThePrevButton}
                            {TheNextButton}
                        </>
                    )}
                </DialogActions>
            </>
        )
    }

    WizardStep.propTypes = {
        advance: PropTypes.func.isRequired,
        retreat: PropTypes.func.isRequired,
        stepIndex: PropTypes.number.isRequired,
        numOfSteps: PropTypes.number.isRequired,
        last: PropTypes.bool.isRequired,
        mobile: PropTypes.bool.isRequired,
        onCancel: PropTypes.func.isRequired,
        wizardState: PropTypes.any.isRequired,
        wizardDispatch: PropTypes.func.isRequired,
    }

    WizardStep.stepLabel = label

    return WizardStep
}

export const asWizardStepStepPropTypes = {
    state: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
}

const DialogWizard = ({ open, setOpen, steps, title, initializerArg, initializer, onFinish }) => {
    const classes = useStyles()

    const [stepIndex, setStepIndex] = useState(0)
    const [done, setDone] = useState(false)
    const [wizardState, wizardStateDispatcher] = useReducer(
        (state, action) => {
            switch (action.type) {
                case 'merge':
                    return { ...state, ...action.value }
                case 'add':
                    return { ...state, [action.key]: action.value }
                case 'del': {
                    const copyOfState = { ...state }
                    if (action.key.map) action.key.map((key) => delete copyOfState[key])
                    else delete copyOfState[action.key]
                    return copyOfState
                }
                case 'reset':
                    if (initializer) return initializer(initializerArg)
                    if (initializerArg) return initializerArg
                    return null
                case 'none':
                    return state
                default:
                    throw new Error(`Unknown action type ${action.key}.`)
            }
        },
        initializerArg,
        initializer
    )

    const last = stepIndex === steps.length - 1

    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down('xs'))

    const handleCancel = () => {
        setOpen(false)
        setStepIndex(0)
    }

    const handleRetreat = () => {
        setStepIndex(stepIndex - 1)
    }

    const handleAdvance = last
        ? () => {
              setDone(true)
          }
        : () => {
              setStepIndex(stepIndex + 1)
          }

    // This useEffect exists because I don't want to calculate the result of the last
    // dispatch (for setting state). More convenient to wait until the next render, when
    // state has been updated, before running all the onFinish actions.
    useEffect(() => {
        if (done) {
            if (onFinish) onFinish(wizardState, wizardStateDispatcher)
            setOpen(false)
            setStepIndex(0)
            setDone(false)
        }
    }, [done, onFinish, wizardState, wizardStateDispatcher, setOpen])

    return (
        <ResponsiveDialog open={open} onClose={handleCancel} aria-labelledby="form-dialog-title">
            {mobile ? (
                <DialogTitle>
                    <IconButton aria-label="quit" onClick={handleCancel} className={classes.mBtnClose}>
                        <Close />
                    </IconButton>
                    {title || 'Quit'}
                </DialogTitle>
            ) : (
                title && (
                    <>
                        <DialogTitle>{title}</DialogTitle>
                        <Stepper activeStep={stepIndex} alternativeLabel>
                            {steps.map((step) => (
                                <Step key={step.stepLabel}>
                                    <StepLabel>{step.stepLabel}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </>
                )
            )}
            {React.createElement(steps[stepIndex], {
                advance: handleAdvance,
                retreat: handleRetreat,
                wizardState,
                wizardDispatch: wizardStateDispatcher,
                onCancel: handleCancel,
                stepIndex,
                numOfSteps: steps.length,
                mobile,
                last,
            })}
        </ResponsiveDialog>
    )
}

DialogWizard.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    steps: PropTypes.arrayOf(PropTypes.elementType).isRequired,
    title: PropTypes.string,
    initializerArg: PropTypes.any,
    initializer: PropTypes.func,
    onFinish: PropTypes.func,
}

export default DialogWizard
