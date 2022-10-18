// server.js
import express, { Application } from "express";
import { json, urlencoded } from "body-parser";
import { Server } from "socket.io";
import fs from 'fs';
import https from 'https';
import session from 'express-session';
import sharedsession from 'express-socket.io-session';
import SocketInstance from "./services/SocketInstance";
import dotenv from "dotenv";
import logger from 'morgan';
import router from "./router";


dotenv.config()
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
        this.port = 3000;
        this.server = https.createServer({
            key: fs.readFileSync("src/key.pem"),
            cert: fs.readFileSync('src/cert.pem'),
        }, this.app);

        this.io = new Server(this.server, {
            path: '/socket',
            cors: {
                origin: '*',
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

        // Routes
        this.app.use("/", router);
        app.use("/sd", (req, res) => {
            res.send('szdok')
        })
    }

    run() {
        this.server.listen(this.port, () => {
            console.log("🚀 ~ file: index.ts ~ line 20 ~ app.listen ~ port", this.port);
        })
    }
}
