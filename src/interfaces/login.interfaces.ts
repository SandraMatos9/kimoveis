import {z} from 'zod'
import { loginSchema, loginSchemaRequest, loginSchemaResponse } from '../schemas/login.schemas'

type TLoginRequest= z.infer<typeof loginSchemaRequest>
type TLogin = z.infer<typeof loginSchema>
type TLoginResponse = z.infer<typeof loginSchemaResponse>


export{TLogin,TLoginRequest,TLoginResponse }