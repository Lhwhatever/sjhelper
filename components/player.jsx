import PropTypes from 'prop-types'

const PlayerPropType = PropTypes.exact({
    name: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired,
})

export { PlayerPropType }
