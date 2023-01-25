import { EntityRepository, getCustomRepository, Repository } from 'typeorm';
import { Category } from '../entity/Category';

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {
    // custom methods
    findByName(name: string) {
        return this.findOneBy({ name });
    }
    findById(id: number) {
        return this.findOneBy({ id });
    }
    async findAll(): Promise<Category[]> {
        const categories = await this.createQueryBuilder('category')
            .getMany();
        return categories;
    }
    async saveCategory(category: Category): Promise<Category> {
        return await this.save(category);
    }
    async createCategory(category: Category): Promise<Category> {
        return await this.create(category);
    }
}

export const getCategoryRepository = () => {
    return getCustomRepository(CategoryRepository);
}
