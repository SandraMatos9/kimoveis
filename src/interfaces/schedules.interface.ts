import {z} from 'zod'
import { schedulesSchema, schedulesSchemaRequest } from '../schemas/schedules.schemas'

type TScheduleRequest= z.infer<typeof schedulesSchemaRequest>
type TSchedule = z.infer<typeof schedulesSchema>

type TScheduleMessage = {
    message:string
}

export {TSchedule, TScheduleRequest,TScheduleMessage}