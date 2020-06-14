import React from 'react'
import SelectField from './selectField'
import { levels, LevelDisplay } from './levels'
import { MenuItem } from '@material-ui/core'

const LevelInput = (props) => (
    <SelectField variant="filled" {...props}>
        {levels.map((level) => (
            <MenuItem value={level} key={level}>
                <LevelDisplay level={level} />
            </MenuItem>
        ))}
    </SelectField>
)

export default LevelInput
