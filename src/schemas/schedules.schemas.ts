import { Response,Request } from 'express';
import { z } from 'zod';




const schedulesSchema= z.object({
    date: z.string(),
    hour:z.string(),
    realEstateId: z.number(),
    userId:z.number()
})

const schedulesSchemaRequest = schedulesSchema.extend({
    id: z.number(),
    
})




export{schedulesSchema, schedulesSchemaRequest}