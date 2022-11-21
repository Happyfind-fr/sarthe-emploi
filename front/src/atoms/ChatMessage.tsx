import { Typography, CardContent } from '@mui/material';
import { styles } from '../Style';

export const ChatMessage = (props: any) => {
    return (
        <CardContent key={props.direction + 1} sx={props.direction === 'left' ? styles.bubbleLeft : styles.bubbleRight}>
            <Typography sx={props.direction === 'right' ? styles.info : styles.secondary}>{props.message}</Typography>
            {props.direction === 'left' ? <Typography color="gray" sx={[styles.ml1, styles.row]} variant='subtitle2'>{props.createdAt}</Typography> : ''}
        </CardContent>
    );
}
