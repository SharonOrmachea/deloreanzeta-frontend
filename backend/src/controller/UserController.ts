import { AppDataSource } from '../ormconfig'
import { Request, Response, NextFunction } from "express"
import { User } from "../entity/User"
import { validate } from "class-validator";

export class UserController {

    static getAll = async (req: Request, res: Response) => {
        const userRepository = AppDataSource.getRepository(User);
        let users;
    
        try {
            users = await userRepository.find({ select: ['id', 'email', 'name', 'lastname', 'telephone', 'role'] });
        } catch (e) {
            res.status(404).json({message: "Somenthing goes wrong"});
        }

        if(users.length > 0){
            res.send(users);
        }else{
            res.status(404).json({message: "Not results"});
        }
    };
  
    static getById = async (req: Request, res: Response) => {
        const id = req.params;
        const userRepository = AppDataSource.getRepository(User);
        
        try {
            const user = await userRepository.find({select: ['id', 'email', 'name', 'lastname', 'telephone', 'role'], where: id});
            res.send(user);
        } catch (e) {
            res.status(400).json({message: "Not result"});
        }
    };

    static newUser = async (req: Request, res: Response) => {
        const { email, password, name, lastname, telephone } = req.body;
        const user = new User();
        
        user.email = email;
        user.password = password;
        user.name = name;
        user.lastname = lastname;
        user.telephone = telephone;
        user.role = "cliente";
        user.resetToken = "";
        
        //Validate
        const validationOpt = { validationError: { target: false, value: false} };
        const errors = await validate(user, validationOpt);
        if(errors.length > 0){
            return res.status(400).json(errors);
        }
        
        //Hash password
        const userRepository = AppDataSource.getRepository(User);
        try {
            user.hashPassword();
            await userRepository.save(user);
        } catch (e) {
            //return res.status(409).json(e);
            return res.status(409).json({message: "Username already exist"});
        }
        res.send("User created");
    };
    
    static editUser = async (req: Request, res: Response) => {
        let user: User;
        const id = req.params;
        const { name, lastname, telephone } = req.body;
        const userRepository = AppDataSource.getRepository(User);
        
        try {
            user = await userRepository.findOneOrFail({where: id});
            user.name = name;
            user.lastname = lastname;
            user.telephone = telephone;
        } catch (e) {
            res.status(404).json({message: "User not found"});
        }        

        const validationOpt = { validationError: { target: false, value: false} };
        const errors = await validate(user, validationOpt);
        
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
    
    static changeRole = async (req: Request, res: Response) => {
        let user: User;
        const id = req.params;
        const { role } = req.body;
        const userRepository = AppDataSource.getRepository(User);
        
        try {
            user = await userRepository.findOneOrFail({where: id});
            user.role = role;
        } catch (e) {
            res.status(404).json({message: "User not found"});
        }        

        const validationOpt = { validationError: { target: false, value: false} };
        const errors = await validate(user, validationOpt);
        
        if(errors.length > 0){
            return res.status(404).json(errors);
        }
        //try to save
        try {
            await userRepository.save(user);
        } catch (e) {
            res.status(409).json(e);
        }

        res.status(201).json({message: "Role update"});
    };
}

export default UserController;
