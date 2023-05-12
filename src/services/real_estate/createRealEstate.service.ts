import { Repository } from "typeorm"
import { Address, Category, RealEstate } from "../../entities"
import { AppDataSource } from "../../data-source"
import { TRealEstate, TRealEstateAllRequest, TRealEstateSchemaIdRequest, TRealEstateSchemaResponse } from "../../interfaces/realEstate.interface"
import { TCategory } from "../../interfaces/categories.interface"
import { number } from "zod"
import { TAddress } from "../../interfaces/address.interface"
import { AppError } from "../../error"

const createRealEstateService = async(realEstateData:TRealEstateAllRequest):Promise<TRealEstateSchemaResponse> =>{

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)
    const addressRepository: Repository<Address> = AppDataSource.getRepository(Address)
    const realEstateRepository:Repository<RealEstate>=AppDataSource.getRepository(RealEstate)
   
   

    const findCategoryId:TCategory|null = await categoryRepository.findOneBy({
        id: realEstateData.categoryId
        
    })

    if(!findCategoryId){
        throw new AppError('Category id not found',404)
        
    }

    const findAddress = await addressRepository.findOneBy({
        ...realEstateData.address,
        number:realEstateData.address.number ? realEstateData.address.number:"",

    })
    if(findAddress){
        throw new AppError('Address already exists',409)
    }

    const newAddress:TAddress = addressRepository.create( realEstateData.address)
    await addressRepository.save(newAddress)


   const newRealEstate:TRealEstate = realEstateRepository.create({
    value:realEstateData.value,
    size:realEstateData.size,
    category: findCategoryId,
    address: newAddress
   })
   await realEstateRepository.save(newRealEstate)


    return newRealEstate
    
}




export default createRealEstateService

