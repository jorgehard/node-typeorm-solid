import { Request, Response } from "express";
import ListUserCase from "./ListUserCase";

class ListUserController {
  constructor(private listUserCase: ListUserCase) {}
  handle = async (req: Request, res: Response): Promise<Response> => {
    try {
      const users = await this.listUserCase.execute();
      return res.status(200).json(users);
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        details: err.message,
      });
    }
  };
}
export default ListUserController;
