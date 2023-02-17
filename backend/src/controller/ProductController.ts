import { Request, Response } from 'express';
import { Image } from '../entity/Image';
import { Product } from '../entity/Product';
import CategoryRepository from '../repositories/CategoryRepository';
import ProductRepository from '../repositories/ProductRepository';
//import 

export class ProductController {
	static getAll = async (req: Request, res: Response) => {
		const productRepository = ProductRepository;
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
			return res.send(products);
		} catch (error) {
			if (error.name === 'QueryFailedError') {
				return res.status(500).send({ message: 'Internal server error' });
			} else {
				return res.status(400).send({ message: 'Bad request' });
			}
		}
	};

	static getById = async (req: Request, res: Response) => {
		const productRepository = ProductRepository;

		try {
			const product = await productRepository.findById(parseInt(req.params.id))//.query('SELECT * FROM product WHERE id = ?',[req.params.id]); 
			return res.send(product);
		} catch (e) {
			return res.status(400).json({ message: 'Not result' });
		}
	};

	static newProduct = async (req: Request, res: Response) => {
		const { name, price, images, description, information, category } = req.body;
		const categoryRepository = CategoryRepository;
		const productRepository = ProductRepository;
		let product = new Product();

		try {
			const categoryExist = await categoryRepository.findByName(category);

			if (categoryExist !== null) {
				product.name = name;
				product.price = price;
				product.description = description;
				product.information = information;
				
				product.images = images;

				product.category = categoryExist;

				await productRepository.save(product);
			} else {
				return res.status(404).json({ message: 'The category does not exist' });
			}
		} catch (error) {
			return res.status(409).json(error);
		}
		return res.send('Product created');
	};

	static getProductCategory = async (req: Request, res: Response) => {
		const productRepository = ProductRepository;

		try {
			const product = await productRepository.findById(parseInt(req.params.id))//.query('SELECT * FROM product WHERE id = ?',[req.params.id]); 
			return res.send(product);
		} catch (e) {
			return res.status(400).json({ message: 'Not result' });
		}
	};

}
