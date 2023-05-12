import { Router } from "express";
import tokenIsValidMiddleware from "../middlewares/tokenIsValid.middleware";
import checkAdminMiddleware from "../middlewares/checkAdmin.middleware";
import checkDataIsValidMiddleware from "../middlewares/checkDataIsValid.middleware";
import { createSchedulesController } from "../controllers/schedules.controllers";
import { schedulesSchemaRequest } from "../schemas/schedules.schemas";
// import { createSchedulesController } from "../controllers/schedules.controllers";

const schedulesRoutes:Router = Router()

schedulesRoutes.post('',tokenIsValidMiddleware,
checkAdminMiddleware,checkDataIsValidMiddleware(schedulesSchemaRequest),createSchedulesController)
schedulesRoutes.get('/schedules/realEstate/:id')
export{schedulesRoutes}
