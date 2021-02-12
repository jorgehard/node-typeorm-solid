import { MysqlProvider } from "../../repositories/implementations/MySqlProvider";
import EditUserCase from "./EditUserCase";
import EditUserController from "./EditUserController";

const mysqlProvider = new MysqlProvider();
const editUserCase = new EditUserCase(mysqlProvider);
const editUserController = new EditUserController(editUserCase);

export { editUserController };
