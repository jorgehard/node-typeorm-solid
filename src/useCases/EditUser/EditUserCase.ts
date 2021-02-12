import { User } from "../../entity/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { EditUserDTO } from "./EditUserDTO";

class EditUserCase {
  constructor(private usersRepository: IUsersRepository) {}
  async execute(id: number, data: EditUserDTO) {
    const user = new User(data);
    await this.usersRepository.edit(id, user);
  }
}

export default EditUserCase;
