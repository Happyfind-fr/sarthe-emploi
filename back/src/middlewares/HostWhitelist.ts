export default class HostWhitelist {
    async isWhitelisted(req: any, res: any, next: any) {
        console.log("ok")
        if (process.env.ENV === 'local' && req.hostname === 'localhost') {
            next();
        } else {
            console.log('nope')
        }
    }

    // async test(req: any, res: any, next: any) {
    //     console.log("")
    //     next();
    // }

    // async isBlacklisted(req: any, res: any, next: any) {
    //     console.log("OKOKKOKOK")
    //     if (process.env.ENV === 'local' && req.hostname === 'localhost') {
    //         next();
    //     } else {
    //         console.log('nope')
    //     }
    // }
}