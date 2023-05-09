import { Repository } from "typeorm"
import { User } from "../../entities"
import { AppDataSource } from "../../data-source"
import { userSchemaResponse } from "../../schemas/users.schemas"
import { Response,Request,NextFunction } from "express"
import { TUser, TUsersUpdateRequest } from "../../interfaces/users.interfaces copy"

const updateUsersService = async(
    userData:TUsersUpdateRequest,
    userId:number
    ):Promise <Omit <TUser,"password" >> =>{

    const userRepository:Repository<User>= AppDataSource.getRepository(User)
    const oldUserData:User|null= await userRepository.findOneBy({
        id: userId
    })
   
    const newUserData:User = userRepository.create({
        ...oldUserData,
        ...userData,
    })

    await userRepository.save(newUserData)
   
    const returnUser: Omit <TUser,"password" >  = userSchemaResponse.parse(newUserData)
    return returnUser
}

export default updateUsersService