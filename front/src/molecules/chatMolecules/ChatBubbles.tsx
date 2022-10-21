import { ChatMessage } from '../../atoms';

export const ChatBubbles = (props: any) => {
    return (props.dummyData.map((obj: any, i = 0) => (
        <ChatMessage direction={obj.direction} message={obj.message} time={obj.time.toString().split(' ')[4]} />
    )));
}
