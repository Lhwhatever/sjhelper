import { Box, CircularProgress, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    loadingContainer: {
        alignSelf: 'center',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
})

const Loading = () => {
    const classes = useStyles()

    return (
        <Box className={classes.loadingContainer}>
            <CircularProgress color="secondary" size="calc(40px + 25vh)" />
        </Box>
    )
}

export default Loading
