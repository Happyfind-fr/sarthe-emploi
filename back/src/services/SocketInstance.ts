import { Server } from "socket.io";
import * as type from '../types';
export default class SocketInstance {
    users: any; messages: any; rooms: any;
    sessions: any; io: any;

    constructor() {
        this.users = []; this.messages = [];
        this.rooms = []; this.sessions = [];
    }

    runSocket() { this.io.on("connection", (socket: any) => { console.log("socket", socket.id) }); };

    sendHello() {
        return this.io.emit("user", {
            name: "test",
            age: 145
        })
    }

    ioServer(server: any) {
        return new Server<type.ClientToServerEvents, type.ServerToClientEvents, type.InterServerEvents, type.SocketData>(server, {
            path: process.env.SOCKET_PATH,
            cors: {
                origin: 'http://localhost:3000', methods: process.env.ALLOWED_METHODS,
                allowedHeaders: ['headercustom'], credentials: true
            }
        })
    }
}