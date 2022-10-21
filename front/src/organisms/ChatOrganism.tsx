// TODO: Structure des données socket.io private message, json ? quel conetenu;
import { Box } from '@mui/material';
import S from '../boot/socket.io';
import { ChatMessagery } from '../molecules/chatMolecules/';
import { generateFakeChatData } from '../migrations/generateFakeChatData';
import { styles } from '../Style';
export const ChatOrganism = () => {

    return (
        <Box sx={styles.chatOrganismBox}>
            <ChatMessagery socket={S} dummyData={generateFakeChatData()} />
        </Box>
    );
}
