import { Repository } from "typeorm"
import { RealEstate } from "../../entities"
import { AppDataSource } from "../../data-source"

const createRealEstateService = async(realEstateData:RealEstate):Promise<RealEstate> =>{
    const realEstateRepository:Repository<RealEstate>=AppDataSource.getRepository(RealEstate)
    const realEstate:RealEstate = realEstateRepository.create(realEstateData)
    await realEstateRepository.save(realEstate)
    return realEstate
    
}
export default createRealEstateService

