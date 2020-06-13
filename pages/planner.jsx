import { makeStyles, Typography, Box } from '@material-ui/core'
import React, { useState } from 'react'
import Layout from '../components/layout'
import NumOfPlayerField from '../components/numOfPlayerField'
import DeckPlanner from '../components/deckPlanner'

const useStyles = makeStyles((theme) => ({
    numOfPlayerField: {
        width: 200,
        marginTop: theme.spacing(2),
    },
    deckPlanner: {
        marginTop: theme.spacing(4),
    },
}))

export default function PlannerPage() {
    const classes = useStyles()

    const [numOfPlayers, setNumOfPlayers] = useState('')
    const [gameConfig, setGameConfig] = useState(null)

    const handleNumOfPlayerChange = (event) => {
        setNumOfPlayers(event.target.value)
    }

    return (
        <Layout>
            <Typography variant="h4">Game Planner</Typography>
            <Typography variant="body2">
                Use this tool to decide how many decks should you play your game with.
            </Typography>
            <NumOfPlayerField
                value={numOfPlayers}
                onChange={handleNumOfPlayerChange}
                className={classes.numOfPlayerField}
            />
            {numOfPlayers && (
                <Box className={classes.deckPlanner}>
                    <DeckPlanner numOfPlayers={numOfPlayers} config={gameConfig} setConfig={setGameConfig} dense />
                </Box>
            )}
        </Layout>
    )
}
