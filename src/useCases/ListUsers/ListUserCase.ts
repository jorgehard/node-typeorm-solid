import { IUsersRepository } from "../../repositories/IUsersRepository";

class ListUserCase {
  constructor(private usersRepository: IUsersRepository) {}
  async execute() {
    return await this.usersRepository.findAll();
  }
}

export default ListUserCase;
