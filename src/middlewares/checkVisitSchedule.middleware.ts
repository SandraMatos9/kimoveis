import { InsertResult, Repository } from "typeorm";
import { TScheduleRequest } from "../interfaces/schedules.interface";
import { Schedule } from "../entities";
import { AppDataSource } from "../data-source";


const checkVisitScheduleMiddleware = async (scheduleData:TScheduleRequest) =>{
    const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule)

    const schedule: InsertResult = await scheduleRepository
    .createQueryBuilder()
    .insert()
    .values(scheduleData)
    .returning("*")
    .execute()

    return schedule.raw[0]
}

export default checkVisitScheduleMiddleware