import { Container, makeStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import React, { useReducer } from 'react'
import Header from './header'
import SettingsContext from './settings/SettingsContext'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'start',
    },
    content: (props) => ({
        padding: '1.5rem',
        flexGrow: 1,
        overflow: 'auto',
        display: props.contentDisplay || 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
    }),
})

const Layout = ({ children, header, headerProps, ...props }) => {
    const classes = useStyles(props)
    const [settings, settingsDispatch] = useReducer(
        (state, action) => {
            switch (action.type) {
                case 'update':
                    return { ...state, [action.key]: action.value }
                default:
                    throw `Unknown action type ${action.type}`
            }
        },
        { displayAce: '1' }
    )

    const handleSettingsUpdate = (key, value) => settingsDispatch({ type: 'update', key, value })

    return (
        <SettingsContext.Provider value={settings}>
            <div className={classes.root}>
                {React.createElement(header || Header, {
                    siteTitle: 'Shengji Helper',
                    onSettingsUpdate: handleSettingsUpdate,
                    ...(headerProps || {}),
                })}
                <Container className={classes.content}>{children}</Container>
            </div>
        </SettingsContext.Provider>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
    header: PropTypes.elementType,
    headerProps: PropTypes.object,
    contentDisplay: PropTypes.oneOf(['flex', 'block']),
}

export default Layout
