import { Response,Request,NextFunction } from "express"
import createUsersService from "../services/users/createUsers.service"
import listAllUsersService from "../services/users/listAllUsers.services"
import updateUsersService from "../services/users/updateUsers.services"
import { deleteUsersService } from "../services/users/deleteUser.services"
import { User } from "../entities"
import { TUser, TUsersUpdateRequest } from "../interfaces/users.interfaces copy"


const createUsersController = async(
    req:Request,
    res:Response
    ): Promise<Response> =>{

    const usersData:User = req.body
    const newUsers= await createUsersService(usersData)
    return res.status(201).json(newUsers)
}

const listAllUsersController = async(
    req:Request,
    res:Response
): Promise <Response> =>{
    
    const params= req.query
    const users= await listAllUsersService()

    return res.status(200).json(users)
}

const updateUsersController =async(
    req:Request,
    res:Response
):Promise<Response> => {
    const usersData:TUsersUpdateRequest=req.body
    const userId:number= parseInt(req.params.id)
    const newUserData = await updateUsersService(usersData,userId)
    return res.json(newUserData)

}


const deleteUserController = async(
    req:Request,
    res:Response
    ): Promise<Response> =>{
    const userId =parseInt(req.params.id)
    const deleteUser= await deleteUsersService(userId)
    return res.status(204).json(deleteUser)
}
export {createUsersController,listAllUsersController,updateUsersController,deleteUserController}