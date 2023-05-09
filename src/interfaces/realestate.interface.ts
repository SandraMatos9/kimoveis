import {z} from 'zod'
import { realEstateSchema, realEstateSchemaRequest } from '../schemas/realEstate.schema'

type TRealEstateRequest= z.infer<typeof realEstateSchemaRequest>
type TRealEstate = z.infer<typeof realEstateSchema>

export {TRealEstate,TRealEstateRequest}