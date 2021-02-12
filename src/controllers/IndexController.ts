import { Request, Response } from "express";

class IndexController {
  static index(req: Request, res: Response) {
    return res.json({ version: "1.0", status: "Api rodando perfeitamente!" });
  }
}

export default IndexController;
