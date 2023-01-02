import { Response, Request } from "express";
import fs from 'fs';
export default class Formatter {

    constructor() { };

    async textEscaper(array: any[]) {
        return Object.keys(array).map((obj, index) => { return "$" + (index + 1) }).join(',');
    }
    async jobsProvidersDataFormatter() {
        // TODO: create format function for jobs providers data wich converts into db like data
    }
    async sendCustomResponse(res: Response, code: number, text: string) {
        // console.log("REEESSS:", res)
        const ws = fs.createWriteStream('./test.log', { flags: 'a' });
        const data = `L'addresse IP: ${res.req.ip ? res.req.ip.split(':')[3] : ''} à tenté d'accéder à "${res.req.protocol}://${res.req.hostname}:${res.req.socket.localPort}${res.req.path}" avec la méthode ${res.req.method} le ${new Date().toLocaleString('fr-FR', { hour: "numeric", minute: "numeric", day: "numeric", month: "numeric", year: "numeric" })} et à généré l'erreur "${text}" avec le code ${code}`;

        ws.write('\n' + data);

        res.statusMessage = text;
        res.status(code).end(`${res.req.ip ? res.req.ip.split(':')[3] : ''}`);
    }
    async upperFirstChar(text: string) {
        return text[0].toUpperCase() + text.slice(1);
    }
    async checkQuery(req:Request){
        let data: any = {}
        const { pagesize, oldlimit } = req.query;
        
        if(!pagesize || isNaN(Number(pagesize))){ data.pagesize=5 } else data.pagesize=pagesize; 
        if(!oldlimit || isNaN(Number(oldlimit))){ data.oldlimit=0 }else data.oldlimit=oldlimit;

        return data
    }
}