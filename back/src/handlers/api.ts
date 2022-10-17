import { indeed_auth } from "../services/indeed";
import { pole_emploi_auth } from "../services/pole_emploi";

export async function auth(req: { body: { secret: string; }; }, res: any) {
    if (!req.body.secret || req.body.secret !== process.env.SECRET) return res.status(500).send({ "error": "bad secret" })
    const pole_emploi_access_token = await pole_emploi_auth();
    const indeed_access_token = await indeed_auth();

    res.status(200).send({ "indeed": await indeed_auth(), "pole_emploi": await pole_emploi_auth() })
}