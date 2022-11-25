declare module 'express-ip' {
    function ip(): {
        getIpInfoMiddleware: (req: any, res: any, next: any) => void;
    }
    export = ip;
}
