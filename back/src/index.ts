import express from "express";
import { json, urlencoded } from "body-parser";
import * as handlers from "./handlers";

require('dotenv').config();

const port = process.env.PORT || 3000;
const app = express();

app.use(urlencoded({ extended: true }));

app.use(json())

app.all('/*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "*")
    next()
});

app.get('/', handlers.root);
app.get('/api-auth', handlers.api.auth)

app.listen(port, () => {
    console.log("🚀 ~ file: index.ts ~ line 20 ~ app.listen ~ port", port)

})

export default app;