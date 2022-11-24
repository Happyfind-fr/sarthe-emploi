// server.js
import express, { Application } from "express";
import { json, urlencoded } from "body-parser";
import { Server } from "socket.io";
import fs from 'fs';
import https from 'https';
import session from 'express-session';
import sharedsession from 'express-socket.io-session';
import { SocketInstance } from "./services";
import dotenv from "dotenv";
import logger from 'morgan';
import router from "./router";
import { ClientToServerEvents, InterServerEvents, ServerToClientEvents, SocketData } from "./types";

dotenv.config();
const app = express();
const sess = session({
    secret: "my-secret",
    resave: true,
    saveUninitialized: true
})
export default class ServerInstance extends SocketInstance {
    app: Application;
    port: any;
    server: any;
    io: any;
    constructor() {
        super();
        this.app = app;
        this.port = process.env.PORT!;
        this.server = https.createServer({
            key: fs.readFileSync("src/key.pem"),
            cert: fs.readFileSync('src/cert.pem'),
        }, this.app);

        this.io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>(this.server, {
            path: '/socket',
            cors: {
                origin: 'http://localhost:3000',
                methods: ['GET', 'POST'],
                allowedHeaders: ['headercustom'],
                credentials: true
            }
        })
    }

    config() {

        this.app.use(logger('dev'));
        this.app.use(urlencoded({ extended: true }));
        this.app.use(json());

        this.app.all('/*', (req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "*");
            next();
        });
        this.app.use(sess);
        this.io.use(sharedsession(sess));
        this.io.on("connection", () => {
            this.io.emit("user", {
                name: "test",
                age: 145
            })
        })
        this.app.use("/", router);
    }

    run() {
        process.on('SIGTSTP', () => this.server.close());
        this.server.listen(this.port, () => {
            console.log(" 🚀 Server Is Running on port 🚀 ", `${this.port}`);
        })

    }
}
