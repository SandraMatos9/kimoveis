import {z} from 'zod'
import { userSchema, userSchemaRequest, userSchemaResponse, userSchemaUpdateRequest, usersSchemaResponse } from '../schemas/users.schemas'
import { DeepPartial } from 'typeorm'

type TUserRequest= z.infer<typeof userSchemaRequest>
type TUser = z.infer<typeof userSchema>
type TUserResponse = z.infer<typeof userSchemaResponse>
type TUserUpdateRequest = z.infer<typeof userSchemaUpdateRequest>
type TUsersResponse= z.infer<typeof usersSchemaResponse>
type TUsersUpdateRequest = DeepPartial<TUserRequest> 


export{ TUserRequest, TUser,TUserResponse,TUsersResponse,TUsersUpdateRequest,TUserUpdateRequest}