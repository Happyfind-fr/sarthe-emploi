import { indeed_auth } from "../services/indeed";
import { pole_emploi_auth } from "../services/pole_emploi";

export default class ApiControllers {
  async auth(req: { body: { secret: string; }; }, res: any) {
    if (!req.body.secret || req.body.secret !== process.env.SECRET) return res.status(500).send({ "error": "bad secret" });
    try {
      return res.status(200).send({ "indeed": await indeed_auth(), "pole_emploi": await pole_emploi_auth() });
    } catch (error) { throw error; };
  }
}