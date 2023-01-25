import { Request, Response } from 'express';
import { Product } from '../entity/Product';
import { Category } from '../entity/Category';
import { getProductRepository } from '../repositories/ProductRepository';

export class ProductController {
	static getAll = async (req: Request, res: Response) => {
		const productRepository = getProductRepository();
		const { page, limit } = req.query;
		// parse page and limit to number
		const pageInt = parseInt(page as string);
		const limitInt = parseInt(limit as string);
		// get products by page and limit
		try {
			const products = await productRepository.findAllByPage(
				pageInt,
				limitInt
			);
			res.send(products);
		} catch (error) {
			if (error.name === 'QueryFailedError') {
				res.status(500).send({ message: 'Internal server error' });
			} else {
				res.status(400).send({ message: 'Bad request' });
			}
		}
	};

	static getById = async (req: Request, res: Response) => {
		const productRepository = AppDataSource.getRepository(Product);

		try {
			const product = await await productRepository.query(
				'SELECT * FROM product WHERE id = ?',
				[req.params.id]
			); //productRepository.find({ select: ['id', 'name', 'price', 'image', 'description', 'information'], where: id });
			res.send(product);
		} catch (e) {
			res.status(400).json({ message: 'Not result' });
		}
	};

	static newProduct = async (req: Request, res: Response) => {
		const { name, price, images, description, information, category } =
			req.body;
		const categoryRepository = AppDataSource.getRepository(Category);
		//const productRepository = AppDataSource.getRepository(Product);
		const productRepository = getProductRepository();
		let categoryModel = new Category();
		let product = new Product();

		try {
			const categoryExist = await categoryRepository.find({
				select: ['id', 'name'],
				where: { id: category },
			});

			//console.log('contenido de categoriaExist ',categoryExist);
			if (categoryExist.length > 0) {
				product.name = name;
				product.price = price;
				product.description = description;
				product.information = information;
				categoryModel.id = categoryExist[0].id;
				categoryModel.name = categoryExist[0].name;

				product.category = categoryModel;
				product.images = images;

				await productRepository.save(product);
			} else {
				return res
					.status(404)
					.json({ message: 'The category does not exist' });
			}
		} catch (e) {
			return res.status(409).json(e);
		}
		res.send('Product created');
	};
}
