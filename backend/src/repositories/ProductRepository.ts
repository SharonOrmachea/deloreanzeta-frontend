// creting product respository
import { EntityRepository, getCustomRepository, Repository } from 'typeorm';
import { Product } from '../entity/Product';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
	// custom methods
    findAllByPage(page: number, limit: number) {
        return this.find({
            skip: page * limit,
            take: limit,
        });
    }
	findByName(name: string) {
		return this.findOneBy({ name });
	}
	findById(id: number) {
		return this.findOneBy({ id });
	}
	async findByCategory(category: string): Promise<Product[]> {
		// using query builder to get all products by category with name
		const products = await this.createQueryBuilder('product')
			.leftJoinAndSelect('product.category', 'category')
			.where('category.name = :category', { category })
			.getMany();

		return products;
	}
    async saveProduct(product: Product): Promise<Product> {
        return await this.save(product);
    }
    async createProduct(product: Product): Promise<Product> {
        return await this.create(product);
    }
}

export const getProductRepository = () => {
    return getCustomRepository(ProductRepository);
}