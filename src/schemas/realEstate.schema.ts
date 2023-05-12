import { TypeOf, z } from 'zod';
import { Category, Schedule } from '../entities';
const addressSchema = z.object({
    id:z.number(),
    street: z.string().max(45),
    zipCode:z.string().max(8),
    number:z.string().max(7).nullish(),
    city:z.string().max(20),
    state:z.string().max(2),
})

const addressSchemaNoNumber = addressSchema.omit({ id:true,})
   

const addressSchemaRequest = addressSchema.omit({id:true})

const realEstateSche = z.object({
    id: z.number(),
    sold: z.boolean().default(false),
    value:z.number(),
    size:z.number().int(),
    createdAt: z.string(),
    updatedAt: z.string(),
})


const schedulesSchema = z.object({
    id:z.number(),
    date:z.string(),
    hour:z.string(),
    realEstate: realEstateSche
})
const categorySchema = z.object({
    id:z.number(),
    name:z.string().max(45),
})

const realEstateSchema= z.object({
    id: z.number(),
    sold: z.boolean().default(false),
    value:z.string().or(z.number()).default(0),
    size:z.number().int().positive(),
    address:addressSchema,
    createdAt: z.string(),
    updatedAt: z.string(),
    category: categorySchema,
})

const realEstateSchemaNoNumberAddress= z.object({
    id: z.number(),
    sold: z.boolean().default(false),
    value:z.string().or(z.number()).default(0),
    size:z.number().int().positive(),
    address:addressSchemaNoNumber,
    createdAt: z.string(),
    updatedAt: z.string(),
    category: categorySchema,
    categoryId: z.number()

})

const realEstateSchemaNoNumberRequest = realEstateSchemaNoNumberAddress.omit({
    updatedAt:true,
    createdAt:true,
    sold:true,
    id:true,
    category:true
})


const realEstateSchemaNoCategoryId= z.object({
    value:z.string().or(z.number()).default(0),
    size:z.number().int().positive(),
    address:addressSchemaRequest,
    categoryId:z.number()
})


const realEstateSchemaRequest = realEstateSchema.omit({
    updatedAt:true,
    createdAt:true,
    sold:true,
    id:true,
})



const realEstateSchemaIdRequest = realEstateSchema.extend({
    id: z.number().optional(),
    categoryId: z.number().int(),
    sold: z.boolean().default(false),
    updatedAt:z.string(),
    createdA:z.string(),
    category: categorySchema,
    schedules:schedulesSchema

})

const realEstateSchemaResponse = realEstateSchemaRequest

export{addressSchemaNoNumber,realEstateSchema,realEstateSchemaResponse,realEstateSchemaRequest,realEstateSchemaIdRequest,realEstateSchemaNoCategoryId,realEstateSchemaNoNumberAddress,realEstateSchemaNoNumberRequest}