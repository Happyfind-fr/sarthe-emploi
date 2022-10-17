declare global {
    namespace NodeJS {
        interface ProcessEnv {
            POLE_EMPLOI_ACCESS_TOKEN_REQUEST?: string;
            NODE_ENV?: 'dev' | 'prod'
            POLE_EMPLOI_CLIENT_ID?: string;
            POLE_EMPLOI_CLIENT_SECRET?: string;
            POLE_EMPLOI_SCOPE?: string;

            INDEED_ACCESS_TOKEN_REQUEST?: string;
            INDEED_CLIENT_ID?: string;
            INDEED_CLIENT_SECRET?: string;
            INDEED_SCOPE?: string;

            POSTGRES_CONNECTION?: string;
            PORT?: string;
            SECRET?: string;
        }
    }

    export { }
}