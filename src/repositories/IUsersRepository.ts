import { User } from "../entity/User";

export interface IUsersRepository {
  findAll(): Promise<User[]>;
  save(user: User): Promise<User>;
  edit(id: number, user: User): Promise<User>;
}
