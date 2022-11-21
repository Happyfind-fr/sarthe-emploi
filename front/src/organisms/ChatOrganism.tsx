// TODO: Structure des données socket.io private message, json ? quel conetenu;
import { Box } from '@mui/material';
import S from '../boot/socket.io';
import { ChatMessagery } from '../molecules/chatMolecules/';
import { generateFakeChatData } from '../migrations/generateFakeChatData';
import { styles } from '../Style';
import { useState } from 'react';

export const ChatOrganism = () => {
    const [socketData, setSocketData] = useState({});

    S.on("connect", () => {
        S.on('user', (data: any) => {
            setSocketData({ id: S.id, name: data.name, age: data.age });
        })
    })

    return (
        <Box sx={styles.chatOrganismBox}>
            <ChatMessagery socketData={socketData} dummyData={generateFakeChatData()} />
        </Box>
    );
}
