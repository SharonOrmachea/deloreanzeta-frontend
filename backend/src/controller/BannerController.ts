import { Request, Response } from 'express';
import bannerRepository from '../repositories/BannerRepository';
import { StatusCodes } from 'http-status-codes';
import { Banner } from '../entity/Banner';

export class BannerController {
	static getAll = async (req: Request, res: Response) => {
		try{
			const banners = await bannerRepository.findAll();
			return res.send(banners);
		}catch(error){
			return res.status(409).json(error);
		}
	};

	static getById = async (req: Request, res: Response) => {
		const { id } = req.params;
		const idInt = parseInt(id as string);
		try{
			const banner = await bannerRepository.findById(idInt);
			return res.send(banner);
		}catch(error){
			return res.status(409).json(error);
		}
	};

	static createBanner = async (req: Request, res: Response) => {
		const { name, imageUrl } = req.body;

		const banner = new Banner();
		banner.name = name;
		banner.imageUrl = imageUrl;
		try {
			await bannerRepository.saveBanner(banner);
			return res.status(StatusCodes.CREATED).send('Banner created');
		} catch (error) {
			return res.status(400).json(error);//.json({ message: 'Not result' });
		}
	};

	static updateBanner = async (req: Request, res: Response) => {
		const { id } = req.params;
		const idInt = parseInt(id as string);
		const { name, imageUrl } = req.body;
		let banner;
		try {
			banner = await bannerRepository.findById(idInt);
			banner.name= name;
			banner.imageUrl = imageUrl;
		} catch(error){
			return res.status(409).json(error);
		}
		try {
			await bannerRepository.updateBanner(banner);
			return res.send(banner);
			//return res.status(StatusCodes.OK).json({ message: 'OK', neww });
		} catch (e) {
			return res.status(400).json({ message: 'Not result' });
		}
	};

	static deleteBanner = async (req: Request, res: Response) => {
		const { id } = req.params;
		const idInt = parseInt(id as string);
		let banner;
		try{
			banner = await bannerRepository.findById(idInt);
		}catch(error){
			return res.status(409).json(error);
		}
		try{
			await bannerRepository.deleteBanner(banner);
			return res.status(StatusCodes.OK).json({ message: 'OK' });
		}catch(error){
			return res.status(409).json(error);
		}
	};
}
