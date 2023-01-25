// controller definition for the New entity
import { Request, Response } from 'express';
import { getNewRepository } from '../repositories/NewRepository';
import { StatusCodes } from 'http-status-codes';

export class NewController {
    static getAll = async (req: Request, res: Response) => {
        const newRepository = getNewRepository();
        const news = await newRepository.findAll();
        res.status(StatusCodes.OK).json({ message: 'OK', news });
    };

    static getById = async (req: Request, res: Response) => {
        const { id } = req.params;
        const idInt = parseInt(id as string);

        const newRepository = getNewRepository();
        const neww = await newRepository.findById(idInt);
        res.status(StatusCodes.OK).json({ message: 'OK', neww });
    }

    static createNew = async (req: Request, res: Response) => {
        const { title, content } = req.body;
        const description = content.substring(0, 50) + '...';

        const newRepository = getNewRepository();
        const neww = await newRepository.createNew(title, content, description);
        res.status(StatusCodes.CREATED).json({ message: 'OK', neww });
    }

    static updateNew = async (req: Request, res: Response) => {
        const { id } = req.params;
        const idInt = parseInt(id as string);
        const { title, content } = req.body;

        const newRepository = getNewRepository();
        const neww = await newRepository.findById(idInt);
        neww.title = title;
        neww.content = content;
        neww.description = content.substring(0, 50) + '...';

        await newRepository.updateNew(neww);
        res.status(StatusCodes.OK).json({ message: 'OK', neww });
    }

    static deleteNew = async (req: Request, res: Response) => {
        const { id } = req.params;
        const idInt = parseInt(id as string);

        const newRepository = getNewRepository();
        const neww = await newRepository.findById(idInt);
        await newRepository.deleteNew(neww);
        res.status(StatusCodes.OK).json({ message: 'OK' });
    }
}
