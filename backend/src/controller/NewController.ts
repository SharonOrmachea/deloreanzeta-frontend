import { Request, Response } from 'express';
import newRepository from '../repositories/NewRepository';
import { StatusCodes } from 'http-status-codes';
import { New } from '../entity/New';

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
		neww.image = image;
        neww.createdAt = new Date();
        // detect timezone of neww.createdAt and save in a const variable (timezone) as number (e.g. -3)
        const timezone = neww.createdAt.getTimezoneOffset() / 60;
        // substract timezone from neww.createdAt
        if(timezone !== -3)
            neww.createdAt = new Date(neww.createdAt.getTime() - timezone * 3600000);

        // cast date to string without changing timezone
        const dateString = neww.createdAt.toISOString().slice(0, 19).replace('T', ' ');
        // remove timezone from string
        const dateStringWithoutTimezone = dateString.slice(0, dateString.length - 6);
        // cast string to date
        neww.createdAt = new Date(dateStringWithoutTimezone);

		console.log(
			neww.title + '\n',
			neww.content + '\n',
			neww.description + '\n',
			neww.image + '\n',
			neww.createdAt + '\n'
		);

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
		neww.image = image.file.filename;
		neww.createdAt = new Date();

		console.log(
			neww.title,
			'\n',
			neww.content,
			'\n',
			neww.description,
			'\n',
			neww.image,
			'\n',
			neww.createdAt,
			'\n'
		);

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
