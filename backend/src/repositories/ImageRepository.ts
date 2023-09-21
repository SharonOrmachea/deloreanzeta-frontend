import conn from '../dbConnection';
import { Image } from '../entity/Image';

const ImageRepository = conn.getRepository(Image).extend({
	// custom methods
	async findById(id: number): Promise<Image> {
		return await this.findOneBy({ id });
	},
	/*async findByName(name: string): Promise<Image> {
		return await this.findOneBy({ name });
	},*/
	async findAll(): Promise<Image[]> {
		const images = await this.createQueryBuilder('image').getMany();
		return images;
	},
	async saveImage(image: Image): Promise<Image> {
		return await this.save(image);
	},
	async createImage(image: Image): Promise<Image> {
		return await this.create(image);
	},
});

export default ImageRepository;
