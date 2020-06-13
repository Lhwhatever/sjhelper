import { blueGrey, red } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: blueGrey[900],
        },
        secondary: {
            main: red[500],
        },
        error: {
            main: red.A200,
        },
    },
    typography: {
        fontFamily: ['Roboto', '"Helvetica Neue"', 'sans-serif'].join(','),
    },
})

export default theme
