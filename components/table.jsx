import { makeStyles, Table as MuiTable, TableHead as MuiTableHeader, TableRow as MuiTableRow } from '@material-ui/core'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import React from 'react'
import { blueGrey } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
    paddedTable: (props) => ({
        '& td, & th': {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(props.size === 'small' ? 3 : 2),
        },
        marginBottom: theme.spacing(0),
    }),
    darkHeader: {
        backgroundColor: theme.palette.primary.main,
        '& th': {
            color: theme.palette.primary.contrastText,
        },
    },
    highlightedRow: (props) => ({
        backgroundColor: props.highlight ? blueGrey[50] : 'inherit',
    }),
}))

const makeStyledVariant = (defaultComponent, useStyles, classNameKey, name, propsToInject) => {
    var component = function ({ component, className, ...props }) {
        const classes = useStyles(props)
        return React.createElement(component || defaultComponent, {
            ...props,
            className: clsx(classes[classNameKey], className),
            ...(propsToInject || {}),
        })
    }

    component.propTypes = {
        component: PropTypes.elementType,
        className: PropTypes.any,
    }

    component.displayName = name
    return component
}

const PaddedTable = makeStyledVariant(MuiTable, useStyles, 'paddedTable', 'PaddedTable')

const DarkTableHead = makeStyledVariant(MuiTableHeader, useStyles, 'darkHeader', 'DarkTableHead')

const HighlightableRow = ({ className, ...props }) => {
    const classes = useStyles(props)
    return <MuiTableRow className={clsx(classes.highlightedRow, className)} {...props} />
}

HighlightableRow.propTypes = {
    className: PropTypes.oneOf([PropTypes.string, PropTypes.object]),
    highlight: PropTypes.any,
}

export { PaddedTable, DarkTableHead, HighlightableRow }
