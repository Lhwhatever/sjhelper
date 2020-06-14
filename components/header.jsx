import { AppBar, Box, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { Settings } from '@material-ui/icons'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import commonCls from './commonClasses'
import SettingsDialog from './settings/SettingsDialog'
import { Link } from './link'

const useStyles = makeStyles({
    settingsBtn: {
        position: 'relative',
    },
    headerLink: {
        color: 'inherit',
        '&:hover': {
            textDecoration: 'none',
        },
    },
})

const Header = ({ children, onSettingsUpdate }) => {
    const classes = { ...commonCls(), ...useStyles() }
    const [settingsDialogOpen, openSettingsDialog] = useState(false)

    const handleCloseSettingsDialog = () => openSettingsDialog(false)

    return (
        <>
            <AppBar position="static" color="primary">
                <Toolbar>
                    {children || (
                        <Link className={classes.headerLink} to="/">
                            <Typography variant="h6">Shengji Helper</Typography>
                        </Link>
                    )}
                    <Box className={classes.hExpand} />
                    <IconButton
                        color="inherit"
                        size="small"
                        className={classes.settingsBtn}
                        onClick={() => openSettingsDialog(true)}
                    >
                        <Settings />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <SettingsDialog
                open={settingsDialogOpen}
                onClose={handleCloseSettingsDialog}
                onSettingsUpdate={onSettingsUpdate}
            />
        </>
    )
}

Header.propTypes = {
    children: PropTypes.node,
    onSettingsUpdate: PropTypes.func.isRequired,
}

export default Header
