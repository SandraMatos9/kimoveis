import 'reflect-metadata'
import "express-async-errors"
import express,{Application} from "express"
import { handlesErros } from './error'
import { userRoutes } from './routers/user.routes'
import { schedulesRoutes } from './routers/schedules.routers'
import { realEstateRoutes } from './routers/realEstate.routers'
import { categoriesRoutes } from './routers/categories.router'
import { loginRoutes } from './routers/login.routers'
const app: Application = express()
app.use(express.json())

app.use('/users',userRoutes)
app.use('/login', loginRoutes)
app.use('/categories',categoriesRoutes)
app.use('/schedules',schedulesRoutes)
app.use('/realEstate',realEstateRoutes)
app.use(handlesErros)



export default app