import {z} from 'zod'
import { addressSchema } from '../schemas/address.schemas'



type TAddress = z.infer<typeof addressSchema>

export{TAddress}