import { z } from 'zod';

const loginSchema= z.object({
    email:z.string().email(),
    password: z.string(),
})



const loginSchemaRequest = loginSchema.omit({
  
    password:true,
    
})

const loginSchemaResponse = loginSchema.omit({
    password:true
})


export{loginSchema,loginSchemaRequest,loginSchemaResponse}