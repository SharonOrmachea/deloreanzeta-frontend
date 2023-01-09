import { AppDataSource } from '../data-source'
import { NextFunction, Request, Response } from "express"
import { User } from "../entity/User"
import { validate } from "class-validator";

export class UserController {

    static getAll = async (req: Request, res: Response) => {
        const userRepository = AppDataSource.getRepository(User);
        const users = await userRepository.find(); //Refactor try{} catch{}
    
        try {
            if(users.length > 0){
                res.send(users);
            }else{
                res.status(400).json({mesagge: "not results"});
            }    
        } catch (error) {
            res.status(401).json({message: "probando try/catch"});
        }
        
    };
  
    static getById = async (req: Request, res: Response) => {
        const id = req.params;
        const userRepository = AppDataSource.getRepository(User);
        
        try {
            const user = await userRepository.findOneOrFail({where: id});
            res.send(user);
        } catch (e) {
            res.status(400).json({message: "Not result"});
        }
    };

    static newUser = async (req: Request, res: Response) => {
        const { username, password, role } = req.body;
        const user = new User();
        
        user.username = username;
        user.password = password;
        user.role = role;
        
        //Validate
        const errors = await validate(user);
        if(errors.length > 0){
            return res.status(400).json(errors);
        }
        const userRepository = AppDataSource.getRepository(User);
        try {
            await userRepository.save(user);
        } catch (e) {
            return res.status(409).json({message: "Username already exist"});
        }
        res.send("User created");
    };
    
    static editUser = async (req: Request, res: Response) => {
        let user;
        const id = req.params;
        const { username, role } = req.body;
        const userRepository = AppDataSource.getRepository(User);
        
        try {
            user = await userRepository.findOneOrFail({where: id});
            user.username = username;
            user.role = role;
        } catch (e) {
            res.status(404).json({message: "User not found"});
        }        
        const errors = await validate(user);
        if(errors.length > 0){
            return res.status(404).json(errors);
        }
        //try to save
        try {
            await userRepository.save(user);
        } catch (e) {
            res.status(409).json({message: "Username already in use"});
        }

        res.status(201).json({message: "User update"});
    };

    static deleteUser = async (req: Request, res: Response) => {
        const id = req.params;
        const userRepository = AppDataSource.getRepository(User);

        let user: User;
        try {
            user = await userRepository.findOneOrFail({where: id});
        } catch (e) {
            return res.status(404).json({message: "User not found"});
        }
        //Remove user
        userRepository.delete(id);
        res.status(201).json({message: "User deleted"});
    };
}

export default UserController;
