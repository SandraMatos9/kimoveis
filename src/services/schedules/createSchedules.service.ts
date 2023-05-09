import { Repository } from "typeorm"
import { Schedule } from "../../entities"
import { AppDataSource } from "../../data-source"

const  createSchedulesService = async (schedulesData: Schedule):Promise<Schedule> => {
    const schendulesRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule)
    const schedule: Schedule = schendulesRepository.create(schedulesData)
    await schendulesRepository.save(schedule)

    return schedule
}

export default createSchedulesService