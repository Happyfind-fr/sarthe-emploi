import { Container } from '@mui/material';
import { styles } from '../Style';
import { ChatOrganism } from '../organisms';

export default function ChatDashboard() {
    return (
        <Container sx={styles.container}>
            <ChatOrganism />
        </Container>
    );
}