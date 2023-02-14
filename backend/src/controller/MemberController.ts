import { Request, Response } from 'express';
import memberRepository from '../repositories/MemberRepository';
import { StatusCodes } from 'http-status-codes';
import { Member } from '../entity/Member';

export class MemberController {
	static getAll = async (req: Request, res: Response) => {
		try{
            const members = await memberRepository.findAll();
		    return res.send(members);
        }catch(error){
            return res.status(409).json(error);
        }
	};

	static getById = async (req: Request, res: Response) => {
		const { id } = req.params;
		const idInt = parseInt(id as string);
        try{
		    const member = await memberRepository.findById(idInt);
		    return res.send(member);
        }catch(error){
            return res.status(409).json(error);
        }
	};

	static createMember = async (req: Request, res: Response) => {
		const { name, profession, description, imageUrl } = req.body;

		const member = new Member();
		member.name = name;
		member.profession = profession;
		member.description = description
		member.imageUrl = imageUrl;
        
		try {
			await memberRepository.save(member);
			return res.status(StatusCodes.CREATED).send('Member created');
		} catch (error) {
			return res.status(400).json({ message: 'Not result' });
		}
	};

	static updateMember = async (req: Request, res: Response) => {
		const { id } = req.params;
		const idInt = parseInt(id as string);
		const { name, profession, description, imageUrl } = req.body;
        let member;

        try{
            member = await memberRepository.findById(idInt);
            member.name = name;
    		member.profession = profession;
    		member.description = description
    		member.imageUrl = imageUrl;    

        }catch(error){
            return res.status(409).json(error);
        }

		try {
			await memberRepository.updateNew(member);
			return res.send(member);
		} catch (e) {
			return res.status(400).json({ message: 'Not result' });
		}
	};

	static deleteMember = async (req: Request, res: Response) => {
		const { id } = req.params;
		const idInt = parseInt(id as string);

		const member = await memberRepository.findById(idInt);
		try{
            await memberRepository.deleteNew(member);
		    return res.status(StatusCodes.OK).json({ message: 'OK' });
        }catch(error){
            return res.status(409).json(error);    
        }
	};
}
