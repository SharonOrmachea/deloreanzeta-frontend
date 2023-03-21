import { Request, Response } from 'express';
import { Image } from '../entity/Image';
import { Product } from '../entity/Product';
import CategoryRepository from '../repositories/CategoryRepository';
import ImageRepository from '../repositories/ImageRepository'
import ProductRepository from '../repositories/ProductRepository';
import { StatusCodes } from 'http-status-codes';

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
		const { name, price, discount, imageUrl, description, information, category } = req.body;
		const categoryRepository = CategoryRepository;
		const imageRepository = ImageRepository;
		const productRepository = ProductRepository;
		let product = new Product();
		let categoryExist;

		try {
			categoryExist = await categoryRepository.findByName(category);
			
			product.name = name;
			product.price = price;
			product.discount = discount;
			product.finalPrice = parseFloat((price - ((price*discount)/100)).toFixed(2));
			product.description = description;
			product.information = information;
			product.category = categoryExist;
			product.imageUrl = imageUrl;
				
		} catch (error) {
			return res.status(409).json(error);
		}
		try {
			
			await productRepository.saveProduct(product);
			for(let i = 0; i < imageUrl.length; i++){
				let imagen = new Image();	
				try {
					imagen.data = imageUrl[i];
					imagen.product = product;
					await imageRepository.saveImage(imagen);
				}catch(error){
					return res.status(409).json(error);
				}
			}
			return res.status(StatusCodes.CREATED).send('Product created');
		}catch(error){
			return res.status(409).json(error);
		}
	};
	
	static editProduct = async (req: Request, res: Response) => {
		const { id } = req.params;
		const idInt = parseInt(id as string);
		const { name, price, discount, imageUrl, description, information, category } = req.body;
		const imageRepository = ImageRepository;
		const productRepository = ProductRepository;
		let product;
		try {
			product = await productRepository.findById(idInt);
			product.name = name;
			product.price = price;
			product.discount = discount;
			product.finalPrice = parseFloat((price - ((price*discount)/100)).toFixed(2));
			product.description = description;
			product.information = information;
			product.imageUrl = imageUrl;
			product.category = category;
		} catch(error){
			return res.status(409).json(error);
		}
		try {
			for(let i = 0; i < imageUrl.length; i++){
				let imagen = new Image();	
				try {
					imagen.data = imageUrl[i];
					imagen.product = product;
					await imageRepository.saveImage(imagen);
				}catch(error){
					return res.status(409).json(error);
				}
			}
			await productRepository.updateProduct(product);
			return res.send(product);
			//return res.status(StatusCodes.OK).json({ message: 'OK', product });
		} catch (e) {
			return res.status(400).json({ message: 'Not result' });
		}
	}

	/*static getProductCategory = async (req: Request, res: Response) => {
		const productRepository = ProductRepository;
		
		try {
			const product = await productRepository.findById(parseInt(req.params.id));
			return res.send(product);
		} catch (e) {
			return res.status(400).json({ message: 'Not result' });
		}
	};
	*/
	
	static getAllProductscategory = async (req: Request, res: Response) => {
		const { category } = req.params;
		const productRepository = ProductRepository;
		try {
			const products = await productRepository.findByCategory(category); 
			return res.send(products);
		} catch (error) {
			return res.status(500).send({ message: 'Internal server error' });
		}

	};

}
