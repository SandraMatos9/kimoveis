import { z } from 'zod';

const realEstateSchema= z.object({
    id: z.number(),
    sold: z.number(),
    value:z.number(),
    size:z.number().int(),
    createdAt: z.string(),
    updatedAt: z.string(),
    categoryId: z.number().int(),
})

const addressSchema = z.object({
    street: z.string().max(45),
    zipCode:z.string().max(8),
    number:z.string().max(7),
    city:z.string().max(20),
    state:z.string().max(2),
})

const realEstateSchemaRequest = realEstateSchema.omit({
    updatedAt:true,
    deletedAt:true,
    createdAt:true,
    id:true,
    
})



const realEstateSchemaIdRequest = realEstateSchema.extend({
    id: z.number(),
    sold: z.boolean().default(false),
    updatedAt,
    deletedAt,
    createdA,

})

const realEstateSchemaResponse = realEstateSchema

export{realEstateSchema,realEstateSchemaResponse,realEstateSchemaRequest}