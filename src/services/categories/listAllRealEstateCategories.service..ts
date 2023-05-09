import { Repository } from "typeorm";
import { Category, User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";

const listAllRealEstateCategoriesService = async (categoryId:number):Promise<Category> =>{

    const categoryRepository: Repository<Category>= AppDataSource.getRepository(Category)


    const categoriesRealEstate:Category|null = await categoryRepository
    .createQueryBuilder("categories")
    .innerJoinAndSelect('categories.real_estate','real_estate')
    
    .select([
        'categories.id',
        'catefories.name',
        'realEstate.id',
        'address.id',
        'address.street',
        'address.zipCode',
        'address.number',
        'address.city',
        'address.state',
    ])
    .innerJoinAndSelect('categories.realEstates','realEstates')
    .innerJoinAndSelect('realEstate.category','category')
    .where('categories.id = :categoryId',{categoryId})
    .getOne()

    if(!categoriesRealEstate){
        throw new AppError ('User not found',404)
    }

    return categoriesRealEstate
}
export default listAllRealEstateCategoriesService