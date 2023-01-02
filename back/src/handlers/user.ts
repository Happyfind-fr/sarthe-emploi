import { User } from '../database/models';
import { Request, Response } from "express";
import { Formatter } from '../services';

export default class UserControllers {
  async get(req: { params: { id: number; }; }, res: Response) {
    try {
      // TODO: getUserById = 'firstName' ?
      return res.send({ data_result: await new User({ id: req.params.id }).getUserById('firstName') });
    } catch (error) { throw error; };
  };

  async get_all(req: Request, res: Response) {
    try {
      const data: any = await new Formatter().checkQuery(req)      
      return res.send({ data_result: await new User({}).getAllUsers(data.pagesize, data.oldlimit) });
    } catch (error) { throw error; };
  };

  async post_create(req: { body: { firstName: string, lastName: string, email: string, password: string } }, res: Response) {
    const { firstName, lastName, email, password } = req.body;
    try {
      return res.send({ data_result: await new User({ lastName, email, firstName, password }).createUser() });
    } catch (error) { throw error; };
  };

  async put_update(req: { body: { firstName: string, lastName: string, email: string, password: string }, params: { id: number; }; }, res: Response) {
    const { firstName, lastName, email, password } = req.body;
    try {
      return res.send({ data_result: await new User({ id: req.params.id, firstName, lastName, email, password }).updateUser() });
    } catch (error) { throw error; };
  };

  async delete(req: { params: { id: number; }; }, res: Response) {
    try {
      return res.send({ data_result: new User({ id: req.params.id }).deleteUser() });
    } catch (error) { throw error; };
  };

}