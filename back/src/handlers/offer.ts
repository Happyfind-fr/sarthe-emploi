import { PoleEmploi, Indeed, Formatter } from "../services";
import { Token, Offer } from "../database/models";
import { Request, Response } from "express";

export default class OffersControllers {

  async get(req: any, res: any) {
    if (!req.params.id) return new Formatter().sendCustomResponse(res, 418, "error id");
    console.log("CONSOLE LOGGGGOGOGO", req.params.id)
    res.status(200).send("fszefsef")
  }

  async get_all(req: Request, res: Response) {
    // console.log('getAll', req)
    let arr = new Array();

    try {
      // const tokens = await new Token({}).getAllTokens();
      // await Promise.all(tokens.map(async (token: any, i: number) => {
      //   token.name === 'INDEED_access_token' ? arr.push(await new Indeed().indeed_fetch_offers(tokens[i])) : "";
      // }))
      // console.log("TABLEAU D'OFFRES:", arr)
      res.statusMessage = "Internal Server Error";
      res.status(200).send({ name: await new Offer({}).getAllOffers() })
    } catch (error) { throw error };
  }

  async post_create(req: any, res: any) {

  }
  async put_update(req: any, res: any) {

  }
  async delete(req: any, res: any) {

  }

  async post_auth(req: { body: { secret: string; }; }, res: any) {
    const providers = [{ func: new Indeed().indeed_auth }, { func: new PoleEmploi().pole_emploi_auth }]
    if (!req.body.secret || req.body.secret !== process.env.SECRET) return res.status(500).send({ "error": "bad secret" });
    try {
      await new Token({}).deleteAllTokens();
      providers.map(async (v: any) => {
        const result = await v.func()
        const name = Object.keys(result).toString();
        const value = result[name].access_token;
        const scope = result[name].scope;
        await new Token({ name, value, scope }).createToken();
      })
      return res.status(200).send(`tokens refreshed -> ${new Date(Date.now()).toLocaleString()}`);
    } catch (error) { throw error };
  };

}
