import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { userSchemaResponse, usersSchemaResponse } from "../../schemas/users.schemas";
import { TUsersResponse } from "../../interfaces/users.interfaces copy";

const listAllUsersService = async():Promise<TUsersResponse> => {
    const userRepository:Repository<User> =  AppDataSource.getRepository(User)
    let users:User[]= await userRepository.find()
    const returnUsers: TUsersResponse= usersSchemaResponse.parse(users)
    return returnUsers


}

export default listAllUsersService