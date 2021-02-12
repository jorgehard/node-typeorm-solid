import { MysqlProvider } from "../../repositories/implementations/MySqlProvider";
import { CreateUserCase } from "./CreateUserCase";
import { CreateUserController } from "./CreateUserController";

const mysqlProvider = new MysqlProvider();
const createUserCase = new CreateUserCase(mysqlProvider);

const createUserController = new CreateUserController(createUserCase);

export { createUserController };
