import axios from 'axios';
import qs from 'qs';
export default class Indeed {
    constructor() {

    }
    async indeed_auth() {
        try {
            const { INDEED_CLIENT_ID, INDEED_CLIENT_SECRET, INDEED_SCOPE, INDEED_ACCESS_TOKEN_REQUEST, INDEED_GRANT_TYPE } = process.env;
            const body = {
                grant_type: INDEED_GRANT_TYPE, client_id: INDEED_CLIENT_ID,
                client_secret: INDEED_CLIENT_SECRET, scope: INDEED_SCOPE
            };
            const access_token = await axios.post(INDEED_ACCESS_TOKEN_REQUEST! || '', qs.stringify(body));
            return { "INDEED_access_token": access_token.data };

        } catch (error) { return { "error": error } };
    }

    async indeed_fetch_offers(token: any) {
        try {
            const { INDEED_API_ENDPOINT } = process.env;
            const response = await axios.get(INDEED_API_ENDPOINT!, {
                headers: {
                    Authorization: 'Bearer ' + token.value
                }
            })
            return response.data;
        } catch (e) {
            console.log(e)
        }
    }
}