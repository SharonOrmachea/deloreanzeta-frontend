import { AppDataSource } from '../data-source';
import { Request, Response } from "express";
import { validate } from 'class-validator';
import { Category } from "../entity/Category";

export class CategoryController {

    static getAll = async (req: Request, res: Response) => {
        const categoryRepository = AppDataSource.getRepository(Category);
        let categories;
    
        try {
            categories = await categoryRepository.find({ select: ['id', 'name'] });
        } catch (e) {
            res.status(404).json({message: "Somenthing goes wrong"});
        }

        if(categories.length > 0){
            res.send(categories);
        }else{
            res.status(404).json({message: "Not results"});
        }
    };
  
    static getById = async (req: Request, res: Response) => {
        const id = req.params;
        const categoryRepository = AppDataSource.getRepository(Category);
        
        try {
            const category = await categoryRepository.find({select: ['id', 'name'], where: id});
            res.send(category);
        } catch (e) {
            res.status(400).json({message: "Not result"});
        }
    };

    static newCategory = async (req: Request, res: Response) => {
        const { name } = req.body;
        const category = new Category();

        category.name = name;
        
        //Validate
        const validationOpt = { validationError: { target: false, value: false} };
        const errors = await validate(category, validationOpt);
        if(errors.length > 0){
            return res.status(400).json(errors);
        }
        
        const categoryRepository = AppDataSource.getRepository(Category);
        try {
            await categoryRepository.save(category);
        } catch (e) {
            return res.status(409).json(e);
        }
        res.send("Category created");
    };

    static editCategory = async (req: Request, res: Response) => {
        let category: Category;
        const id = req.params;
        const { name } = req.body;
        const categoryRepository = AppDataSource.getRepository(Category);
        
        try {
            category = await categoryRepository.findOneOrFail({where: id});
            category.name = name;
        } catch (e) {
            res.status(404).json({message: "Category not found"});
        }        

        const validationOpt = { validationError: { target: false, value: false} };
        const errors = await validate(category, validationOpt);
        
        if(errors.length > 0){
            return res.status(404).json(errors);
        }
        //try to save
        try {
            await categoryRepository.save(category);
        } catch (e) {
            res.status(409).json({message: "name already in use"});
        }
        
        res.status(201).json({message: "category update"});
    };

    static deleteCategory = async (req: Request, res: Response) => {
        const id = req.params;
        const categoryRepository = AppDataSource.getRepository(Category);

        let category: Category;
        try {
            category = await categoryRepository.findOneOrFail({where: id});
        } catch (e) {
            return res.status(404).json({message: "Category not found"});
        }
        //Remove user
        categoryRepository.delete(id);
        res.status(201).json({message: "Category deleted"});
    };

}