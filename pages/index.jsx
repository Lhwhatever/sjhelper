import { Box, Button, Container, Hidden, makeStyles, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import Metadata from '../components/metadata'
import React from 'react'
import { ButtonLink } from '../components/link'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        height: '100vh',
    },
    linkCol: {
        display: 'flex',
        flexShrink: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    btnLinks: {
        display: 'flex',
        flexDirection: 'column',
        '& a': { marginBottom: theme.spacing(1) },
    },
    btnLinksCompact: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        '& a': {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
    },
    imageContainer: {
        flexShrink: 3,
    },
    image: {
        maxWidth: '100%',
    },
    smRoot: {
        display: 'flex',
        flexDirection: 'column',
    },
    linkSectHeaderBox: {
        display: 'flex',
        justifyContent: 'center',
        minWidth: 175,
    },
}))

const LinkSectionHeader = (props) => (
    <Box {...props} m={1}>
        <Typography variant="h5">Shengji Helper</Typography>
    </Box>
)

const Links = ({ compact }) => {
    const classes = useStyles()

    return (
        <Box className={compact ? classes.btnLinksCompact : classes.btnLinks}>
            <ButtonLink variant="outlined" to="/calc">
                Calculator
            </ButtonLink>
            <ButtonLink variant="outlined" to="/planner">
                Game Planner
            </ButtonLink>
        </Box>
    )
}

Links.propTypes = {
    compact: PropTypes.bool,
}

const Image = () => {
    const classes = useStyles()
    return (
        <Box className={classes.imageContainer}>
            <img src="index.png" className={classes.image} />
        </Box>
    )
}

export default function IndexPage() {
    const classes = useStyles()

    return (
        <Container className={classes.container}>
            <Metadata />
            <Hidden xsDown>
                <Box className={classes.root}>
                    <Box className={classes.linkCol}>
                        <LinkSectionHeader className={classes.linkSectHeaderBox} />
                        <Links />
                    </Box>
                    <Image />
                </Box>
            </Hidden>
            <Hidden smUp>
                <Box className={classes.smRoot}>
                    <Image />
                    <LinkSectionHeader className={classes.linkSectHeaderBox} />
                    <Links compact />
                </Box>
            </Hidden>
        </Container>
    )
}
