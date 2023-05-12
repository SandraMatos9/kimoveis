import { Response,Request } from "express"
import { Schedule } from "../entities"
import { TScheduleRequest } from "../interfaces/schedules.interface"
import createRealEstateService from "../services/real_estate/createRealEstate.service"
import createSchedulesService from "../services/schedules/createSchedules.service"




const createSchedulesController = async(
    req: Request,
    res:Response
):Promise<Response> =>{
    const scheduleData:TScheduleRequest = req.body
    const userId = res.locals.userId
    const newSchedules = await createSchedulesService(scheduleData,userId)
    return res.status(201).json(newSchedules)
}


export {createSchedulesController}