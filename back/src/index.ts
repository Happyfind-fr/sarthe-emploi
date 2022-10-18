import ServerInstance from './server';
const server = new ServerInstance();

server.config();
server.run();
server.runSocket();