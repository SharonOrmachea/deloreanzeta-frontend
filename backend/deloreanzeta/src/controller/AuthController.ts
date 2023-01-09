import { AppDataSource } from '../data-source'
import { Request, Response } from "express";
import { User } from "../entity/User";

class AuthController{
    static login = async(req: Request, res: Response) => {
        const { username, password } = req.body;
        if(!(username || password)){ //cambiar por or?
            return res.status(400).json({
                message: "Username & Passrowd are required"})
        }
        const userRepository = AppDataSource.getRepository(User);
        let user: User;

        try{
            user = await userRepository.findOneOrFail(username); //editado
        }catch(e){
            return res.status(400).json({message: "Username or password incorrect"});
        }
        res.send(user);
    };
}

export default AuthController;