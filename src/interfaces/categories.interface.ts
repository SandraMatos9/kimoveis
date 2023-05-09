import {z} from 'zod'
import { categorieSchemaRequest, categorySchema } from '../schemas/categories.schemas'

type TCategoryRequest= z.infer<typeof categorieSchemaRequest>
type TCategory = z.infer<typeof categorySchema>


export{TCategoryRequest,TCategory}