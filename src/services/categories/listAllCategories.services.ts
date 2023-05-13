import { Repository } from "typeorm";
import { Category } from "../../entities";
import { TCategory } from "../../interfaces/categories.interfaces";
import { TUser } from "../../interfaces/users.interfaces copy";
import { AppDataSource } from "../../data-source";

const listAllCategoriesService = async(category:number) : Promise<TCategory[]> =>{
    const categoryRepository:Repository<Category>=AppDataSource.getRepository(Category)
    
    let validCategory = category
    if(!validCategory || typeof validCategory !=="number"|| isNaN(validCategory)){
        validCategory=1
    }

    const categories: TCategory[]|null= await categoryRepository.find()
    return categories

    
}
export default listAllCategoriesService