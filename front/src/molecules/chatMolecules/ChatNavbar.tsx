import { AppBar, Container, Toolbar, Typography, Avatar } from "@mui/material";
export const ChatNavbar = (props: any) => {

    return (
        <AppBar position="static">
            <Container>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Avatar src={props.avatar} />
                    <Typography fontWeight={"bold"}>
                        Michel.B - {props.socket.id}
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
