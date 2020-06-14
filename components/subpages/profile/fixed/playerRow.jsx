import { TableCell } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'
import { LevelDisplay } from '../../../levels'
import { PlayerPropType } from '../../../player'
import { HighlightableRow } from '../../../table'

const PlayerRow = (props) => {
    const isDefender = props.playerNum % 2 === props.leader % 2
    const isLeader = props.playerNum === props.leader
    return (
        <HighlightableRow highlight={isLeader ? 1 : 0}>
            <TableCell>
                {props.player.name} (Team {(props.playerNum % 2) + 1})
            </TableCell>
            <TableCell align="center">
                <LevelDisplay level={props.level} active={isDefender} />
            </TableCell>
            <TableCell align="center">{isLeader ? 'Leader' : isDefender ? 'Defender' : 'Attacker'}</TableCell>
            <TableCell>
                {props.nextLeader !== undefined && (
                    <>
                        <LevelDisplay level={props.newLevel} active={props.playerNum % 2 === props.nextLeader % 2} />
                        {props.playerNum === props.cutFirst && !props.willEnd && ' (Cut Deck)'}
                        {props.playerNum === props.nextLeader && !props.willEnd && ' (Leader)'}
                    </>
                )}
            </TableCell>
        </HighlightableRow>
    )
}

PlayerRow.propTypes = {
    player: PlayerPropType.isRequired,
    playerNum: PropTypes.number.isRequired,
    leader: PropTypes.number.isRequired,
    level: PropTypes.number.isRequired,
    newLevel: PropTypes.number,
    nextLeader: PropTypes.number,
    cutFirst: PropTypes.number,
    willEnd: PropTypes.bool.isRequired,
}

export default PlayerRow
