import React from 'react'

const SettingsContext = React.createContext({
    displayAce: '1',
})

const settingsLocalStorageKey = 'shengji-helper-settings'

export default SettingsContext
export { settingsLocalStorageKey }
