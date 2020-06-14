import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import { PlayerPropType } from './player'
import { Star } from '@material-ui/icons'
import { useContext } from 'react'
import SettingsContext from './settings/SettingsContext'

const useStyles = makeStyles({
    activeLevel: {
        textDecoration: 'underline',
    },
})

export const levels = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

export const displayModes = {
    ['1'](level) {
        if (level < 14) return level.toString()
        if (level === 14) return '1'
        return undefined
    },
    ['14'](level) {
        if (level <= 14) return level.toString()
        return undefined
    },
    ['A'](level) {
        if (level <= 10) return level.toString()
        switch (level) {
            case 11:
                return 'J'
            case 12:
                return 'Q'
            case 13:
                return 'K'
            case 14:
                return 'A'
            default:
                return undefined
        }
    },
}

const LevelDisplay = (props) => {
    const displayMode = useContext(SettingsContext).displayAce
    const active = props.active || (props.player && props.player.active) || false
    const level = props.level || props.player.level || false

    const classes = useStyles()
    return (
        <span className={active ? classes.activeLevel : null}>
            {displayModes[displayMode](level) || <Star fontSize="inherit" />}
        </span>
    )
}

LevelDisplay.propTypes = {
    active: PropTypes.bool,
    level: PropTypes.number,
    player: PlayerPropType,
}

export { LevelDisplay }
