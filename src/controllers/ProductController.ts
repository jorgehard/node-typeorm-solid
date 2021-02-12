import { Request, Response } from "express";

class ProductController {
  static index(req: Request, res: Response) {}
  static store(req: Request, res: Response) {}
  static listProductsByUserId(req: Request, res: Response) {}
  static delete(req: Request, res: Response) {}
}

export default ProductController;
