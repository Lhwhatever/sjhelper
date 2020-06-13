import { MenuItem } from '@material-ui/core'
import React from 'react'
import range from '../helper/range'
import SelectField from './selectField'

const NumOfPlayerField = React.forwardRef((props, ref) => (
    <SelectField fullWidth label={'No. of Players'} ref={ref} variant="filled" {...props}>
        {range(4, 11).map((e) => (
            <MenuItem key={e} value={e}>
                {e}
            </MenuItem>
        ))}
    </SelectField>
))

NumOfPlayerField.displayName = 'NumOfPlayerField'

export default NumOfPlayerField
