import { styles } from '../../Style';
import { Card } from '@mui/material';
import { ChatBubbles, ChatNavbar, ChatInput } from './';

export const ChatMessagery = (props: any) => {
    return (
        <Card sx={styles.bubbleContainer}>
            <ChatNavbar avatar={props.dummyData[0].avatar} socketData={props.socketData} />
            <ChatBubbles dummyData={props.dummyData} />
            <ChatInput />
        </Card>
    );
}
