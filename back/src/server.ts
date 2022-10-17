// server.js
import express,{ Application } from "express";
import { json, urlencoded } from "body-parser";
import dotenv from "dotenv";
import logger from 'morgan';
import router from "./router";


dotenv.config()
const app = express();

export default class Server {
    app:Application;
    port: any;
    constructor() {
        this.app = app;
        this.port = 3000
    }

    config() {
        this.app.use(logger('dev'));

        this.app.use(urlencoded({ extended: true }));
        this.app.use(json());

        this.app.all('/*', (req, res, next) => {
            // res.header("Access-Control-Allow-Origin", "*");
            // res.header("Access-Control-Allow-Headers", "*");
            next();
        });
        // Routes
        this.app.use("/", router);
        app.use("/sd",(req,res)=>{
            res.send('szdok')
        })
    }

    run() {
        this.app.listen(this.port, () => {
            console.log("🚀 ~ file: index.ts ~ line 20 ~ app.listen ~ port", this.port);
        })
    }
}
