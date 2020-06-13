import React from 'react'
import PropTypes from 'prop-types'
import { useMediaQuery, useTheme, Dialog } from '@material-ui/core'

const ResponsiveDialog = ({ component, ...props }) => {
    const mobile = useMediaQuery(useTheme().breakpoints.down('xs'))
    return React.createElement(component || Dialog, {
        fullScreen: mobile,
        ...props
    })
}

ResponsiveDialog.propTypes = {
    component: PropTypes.elementType
}

export default ResponsiveDialog