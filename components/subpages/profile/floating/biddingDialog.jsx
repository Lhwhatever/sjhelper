import {
    Button,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControlLabel,
    Paper,
    Radio,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography,
} from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'
import { LevelDisplay } from '../../../levels'
import { PlayerPropType } from '../../../player'
import ResponsiveDialog from '../../../responsiveDialog'
import { DarkTableHead, PaddedTable } from '../../../table'

const calculateBiddingTable = (playerList) => {
    let optionsBitfield = 0b0
    const n = playerList.length

    const table = playerList.map((player, i) => {
        if (player.active) {
            let bitmask = 1 << player.level
            optionsBitfield = (optionsBitfield & ~bitmask) ^ bitmask
            return { [player.level]: i }
        } else {
            const playerOptions = {}
            for (let j = (i + 1) % n; j != i; j = (j + 1) % n) {
                if (playerList[j].active && playerOptions[playerList[j].level] === undefined)
                    playerOptions[playerList[j].level] = j
            }
            return playerOptions
        }
    })

    const options = []
    optionsBitfield >>= 2
    for (let i = 2; optionsBitfield != 0b0; i++) {
        if (optionsBitfield & 0b1) options.push(i)
        optionsBitfield >>= 1
    }

    return [options, table]
}

const BiddingTableRow = ({ playerNum, playerList, entry, allOptions, size, bid, onChoice }) => {
    const player = playerList[playerNum]
    return (
        <TableRow>
            <TableCell>{player.name}</TableCell>
            <TableCell align="center">
                <LevelDisplay player={player} />
            </TableCell>
            {allOptions.map((option, i) => {
                const player = entry[option]
                if (player === undefined)
                    return (
                        <TableCell key={i} align="center">
                            -
                        </TableCell>
                    )
                return (
                    <TableCell key={i}>
                        <FormControlLabel
                            control={<Radio size={size} />}
                            label={playerList[entry[option]].name}
                            checked={(bid.bidder == playerNum && bid.bid === option) || false}
                            value={{ bidder: playerNum, bid: option }}
                            onChange={() => onChoice(playerNum, option)}
                        />
                    </TableCell>
                )
            })}
        </TableRow>
    )
}

BiddingTableRow.propTypes = {
    playerNum: PropTypes.number.isRequired,
    playerList: PropTypes.arrayOf(PlayerPropType.isRequired),
    entry: PropTypes.object.isRequired,
    allOptions: PropTypes.arrayOf(PropTypes.number).isRequired,
    size: PropTypes.oneOf(['small', 'medium']),
    bid: PropTypes.exact({
        bidder: PropTypes.number,
        bid: PropTypes.number,
    }).isRequired,
    onChoice: PropTypes.func.isRequired,
}

const BiddingDialog = ({ open, setOpen, bid, setBid, playerList, onLeaderChange }) => {
    const handleClose = () => setOpen(false)
    const [biddingOptions, biddingTable] = calculateBiddingTable(playerList)

    const handleSetChoice = (bidder, bid) => {
        setBid({ bidder, bid })
        onLeaderChange(biddingTable[bidder][bid])
    }

    return (
        <ResponsiveDialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle>Bidding</DialogTitle>
            <DialogContent>
                <Typography variant="body2">
                    The following table shows the options each player may bid, and the resultant leader. Tap on the
                    corresponding option to select the bidder and the bid.
                </Typography>
                <TableContainer component={Paper} variant="outlined">
                    <PaddedTable size="small">
                        <DarkTableHead>
                            <TableRow>
                                <TableCell rowSpan={2}>Bidder</TableCell>
                                <TableCell rowSpan={2} align="center">
                                    Level
                                </TableCell>
                                <TableCell colSpan={biddingOptions.length} align="center">
                                    Leader by Bid
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                {biddingOptions.map((option, i) => (
                                    <TableCell key={i} align="center">
                                        <LevelDisplay level={option} />
                                    </TableCell>
                                ))}
                            </TableRow>
                        </DarkTableHead>
                        <TableBody>
                            {biddingTable.map((entry, i) => (
                                <BiddingTableRow
                                    key={i}
                                    size="small"
                                    playerList={playerList}
                                    playerNum={i}
                                    entry={entry}
                                    allOptions={biddingOptions}
                                    bid={bid}
                                    onChoice={handleSetChoice}
                                />
                            ))}
                        </TableBody>
                    </PaddedTable>
                </TableContainer>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="primary" onClick={handleClose}>
                    Close
                </Button>
            </DialogActions>
        </ResponsiveDialog>
    )
}

BiddingDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    bid: BiddingTableRow.propTypes.bid,
    setBid: PropTypes.func.isRequired,
    playerList: PropTypes.arrayOf(PlayerPropType).isRequired,
    onLeaderChange: PropTypes.func.isRequired,
}

export default BiddingDialog
