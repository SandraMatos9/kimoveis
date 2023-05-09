import { z } from 'zod';

const categorySchema= z.object({
    id: z.number(),
    name: z.string().max(45),  
})

const categorieSchemaRequest = categorySchema.omit({  
    id:true,
})



// const categoriesSchemaResponse=z.array(categoySchemaResponse)

export{categorySchema,categorieSchemaRequest}