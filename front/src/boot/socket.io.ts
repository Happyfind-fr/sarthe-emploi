import React from 'react';
import { io } from 'socket.io-client';

const socket = io(process.env.REACT_APP_API_ENDPOINT!, {
    path: '/socket',
    transports: ['websocket'],
    withCredentials: true,
    extraHeaders: {
        // TODO: inclure extra headers ?
    }
});

export const SocketContext = React.createContext(socket);
export default socket;