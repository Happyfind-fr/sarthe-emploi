import { OutlinedInput, Box, Button } from '@mui/material';
import { SendRounded } from '@mui/icons-material';
import { styles } from '../Style';

export const ChatCustomInput = () => {
    return (
        <Box sx={styles.customChatInputBox}>
            <OutlinedInput multiline={true} sx={{ borderRadius: 10, marginRight: 1 }} color="info" placeholder="Message..." />
            <Box><Button sx={{ borderRadius: 10 }} variant="contained"><SendRounded /></Button></Box>
        </Box>
    );
}