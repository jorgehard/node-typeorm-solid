import { Request, Response } from "express";
import EditUserCase from "./EditUserCase";

class EditUserController {
  constructor(private editUserCase: EditUserCase) {}
  handle = async (req: Request, res: Response): Promise<Response> => {
    const { name, password, email } = req.body;
    const id = Number(req.params.id);

    try {
      await this.editUserCase.execute(id, {
        name,
        password,
        email,
      });
      return res.status(201).json({ id, ...req.body });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        details: err.message,
      });
    }
  };
}
export default EditUserController;
