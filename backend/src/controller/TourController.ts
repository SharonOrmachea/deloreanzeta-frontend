import { Request, Response } from 'express';
import { validate } from 'class-validator';
import { Tour } from '../entity/Tour';
import tourRepository from '../repositories/TourRepository';
import { StatusCodes } from 'http-status-codes';
//import moment = require('moment');
const moment = require('moment-timezone');
export class TourController {

	static getAll = async (req: Request, res: Response) => {
		try {
			const tours = await tourRepository.findAll();
			return res.send(tours);
		} catch (e) {
			return res
				.status(StatusCodes.INTERNAL_SERVER_ERROR)
				.json({ message: 'Somenthing goes wrong' });
		}
	};

	static getById = async (req: Request, res: Response) => {
		try {
			const { id } = req.params;
			const idInt = parseInt(id as string);
			const tour = await tourRepository.findById(idInt);
			return res.send(tour);
		} catch (e) {
			return res.status(StatusCodes.NOT_FOUND).json({ message: 'Not result' });
		}
	};

	static newTour = async (req: Request, res: Response) => {
		const { place, date, city } = req.body;
		const tour = new Tour();

		tour.place = place;
		//let dateActual = new Date()
		//tour.date = moment(date).format('YYYY-MM-DDTHH:mm:ss.SSSZ').substring(0, 19).concat('.000-00:00');
        console.log(date, " date es del tipo: ", typeof(date));
		const horaServidor = new Date(date);
		console.log(horaServidor);
		//const horaArgentina = moment(horaServidor).tz('America/Argentina/Buenos_Aires').format('YYYY-MM-DD HH:mm:ss');
		tour.date = date;
		console.log(tour.date);
		
		tour.city = city;

		const validationOpt = {
			validationError: { target: false, value: false },
		};
		const e = await validate(tour, validationOpt);
		if (e.length > 0) {
			return res.status(StatusCodes.BAD_REQUEST).json(e);
		}

		try {
			await tourRepository.save(tour);
			return res.status(StatusCodes.CREATED).send('Tour created');
		} catch (e) {
			return res.status(StatusCodes.CONFLICT).json(e);
		}
	};

	static editTour = async (req: Request, res: Response) => {
		const { id } = req.params;
		const idInt = parseInt(id as string);
		const { place, date, city } = req.body;

		try {
			const tour = await tourRepository.findById(idInt);
			tour.place = place;
            tour.date = date;
            tour.city = city;

			const validationOpt = {
				validationError: { target: false, value: false },
			};
			const e = await validate(tour, validationOpt);
			if (e.length > 0) {
				return res.status(StatusCodes.BAD_REQUEST).json(e);
			}
			await tourRepository.save(tour);

			return res
				.status(StatusCodes.CREATED)
				.json({ message: 'Tour updated' });
		} catch (e) {
			if (e.name === 'QueryFailedError') {
				return res
					.status(StatusCodes.INTERNAL_SERVER_ERROR)
					.json({ message: 'Something goes wrong' });
			}
			return res
				.status(StatusCodes.NOT_FOUND)
				.json({ message: 'Tour not found' });
		}
	};

	static deleteTour = async (req: Request, res: Response) => {
		const { id } = req.params;
		const idInt = parseInt(id as string);

		try {
			await tourRepository.findById(idInt);
		} catch (e) {
			return res
				.status(StatusCodes.NOT_FOUND)
				.json({ message: 'Tour not found' });
		}

		try {
			tourRepository.delete(id);
			return res
				.status(StatusCodes.CREATED)
				.json({ message: 'Tour deleted' });
		} catch (error) {
			return res
				.status(StatusCodes.INTERNAL_SERVER_ERROR)
				.json({ message: 'Something goes wrong' });
		}
	};
}
