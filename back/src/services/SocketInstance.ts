import uuid from 'uuid';
export default class SocketInstance {
    users: any; messages: any; rooms: any;
    sessions: any; io: any;

    constructor() {
        this.users = []; this.messages = [];
        this.rooms = []; this.sessions = [];
    }

    runSocket() { this.io.on("connection", (socket: any) => { console.log("socket", socket.id) }); };
}