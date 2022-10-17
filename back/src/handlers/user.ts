import { User } from '../database/models';
import { Request, Response } from "express";

export default class UserControllers {
    async get(req: { params:{ id:number; }; }, res: Response) {
        try {
          return res.send({ data_result: await new User({ id: req.params.id }).getUserById('firstName') });
        } catch (error) {
          throw error;
        }
    }

    async getAll (req: Request, res: Response) {      
        try {
          return res.send({ data_result: await new User({}).getAllUsers() });
        } catch (error) {
          throw error;
        }
    }

    async create(req: {body:{firstName:string, lastName:string, email:string, password:string }}, res: Response) {
      const { firstName, lastName, email, password } = req.body;
        try {
          return res.send({ data_result: await new User({ lastName, email, firstName, password }).createUser() });
        } catch (error) {
          throw error;
        }
    }

    async update(req:{ body:{ firstName:string,lastName:string, email:string, password:string}, params:{ id:number; }; }, res: Response) {
      const { firstName, lastName, email, password } = req.body;
      console.log(req.body);
      
      try {
          return res.send({ data_result: await new User({ id: req.params.id, firstName, lastName, email, password }).updateUser() });
        } catch (error) {
          throw error;
        }
    }

    async delete(req: { params:{ id:number; }; }, res: Response) {
        try {
          return res.send({ data_result: new User({ id: req.params.id }).deleteUser() });
        } catch (error) {
          throw error;
        }
    }
}