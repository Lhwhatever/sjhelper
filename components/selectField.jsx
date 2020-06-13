import { TextField } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'

const SelectField = React.forwardRef(({ children, native, ...props }, ref) => (
    <TextField select SelectProps={{ native }} ref={ref} {...props}>
        {children}
    </TextField>
))

SelectField.displayName = 'SelectField'
SelectField.propTypes = {
    children: PropTypes.node,
    native: PropTypes.bool,
}

export default SelectField
