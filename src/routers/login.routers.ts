import { Router } from "express";
import checkDataIsValidMiddleware from "../middlewares/checkDataIsValid.middleware";
import { createLoginController } from "../controllers/login.controllers";
import { loginSchemaRequest } from "../schemas/login.schemas";

const loginRoutes:Router = Router()

loginRoutes.post('',createLoginController)

export{loginRoutes}