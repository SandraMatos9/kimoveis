import { z } from 'zod';

const schedulesSchema= z.object({
    id: z.number(),
    date: z.string(),
    hour:z.string(),
})

const schedulesSchemaRequest = schedulesSchema.omit({
    updatedAt:true,
    deletedAt:true,
    createdAt:true,
    id:true,
    
})

const schedulesSchemaResponse = schedulesSchema.omit({
    id:true
})


export{schedulesSchema, schedulesSchemaRequest, schedulesSchemaResponse}