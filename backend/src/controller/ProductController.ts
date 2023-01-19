import { AppDataSource } from '../data-source';
import { Request, Response } from "express";
import { validate } from 'class-validator';
import { Product } from "../entity/Product";
import { CategoryController } from '../controller/CategoryController';
import { Category } from '../entity/Category';
import { getManager } from 'typeorm';

export class ProductController {

    static getAll = async (req: Request, res: Response) => {
        const productRepository = AppDataSource.getRepository(Product);
        const categoryRepository = AppDataSource.getRepository(Category);
        let products;
        let product;
    
        try {
            products = await productRepository.query("SELECT * FROM product");//ProductRepository.find({ select: ['id', 'name', 'price', 'image', 'description', 'information', 'category'] });
            console.log(typeof(products));
        } catch (e) {
            res.status(404).json({message: "Somenthing goes wrong ", e});
        }

        if(products.length > 0){
            let productsEdit = [];
            for(let i = 0; i < products.length; i++){
                product.id = products[i].id;
                product.name = products[i].name;
                product.price = products[i].price;
                product.image = products[i].image;
                product.description = products[i].description;
                product.information = products[i].information;
                product.category = await categoryRepository.findOneOrFail({where: {"id": products[i].category}});
                productsEdit.push(product);
                console.log(product);
            }
            /*crear array vacio
            crear un product vacio
            recorrer products y asignar todos sus campos al vacio , ademas del nombre de la categoria en lugar del id
            guardar el product editado en el array vacio
            retornar el array
            */

            res.send(productsEdit);
        }else{
            res.status(404).json({message: "Not results"});
        }
    };

    static getById = async (req: Request, res: Response) => {

        const productRepository = AppDataSource.getRepository(Product);
        
        try {
            const product = await  await productRepository.query("SELECT * FROM product WHERE id = ?", [req.params.id]);//productRepository.find({ select: ['id', 'name', 'price', 'image', 'description', 'information'], where: id });
            res.send(product);
        } catch (e) {
            res.status(400).json({message: "Not result"});
        }
    };

    static newProduct = async (req: Request, res: Response) => {
        
        const { name, price, image, description, information, category } = req.body;
        const categoryRepository = AppDataSource.getRepository(Category);
        const productRepository = AppDataSource.getRepository(Product);
        let categoryModel = new Category();
        let product = new Product();

        try {
            const categoryExist = await categoryRepository.find({select: ['id','name'], where: {"id": category}});
            //console.log('contenido de categoriaExist ',categoryExist);
            if( categoryExist.length > 0 ){

                product.name = name;
                product.price = price;
                product.image = image;
                product.description = description;
                product.information = information;
                categoryModel.id = categoryExist[0].id;
                categoryModel.name = categoryExist[0].name;
                
                product.category = categoryModel;
                
                await productRepository.save(product);
                
            }else{
                return res.status(404).json({message: "The category does not exist"});
            }
        } catch (e) {
            return res.status(409).json(e);
        }
        res.send("Product created");
    };


}