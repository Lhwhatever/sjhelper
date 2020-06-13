import { makeStyles } from '@material-ui/core'

export const commonStyles = {
    vContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    hContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    invisible: {
        opacity: 0,
    },
    hExpand: {
        flex: '1 0 0',
    },
}

const commonCls = makeStyles(commonStyles)
export default commonCls
