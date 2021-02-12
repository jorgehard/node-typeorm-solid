import { User } from "../../entity/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { CreateUseDTO } from "./CreateUserDTO";

export class CreateUserCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: CreateUseDTO) {
    const user = new User(data);
    await this.usersRepository.save(user);
  }
}
