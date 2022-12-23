import express, { Application } from 'express';
import { requestHandler, setHeaders } from './router';
import sharedsession from 'express-socket.io-session';
import { json, urlencoded } from 'body-parser';
import { SocketInstance } from './services';
import session from 'express-session';
import dotenv from 'dotenv';
import logger from 'morgan';
import https from 'https';
import fs from 'fs';

const app = express();
const sess = session({
    secret: `${process.env.SESSION_SECRET!}`,
    resave: true,
    saveUninitialized: true
});

dotenv.config();
export default class ServerInstance extends SocketInstance {

    app: Application; port: any; server: any; io: any;

    constructor() {
        super();
        this.app = app;
        this.port = process.env.PORT!;
        this.server = https.createServer({ key: fs.readFileSync("src/certificates/key.pem"), cert: fs.readFileSync('src/certificates/cert.pem') }, this.app);
        this.io = this.ioServer(this.server);
    };

    config() {
        this.app.use(logger('dev'));
        this.app.use(urlencoded({ extended: true }));
        this.app.use(json());
        this.app.all('/*', setHeaders);
        this.app.use(sess);
        this.io.use(sharedsession(sess));
        this.io.on("connection", () => this.sendHello);
        this.app.use(requestHandler.bind(this.app));
    };

    run() {
        process.on('SIGTSTP', () => this.server.close());
        this.server.listen(this.port, () => {
            console.log(" 🚀 Server Is Running on port 🚀 ", `${this.port}`);
        })
    };
}