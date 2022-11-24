import { ChatMessage } from '../../atoms';

export const ChatBubbles = (props: any) => {
    return (props.dummyData.map((obj: any, i = 0) => (
        <ChatMessage direction={obj.direction} message={obj.message} createdAt={obj.createdAt.toString().split(' ')[4]} />
    )));
}
