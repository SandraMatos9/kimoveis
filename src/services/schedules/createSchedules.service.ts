import { Repository } from "typeorm"
import { RealEstate, Schedule, User } from "../../entities"
import { AppDataSource } from "../../data-source"
import { TUser } from "../../interfaces/users.interfaces copy"
import { number } from "zod"
import { TSchedule, TScheduleRequest } from "../../interfaces/schedules.interface"
import { TRealEstate } from "../../interfaces/realEstate.interface"

const  createSchedulesService = async (schedulesData: Schedule,id:number,id2:number):Promise<Schedule> => {
    
    const userRepository:Repository<User>=AppDataSource.getRepository(User)
    const realEstateRepository:Repository<RealEstate>=AppDataSource.getRepository(RealEstate)


    const findUser:TUser|null = await userRepository.findOneBy({
        id
    })
    const findRealEstate:TRealEstate|null = await realEstateRepository.findOneBy({
        id
    })

    const schendulesRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule)

    const newSchedule:Schedule = schendulesRepository.create({
        date: schedulesData.date,
        hour: schedulesData.hour,
        realEstate:findRealEstate!,
            // user: findUser!
        
    
    })

    await schendulesRepository.save(newSchedule)

    return newSchedule
}

export default createSchedulesService