import { IconButton, InputAdornment, TextField } from '@material-ui/core'
import { Clear } from '@material-ui/icons'
import PropTypes from 'prop-types'
import React, { useRef, useState } from 'react'

const ScoreInput = ({ value, onChange, label, ...props }) => {
    const [memory, setMemory] = useState(value)
    const [hasShrinkedLabel, shrinkLabel] = useState(value === '')
    const inputRef = useRef()

    const safeOnChange = onChange || (() => {})

    const handleFocus = () => {
        shrinkLabel(true)
    }

    const handleChange = () => {
        if (inputRef.current.value === '') {
            setMemory(null)
            safeOnChange(undefined)
        } else if (inputRef.current.value.match(/^-?\d+$/g)) {
            const value = parseInt(inputRef.current.value)
            setMemory(value)
            safeOnChange(value % 5 === 0 ? value : undefined)
        } else {
            inputRef.current.value = memory === null ? '' : memory.toString()
            safeOnChange(undefined)
        }
    }

    const handleBlur = () => {
        if (inputRef.current.value === '') {
            shrinkLabel(null)
        } else {
            const newValue = Math.round(parseInt(inputRef.current.value) / 5) * 5
            inputRef.current.value = newValue.toString()
            setMemory(newValue)
            safeOnChange(newValue)
        }
    }

    const handleClear = () => {
        inputRef.current.value = ''
        setMemory(null)
        safeOnChange(null)
        shrinkLabel(false)
    }

    if (value !== undefined && value !== memory) {
        if (value === null) {
            inputRef.current.value = ''
            shrinkLabel(false)
            setMemory(null)
        } else {
            const valueAsNum = typeof value === 'number' ? value : parseInt(value)
            if (!isNaN(valueAsNum)) {
                const newValue = Math.round(valueAsNum / 5) * 5
                inputRef.current.value = newValue.toString()
                setMemory(newValue)
                safeOnChange(newValue)
                shrinkLabel(true)
            } else {
                safeOnChange(memory)
            }
        }
    }

    return (
        <TextField
            label={label || 'Score'}
            inputRef={inputRef}
            InputLabelProps={{ shrink: hasShrinkedLabel }}
            onFocus={handleFocus}
            onChange={handleChange}
            onBlur={handleBlur}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton aria-label="clear score" onClick={handleClear}>
                            <Clear fontSize="inherit" />
                        </IconButton>
                    </InputAdornment>
                ),
                inputProps: {
                    type: 'number',
                    step: 5,
                },
            }}
            {...props}
        />
    )
}

ScoreInput.propTypes = {
    label: PropTypes.string,
    value: PropTypes.number,
    onChange: PropTypes.func,
}

export default ScoreInput
