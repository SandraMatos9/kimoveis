import {z} from 'zod'
import { categorieSchemaRequest, categorySchema } from '../schemas/categories.schemas'
import { Category } from '../entities'


type TCategoryRequest= z.infer<typeof categorieSchemaRequest>
type TCategory = z.infer<typeof categorySchema>
type TCategoryEntitie = Category


export{TCategoryRequest,TCategory,TCategoryEntitie}