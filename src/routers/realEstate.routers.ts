import { Router } from "express";

const realEstateRoutes:Router = Router()

realEstateRoutes.post('/realEstate')
realEstateRoutes.get('/realEstate')

export{realEstateRoutes}