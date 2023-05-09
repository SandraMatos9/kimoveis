import { Repository } from "typeorm";
import { Category, User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import { TCategory, TCategoryEntitie } from "../../interfaces/categories.interface";

const listAllRealEstateCategoriesService = async (categoryId:number):Promise<TCategoryEntitie|null> =>{

    const categoryRepository: Repository<Category>= AppDataSource.getRepository(Category)

    const categories:TCategoryEntitie|null = await categoryRepository.findOne({
       where: {
        id: categoryId
       },
       relations: {
        realEstate: true
       }
       
       

    })
    return categories
}
export default listAllRealEstateCategoriesService