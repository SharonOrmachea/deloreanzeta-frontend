import conn from '../dbConnection';
import { Product } from '../entity/Product';

const ProductRepository = conn.getRepository(Product).extend({
	// custom methods
	async findAllByPage(page: number, limit: number): Promise<Product[]> {
		return await this.find({
			skip: page * limit,
			take: limit,
		});
	},
	async findAll(): Promise<Product[]> {
		const products = await this.createQueryBuilder('product')
		.leftJoinAndSelect('product.imageUrl', 'image')
		.leftJoinAndSelect('product.category', 'category')
		.select(['product', 'image.data', 'category.name'])
		.getMany();
		
		return products.map(product => ({
			...product,
			imageUrl: product.imageUrl.map(image => (image.data))
		  }));
	},
	async findByName(name: string): Promise<Product> {
		return await this.findOneBy({ name });
	},
	async findById(id: number): Promise<Product> {
		return await this.findOneBy({ id });
	},
	async findByCategory(category: string): Promise<Product[]> {
		// using query builder to get all products by category with name
		const products = await this.createQueryBuilder('product')
			.leftJoinAndSelect('product.category', 'category')
			.where('category.name = :category', { category })
			.getMany();
		return products;
	},
	async saveProduct(product: Product): Promise<Product> {
		return await this.save(product);
	},
	async createProduct(product: Product): Promise<Product> {
		return await this.create(product);
	},
	async updateProduct(product: Product): Promise<Product> {
		return await this.save(product);
	},
});

export default ProductRepository;
