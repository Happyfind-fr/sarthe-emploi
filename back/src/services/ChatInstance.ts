export default class ChatInstance {
    io: any;
    constructor(io: any) { this.io = io };
    sendMessage(message: any) { console.log('sendMessage', message, this) };
}