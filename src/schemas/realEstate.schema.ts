import { z } from 'zod';

const realEstateSchema= z.object({
    id: z.number(),
    sold: z.number(),
    value:z.number(),
    size:z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
})

const realEstateSchemaRequest = realEstateSchema.omit({
    updatedAt:true,
    createdAt:true,
    id:true,
    
})

const realEstateSchemaResponse = realEstateSchema.omit({
    id:true
})

export{realEstateSchema,realEstateSchemaResponse,realEstateSchemaRequest}