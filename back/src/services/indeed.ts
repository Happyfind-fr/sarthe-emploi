import axios from 'axios';
import qs from 'qs';
export const indeed_auth = async () => {

    require('dotenv').config()

    try {
        const { INDEED_CLIENT_ID, INDEED_CLIENT_SECRET, INDEED_SCOPE, INDEED_ACCESS_TOKEN_REQUEST } = process.env
        const body = { grant_type: "client_credentials", client_id: INDEED_CLIENT_ID, client_secret: INDEED_CLIENT_SECRET, scope: INDEED_SCOPE }

        const access_token = await axios.post(INDEED_ACCESS_TOKEN_REQUEST! || '', qs.stringify(body))
        return { "INDEED_access_token": access_token.data };
    } catch (error) {
        return { "error": error }
    }
}
