import {z} from 'zod'
import { realEstateSchemaNoNumberAddress, realEstateSchema, realEstateSchemaIdRequest, realEstateSchemaNoCategoryId, realEstateSchemaRequest, realEstateSchemaResponse, realEstateSchemaNoNumberRequest, addressSchemaNoNumber } from '../schemas/realEstate.schema'

type TRealEstateRequest= z.infer<typeof realEstateSchemaRequest>
type TRealEstateAllRequest =z.infer<typeof realEstateSchemaNoCategoryId>

type TRealEstate = z.infer<typeof realEstateSchema>

type TRealEstateSchemaIdRequest = z.infer<typeof realEstateSchemaIdRequest>
type TRealEstateSchemaResponse = z.infer<typeof realEstateSchemaResponse>
type TREalEstateSchemaNoNumber = z.infer<typeof realEstateSchemaNoNumberAddress>
type TRealEstateSchemaNoNumberRequest = z.infer<typeof realEstateSchemaNoNumberRequest>
type TRealEstateNoNUmberSchema = z.infer<typeof addressSchemaNoNumber>

export  {TRealEstateNoNUmberSchema, TRealEstate,TRealEstateRequest,TRealEstateSchemaIdRequest,TRealEstateSchemaResponse,TRealEstateAllRequest,TREalEstateSchemaNoNumber,TRealEstateSchemaNoNumberRequest}