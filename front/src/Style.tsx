import { blue } from '@mui/material/colors';
import { grey } from '@mui/material/colors';

export const styles = {
    textPrimary: {
        color: '#fff'
    },
    textSecondary: {
        color: '#000'
    },
    bgPrimary: {
        backgroundColor: '#fff'
    },
    bgSecondary: {
        backgroundColor: '#000'
    },
    box: {
        display: 'flex',
        padding: 25,
        margin: 10,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 3
    },
    chatOrganismBox: {
        paddingTop: 10, paddingBottom: 10
    },
    col: {
        display: 'flex',
        flexDirection: 'col',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    customChatInputBox: {
        padding: 2, display: 'flex', justifyContent: 'flex-end', alignItems: 'center'
    },
    flashy: {
        backgroundColor: 'pink'
    },
    message: {
        backgroundColor: '#fff',
        border: '1px solid #e5e5ea',
        borderRadius: '0.25rem',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "SanFrancisco",
        fontSize: '1.25rem',
        margin: '0 auto 1rem',
        maxWidth: '600px',
        padding: '0.5rem 1.5rem',
    },
    messageText: {
        borderRadius: '1.15rem',
        lineHeight: '1.25',
        maxWidth: '75 %',
        padding: '0.5rem .875rem',
        position: 'relative',
        overflowWrap: 'break-word',
        wordWrap: 'break-word',
        hyphens: 'auto'
    },
    // TEST
    containers: {
        bottom: 0,
        position: 'fixed'
    },
    bubbleContainer: {

    },
    bubbleLeft: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        width: '50%',
        margin: '5px',
        padding: '10px',
    },
    bubbleRight: {
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '5px',
        padding: '10px',
    },
    border: {
        border: 5,
        borderRadius: 3,
    },
    info: {
        backgroundColor: blue[600],
        padding: 1.5,
        fontWeight: 'bold',
        color: '#fff',
        borderRadius: 6
    },
    secondary: {
        padding: 1.5,
        backgroundColor: grey[300],
        color: '#000',
        borderRadius: 6
    },
    ml1: {
        marginLeft: 1
    },
    row: {
        display: 'flex',
        flexDirection: 'row'
    }
};