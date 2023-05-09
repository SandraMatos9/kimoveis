import { Repository } from "typeorm";
import { Category } from "../../entities";
import { TCategory, TCategoryRequest } from "../../interfaces/categories.interface";
import { AppDataSource } from "../../data-source";

const  createCategoryServices = async (categoryData: TCategoryRequest):Promise<Category> => {
    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)
    const category: Category = categoryRepository.create(categoryData)
    await categoryRepository.save(category)

    return category
}

export default createCategoryServices