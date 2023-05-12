import { Repository } from "typeorm";
import { RealEstate } from "../../entities";
import { AppDataSource } from "../../data-source";
import { TRealEstateRequest } from "../../interfaces/realEstate.interface"

const listAllRealEstateService = async(realEstate:number) : Promise<TRealEstateRequest[]|null> =>{
    const realEstateRepository:Repository<RealEstate>=AppDataSource.getRepository(RealEstate)
    
    let validRealEstate = realEstate
    if(!validRealEstate || typeof validRealEstate !=="number"|| isNaN(validRealEstate)){
        validRealEstate=1
    }

    const realEstates: Array <RealEstate> = await realEstateRepository.find({
        relations:{
            address:true
        }
    })
    


    return realEstates

}
export default listAllRealEstateService