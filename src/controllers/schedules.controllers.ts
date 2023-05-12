import { Response,Request } from "express"
import { Schedule } from "../entities"
import { TScheduleRequest } from "../interfaces/schedules.interface"
import createRealEstateService from "../services/real_estate/createRealEstate.service"
import createSchedulesService from "../services/schedules/createSchedules.service"




const createSchedulesController = async(
    req: Request,
    res:Response
):Promise<Response> =>{
    const scheduleData:Schedule = req.body
    const {id} = res.locals
    const newSchedules = await createSchedulesService(scheduleData,id)
    return res.status(201).json(newSchedules)
}


export {createSchedulesController}