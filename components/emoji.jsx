import { Box } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'

const codes = {
    watch: '⌚',
    flower_playing_cards: '🎴',
    busts_in_silhouette: '👥',
    trophy: '🏆',
}

const Emoji = (props) => (
    <Box
        component="span"
        role="img"
        aria-label={props.label || ''}
        aria-hidden={props.label ? 'false' : 'true'}
        {...props}
    >
        {props.code in codes ? codes[props.code] : String.fromCodePoint(props.hex)}
    </Box>
)

Emoji.propTypes = {
    label: PropTypes.string,
    code: PropTypes.string,
    hex: PropTypes.string,
}

export default Emoji
