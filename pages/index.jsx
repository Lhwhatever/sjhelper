import { Box, Button, Container, Hidden, makeStyles, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import Metadata from '../components/metadata'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        flexGrow: 1,
        height: '100vh'
    },
    linkCol: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    btnLinks: {
        display: 'flex',
        flexDirection: 'column',
        '& a': { marginBottom: theme.spacing(1) }
    },
    btnLinksCompact: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        '& a': {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1)
        }
    },
    imageContainer: {
        flexGrow: 3
    },
    image: {
        maxWidth: '100%'
    },
    smroot: {
        display: 'flex',
        flexDirection: 'column'
    },
    linksectheaderbox: {
        display: 'flex',
        justifyContent: 'center'
    },
}))

const LinkSectionHeader = props => (
    <Box {...props} m={1}><Typography variant="h5">Shengji Helper</Typography></Box>
)

const Links = ({ compact }) => {
    const classes = useStyles()

    return (<Box className={compact ? classes.btnLinksCompact : classes.btnLinks}>
        <Button variant="outlined">Calculator</Button>
        <Button variant="outlined">Game Planner</Button>
    </Box>)
}

Links.propTypes = {
    compact: PropTypes.bool
}

const Image = () => {
    const classes = useStyles()
    return <Box className={classes.imageContainer}><img src="index.png" className={classes.image} /></Box>
}

export default function IndexPage() {
    const classes = useStyles()

    return (<Container className={classes.container}>
        <Metadata />
        <Hidden xsDown>
            <Box className={classes.root}>
                <Box className={classes.linkCol}>
                    <LinkSectionHeader className={classes.linksectheaderbox} />
                    <Links />
                </Box>
                <Image />
            </Box>
        </Hidden>
        <Hidden smUp>
            <Box className={classes.smroot}>
                <Image />
                <LinkSectionHeader className={classes.linksectheaderbox} />
                <Links compact />
            </Box>
        </Hidden>
    </Container>)
}