import { Repository } from "typeorm";
import { Category, RealEstate } from "../../entities";
import { TCategory } from "../../interfaces/categories.interface";
import { TUser } from "../../interfaces/users.interfaces copy";
import { AppDataSource } from "../../data-source";
import { TRealEstate } from "../../interfaces/realestate.interface";

const listAllRealEstateService = async(realEstate:number) : Promise<TRealEstate[]|null> =>{
    const realEstateRepository:Repository<RealEstate>=AppDataSource.getRepository(RealEstate)
    
    let validRealEstate = realEstate
    if(!validRealEstate || typeof validRealEstate !=="number"|| isNaN(validRealEstate)){
        validRealEstate=1
    }

    const realEstates: TRealEstate[]|null = await realEstateRepository.find()
    return realEstates

    
}
export default listAllRealEstateService