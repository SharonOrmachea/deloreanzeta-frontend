import { Request, Response } from 'express';
import { getNewRepository } from '../repositories/NewRepository';
import { StatusCodes } from 'http-status-codes';
import { New } from '../entity/New';
import { Image } from '../entity/Image';

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
        const { title, content, image } = req.body;

        const neww = new New();
        neww.title = title;
        neww.content = content;
        neww.description = content.substring(0, 50) + '...';
        neww.image = new Image();
        neww.image.data = Buffer.from(image, 'base64');
        neww.createdAt = new Date();
        
        const newRepository = getNewRepository();
        const result = await newRepository.createNew(neww);
        res.status(StatusCodes.CREATED).json({ message: 'OK', result });
    }

    static updateNew = async (req: Request, res: Response) => {
        const { id } = req.params;
        const idInt = parseInt(id as string);
        const { title, content, image } = req.body;

        const newRepository = getNewRepository();
        const neww = await newRepository.findById(idInt);
        neww.title = title;
        neww.content = content;
        neww.description = content.substring(0, 50) + '...';
        neww.image = new Image();
        neww.image.data = Buffer.from(image, 'base64');

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
