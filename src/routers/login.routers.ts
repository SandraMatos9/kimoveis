import { Router } from "express";
import checkDataIsValidMiddleware from "../middlewares/checkDataIsValid.middleware";
import { createTokenController } from "../controllers/login.controllers";

const loginRoutes:Router = Router()

loginRoutes.post('/login',checkDataIsValidMiddleware,createTokenController)

export{loginRoutes}