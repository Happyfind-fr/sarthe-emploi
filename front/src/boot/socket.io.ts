import React from 'react';
import { io, Socket } from 'socket.io-client';

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(process.env.REACT_APP_API_ENDPOINT!, {
    path: '/socket',
    withCredentials: true,
    extraHeaders: {
        // TODO: inclure extra headers ?
    }
});

export const SocketContext = React.createContext(socket);
export default socket;

interface ServerToClientEvents {
    noArg: () => void;
    user: any;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
    hello: () => void;
}