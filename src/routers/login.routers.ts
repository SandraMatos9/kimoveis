import { Router } from "express";
import checkDataIsValidMiddleware from "../middlewares/checkDataIsValid.middleware";
import { createLoginController } from "../controllers/login.controllers";

const loginRoutes:Router = Router()

loginRoutes.post('',createLoginController)

export{loginRoutes}