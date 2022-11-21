import { AppBar, Container, Toolbar, Typography, Avatar } from "@mui/material";
export const ChatNavbar = (props: any) => {
    console.log(props)
    return (
        <AppBar position="static">
            <Container>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Avatar src={props.avatar} />
                    <Typography fontWeight={"bold"}>
                        {props.socketData.name}- {props.socketData.id}
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
