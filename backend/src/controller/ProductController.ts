import { Request, Response } from 'express';
import { Product } from '../entity/Product';
import CategoryRepository from '../repositories/CategoryRepository';
import ProductRepository from '../repositories/ProductRepository';

export class ProductController {
	static getAll = async (req: Request, res: Response) => {
		const productRepository = ProductRepository;
		/*const { page, limit } = req.query;  ----------------------------------------con paginacion
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
		}*/
		try {
			const products = await productRepository.findAll(); 
			return res.send(products);
		} catch (error) {
			return res.status(500).send({ message: 'Internal server error' });
		}

	};

	static getById = async (req: Request, res: Response) => {
		const productRepository = ProductRepository;

		try {
			const product = await productRepository.findById(parseInt(req.params.id)); 
			return res.send(product);
		} catch (e) {
			return res.status(400).json({ message: 'Not result' });
		}
	};

	static newProduct = async (req: Request, res: Response) => {
		const { name, price, discount, images, description, information, category } = req.body;
		const categoryRepository = CategoryRepository;
		const productRepository = ProductRepository;
		let product = new Product();
		let categoryExist;
		try {
			console.log(category);
			categoryExist = await categoryRepository.findByName(category);
			console.log(categoryExist);
		} catch (error) {
			return res.status(409).json(error);
		}

		product.name = name;
		product.price = price;
		product.discount = discount;
		product.description = description;
		product.information = information;
		product.images = images;
		product.category = categoryExist.id;
		
		try {
			await productRepository.save(product);
			return res.send('Product created');
		}catch(error){
			return res.status(409).json(error);
		}
		
	};
	
	static editProduct = async (req: Request, res: Response) => {
		const { id } = req.params;
		const idInt = parseInt(id as string);
		const { name, price, discount, images, description, information, category } = req.body;
		const productRepository = ProductRepository;
		let product;
		try {
			product = await productRepository.findById(idInt);
			product.name = name;
			product.price = price;
			product.discount = discount;
			product.description = description;
			product.information = information;
			product.images = images;
			product.category = category;
		} catch(error){
			return res.status(409).json(error);
		}
		try {
			await productRepository.updateProduct(product);
			return res.send(product);
			//return res.status(StatusCodes.OK).json({ message: 'OK', product });
		} catch (e) {
			return res.status(400).json({ message: 'Not result' });
		}
	}

	static getProductCategory = async (req: Request, res: Response) => {
		const productRepository = ProductRepository;
		
		try {
			const product = await productRepository.findById(parseInt(req.params.id));
			return res.send(product);
		} catch (e) {
			return res.status(400).json({ message: 'Not result' });
		}
	};

}
