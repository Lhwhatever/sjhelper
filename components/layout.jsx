import { Container, ThemeProvider } from '@material-ui/core'
import PropTypes from 'prop-types'
import React, { useReducer } from 'react'
import theme from '../theme'
import Header from './header'
import SettingsContext from './settings/SettingsContext'

const Layout = ({ children, header, headerProps }) => {
    const [settings, settingsDispatch] = useReducer(
        (state, action) => {
            switch (action.type) {
                case 'update':
                    return { ...state, [action.key]: action.value }
                default:
                    throw `Unknown action type ${action.type}`
            }
        },
        { displayAce: 'A' }
    )

    const handleSettingsUpdate = (key, value) => settingsDispatch({ type: 'update', key, value })

    return (
        <ThemeProvider theme={theme}>
            <SettingsContext.Provider value={settings}>
                {React.createElement(header || Header, {
                    siteTitle: 'Shengji Helper',
                    onSettingsUpdate: handleSettingsUpdate,
                    ...(headerProps || {}),
                })}
                <Container>{children}</Container>
            </SettingsContext.Provider>
        </ThemeProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
    header: PropTypes.elementType,
    headerProps: PropTypes.object,
}

export default Layout
