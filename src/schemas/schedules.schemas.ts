import { Response,Request } from 'express';
import { z } from 'zod';




const schedulesSchema= z.object({
    id: z.number(),
    date: z.string(),
    hour:z.string(),
    realEstateId: z.number(),
})

const schedulesSchemaRequest = schedulesSchema.omit({
    id:true
    
})




export{schedulesSchema, schedulesSchemaRequest}