import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { Repository } from "typeorm";
import { userSchemaResponse } from "../../schemas/users.schemas";
import { TUserResponse } from "../../interfaces/users.interfaces copy";


const createUsersService = async(userData:User):Promise<TUserResponse> =>{
    const userRepository:Repository<User>=AppDataSource.getRepository(User)
    const user:User = userRepository.create(userData)
    await userRepository.save(user)
    const  returnUser: TUserResponse = userSchemaResponse.parse(user)

    return returnUser
}
export default createUsersService