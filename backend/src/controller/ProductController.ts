import { Request, Response } from 'express';
import { Product } from '../entity/Product';
//import { Category } from '../entity/Category';
import { getProductRepository } from '../repositories/ProductRepository';
import { getCategoryRepository } from '../repositories/CategoryRepository';
import { Image } from '../entity/Image';

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
		const productRepository = getProductRepository();

		try {
			const product = await productRepository.findById(parseInt(req.params.id))//.query('SELECT * FROM product WHERE id = ?',[req.params.id]); 
			res.send(product);
		} catch (e) {
			res.status(400).json({ message: 'Not result' });
		}
	};

	static newProduct = async (req: Request, res: Response) => {
		const { name, price, images, description, information, category } = req.body;
		const categoryRepository = getCategoryRepository();
		const productRepository = getProductRepository();
		let product = new Product();
        let image = new Image();

		try {
			const categoryExist = await categoryRepository.findById(category);

			if (categoryExist !== null) {
				product.name = name;
				product.price = price;
				product.description = description;
				product.information = information;

                for(let i = 0; i < images.length; i++){
                    const buffer = Buffer.from(images[i], "utf-8");
                    const imageProduct = new Image();
                    imageProduct.data = buffer;
                    product.images.push(imageProduct);    
                }
				product.category = categoryExist;

				await productRepository.save(product);
			} else {
				return res.status(404).json({ message: 'The category does not exist' });
			}
		} catch (error) {
			return res.status(409).json(error);
		}
		res.send('Product created');
	};
}
