import { z } from 'zod';

const userSchema= z.object({
    id: z.number(),
    name: z.string().max(45),
    email:z.string().email(),
    admin:z.boolean().default(false),
    password: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt:z.string().nullish()
})



const userSchemaRequest = userSchema.omit({
    updatedAt:true,
    deletedAt:true,
    createdAt:true,
    id:true,
    
})

const userSchemaUpdateRequest = userSchemaRequest.partial().omit({
    id:true,
    admin:true
})
const userSchemaResponse = userSchema.omit({
    password:true
    
})

const usersSchemaResponse=z.array(userSchemaResponse)

export{userSchema,userSchemaRequest,userSchemaUpdateRequest,usersSchemaResponse,userSchemaResponse}