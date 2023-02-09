import { Request, Response } from 'express';
import newRepository from '../repositories/NewRepository';
import { StatusCodes } from 'http-status-codes';
import { New } from '../entity/New';
import moment = require('moment');

export class NewController {
	static getAll = async (req: Request, res: Response) => {
		const news = await newRepository.findAll();
		return res.status(StatusCodes.OK).json({ message: 'OK', news });
	};

	static getById = async (req: Request, res: Response) => {
		const { id } = req.params;
		const idInt = parseInt(id as string);

		const neww = await newRepository.findById(idInt);
		return res.status(StatusCodes.OK).json({ message: 'OK', neww });
	};

	static createNew = async (req: Request, res: Response) => {
		const { title, content, image } = req.body;

		const neww = new New();
		neww.title = title;
		neww.content = content;
		neww.description = content.substring(0, 50) + '...';
		neww.imageUrl = image;
        const date = moment().format('YYYY-MM-DDTHH:mm:ss.SSSZ');
        neww.date = date.substring(0, 19).concat('.000-00:00');

		// console.log(
		// 	neww.title + '\n',ws
		// 	neww.content + '\n',
		// 	neww.description + '\n',
		// 	neww.image + '\n',
		// 	neww.createdAt + '\n'
		// );

		try {
			await newRepository.save(neww);
			return res.status(StatusCodes.CREATED).send('News created');
		} catch (error) {
			return res.status(400).json({ message: 'Not result' });
		}
	};

	static updateNew = async (req: Request, res: Response) => {
		const { id } = req.params;
		const idInt = parseInt(id as string);
		const { title, content, image } = req.body;

		const neww = await newRepository.findById(idInt);
		neww.title = title;
		neww.content = content;
		neww.description = content.substring(0, 50) + '...';
		neww.imageUrl = image.file.filename;
		const date = moment().format('YYYY-MM-DDTHH:mm:ss.SSSZ');
        neww.date = date.substring(0, 19).concat('.000-00:00');

		try {
			await newRepository.updateNew(neww);
			return res.status(StatusCodes.OK).json({ message: 'OK', neww });
		} catch (e) {
			return res.status(400).json({ message: 'Not result' });
		}
	};

	static deleteNew = async (req: Request, res: Response) => {
		const { id } = req.params;
		const idInt = parseInt(id as string);

		const neww = await newRepository.findById(idInt);
		await newRepository.deleteNew(neww);
		return res.status(StatusCodes.OK).json({ message: 'OK' });
	};
}
