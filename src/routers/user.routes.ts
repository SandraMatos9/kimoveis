import { Router } from "express";
import checkEmailValidateMiddleware from "../middlewares/checkEmailValidate.middleware";
import { createUsersController, deleteUserController, listAllUsersController, updateUsersController } from "../controllers/users.controller";
import checkDataIsValidMiddleware from "../middlewares/checkDataIsValid.middleware";
import { userSchemaRequest } from "../schemas/users.schemas";
import checkAdminMiddleware from "../middlewares/checkAdmin.middleware";
import tokenIsValidMiddleware from "../middlewares/tokenIsValid.middleware";
import checkIdValidateMiddleware from "../middlewares/checkId.middleware";
import { permitionTokenAdminMiddlewate } from "../middlewares/checkOwnerValidate.middleware";

const userRoutes:Router = Router()

userRoutes.post("",checkDataIsValidMiddleware(userSchemaRequest),checkEmailValidateMiddleware,createUsersController)
userRoutes.get("",tokenIsValidMiddleware,checkAdminMiddleware,listAllUsersController)
userRoutes.patch("/:id",tokenIsValidMiddleware,checkAdminMiddleware,permitionTokenAdminMiddlewate,updateUsersController)
userRoutes.delete("/:id",checkAdminMiddleware,deleteUserController)
export {userRoutes}