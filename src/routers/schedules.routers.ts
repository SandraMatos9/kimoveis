import { Router } from "express";

const schedulesRoutes:Router = Router()

schedulesRoutes.post('/schedules')
schedulesRoutes.get('/schedules/realEstate/:id')
export{schedulesRoutes}
