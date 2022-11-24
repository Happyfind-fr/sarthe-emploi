export default class HostWhitelist {
    async isWhitelisted(req: any, res: any, next: any) {
        if (process.env.ENV === 'local' && req.hostname === 'localhost') {
            next();
        } else {
            console.log('nope')
        }
    }
}