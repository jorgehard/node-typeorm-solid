import { MysqlProvider } from "../../repositories/implementations/MySqlProvider";
import ListUserCase from "./ListUserCase";
import ListUserController from "./ListUserController";

const mysqlProvider = new MysqlProvider();
const listUserCase = new ListUserCase(mysqlProvider);
const listUserController = new ListUserController(listUserCase);

export { listUserController };
