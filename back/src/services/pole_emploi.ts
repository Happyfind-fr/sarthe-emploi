import axios from 'axios';
import qs from 'qs';

require('dotenv').config()
export const pole_emploi_auth = async () => {
    try {
        const { POLE_EMPLOI_CLIENT_ID, POLE_EMPLOI_CLIENT_SECRET, POLE_EMPLOI_SCOPE, POLE_EMPLOI_ACCESS_TOKEN_REQUEST } = process.env
        const body = { grant_type: "client_credentials", client_id: POLE_EMPLOI_CLIENT_ID, client_secret: POLE_EMPLOI_CLIENT_SECRET, scope: POLE_EMPLOI_SCOPE, }

        const access_token = await axios.post(POLE_EMPLOI_ACCESS_TOKEN_REQUEST! || '', qs.stringify(body))
        return { "pole_emploi_access_token": access_token.data };
    } catch (error) {
        return { "error": error }
    }
}