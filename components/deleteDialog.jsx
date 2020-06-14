import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'
import ResponsiveDialog from './responsiveDialog'

const DeleteDialog = ({ open, setOpen, onDelete }) => {
    const [target, description] = open
    const handleClose = () => setOpen([null, description])
    const handleDelete = () => {
        onDelete(target)
        handleClose()
    }

    return (
        <ResponsiveDialog open={target !== null} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle>Delete {description}?</DialogTitle>
            <DialogContent>
                <DialogContentText>You are about to delete {description}. Do you wish to continue?</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleDelete} color="secondary">
                    Delete
                </Button>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
            </DialogActions>
        </ResponsiveDialog>
    )
}

DeleteDialog.propTypes = {
    open: PropTypes.array.isRequired,
    setOpen: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default DeleteDialog
