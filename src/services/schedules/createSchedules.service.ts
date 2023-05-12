import { InsertResult, Repository } from "typeorm"
import { RealEstate, Schedule, User } from "../../entities"
import { AppDataSource } from "../../data-source"
import { TUser } from "../../interfaces/users.interfaces copy"
import { number } from "zod"
import { TSchedule, TScheduleMessage, TScheduleRequest } from "../../interfaces/schedules.interface"
import { TRealEstate } from "../../interfaces/realEstate.interface"
import { AppError } from "../../error"

const  createSchedulesService = async (schedulesData: TScheduleRequest,userId:number):Promise<TScheduleMessage> => {
    
    const userRepository:Repository<User>=AppDataSource.getRepository(User)
    const realEstateRepository:Repository<RealEstate>=AppDataSource.getRepository(RealEstate)
    const schendulesRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule)



    const findUser:TUser|null = await userRepository.findOneBy({
        id: userId
    })
    const findRealEstate:TRealEstate|null = await realEstateRepository.findOneBy({
        id: userId
        
    })

    if(!findRealEstate) throw new AppError("RealEstate not found", 404) 

   

    

    // Não deve ser possível agendar uma visita a um imóvel com
    //  a mesma data e hora, essa verificação deve ser implementada com query builder.
    const verifyUserScheduleDateAndHour: Schedule|null = await schendulesRepository
    .createQueryBuilder('schedule')
    .where('schedule.date = :date', {date: schedulesData.date})
    .andWhere('schedule.hour = :hour', {hour: schedulesData.hour})
    .andWhere('schedule.user = :userId', {userId: userId})
    .getOne()


    if(verifyUserScheduleDateAndHour){
        throw new AppError("User schedule to this real estate at this date and time already exists", 409)

    }


    const verifyRealStateScheduleDateAndHour: Schedule|null = await schendulesRepository
    .createQueryBuilder('schedule')
    .where('schedule.date = :date', {date: schedulesData.date})
    .andWhere('schedule.hour = :hour', {hour: schedulesData.hour})
    .andWhere('schedule.realEstate = :realEstateId', {realEstateId: schedulesData.realEstateId})
    .getOne()


    if(verifyRealStateScheduleDateAndHour){
        throw new AppError("Schedule to this real estate at this date and time already exists", 409)

    }

  

    // Só deve ser possível agendar uma visita durante horário comercial (08:00 as 18:00).
    



    //Só deve ser possível agendar uma visita durante dias úteis (segunda à sexta).
 


    const newSchedule:Schedule = schendulesRepository.create({
        date: schedulesData.date,
        hour: schedulesData.hour,
        realEstate:findRealEstate,
        user: userId
    })

    await schendulesRepository.save(newSchedule)

    const messageReturn = {message: 'Schedule created'}

    return messageReturn
}

export default createSchedulesService