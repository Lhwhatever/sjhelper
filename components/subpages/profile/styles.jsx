import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, Box } from '@material-ui/core'
import { Star } from '@material-ui/icons'

const playerDetailStyles = makeStyles((theme) => ({
    scoreInput: {
        width: 150,
        [theme.breakpoints.up('sm')]: {
            marginBottom: theme.spacing(2),
        },
    },
    outcomeBox: {
        padding: theme.spacing(1),
        flexGrow: 1,
        [theme.breakpoints.down('xs')]: {
            marginTop: theme.spacing(2),
        },
    },
    scoreContainer: {
        flexBasis: 'fit-content',
    },
    biddingBtnContainer: {
        [theme.breakpoints.down('xs')]: {
            marginLeft: theme.spacing(2),
            alignSelf: 'center',
        },
        [theme.breakpoints.up('sm')]: {
            alignSelf: 'flex-end',
        },
    },
}))

const useDeltaStyles = makeStyles((theme) => ({
    benefit: {
        color: theme.palette.primary.main,
        fontWeight: 'bold',
    },
    cost: {
        color: theme.palette.secondary.main,
        fontWeight: 'bold',
    },
    victory: {
        display: 'flex',
        alignItems: 'center',
    },
}))

const Benefit = ({ children }) => {
    const classes = useDeltaStyles()
    return <span className={classes.benefit}>({children})</span>
}

Benefit.propTypes = { children: PropTypes.node.isRequired }

const Cost = ({ children }) => {
    const classes = useDeltaStyles()
    return <span className={classes.cost}>({children})</span>
}

Cost.propTypes = { children: PropTypes.node.isRequired }

const Victory = ({ size }) => {
    const classes = useDeltaStyles()
    return (
        <Box className={classes.victory}>
            <Star fontSize={size || 'small'} />
            <Box component="span" ml={0.25} mt={0.25}>
                Victory
            </Box>
        </Box>
    )
}

Victory.propTypes = { size: PropTypes.oneOf(['small', 'medium']) }

export { playerDetailStyles, Benefit, Cost, Victory }
