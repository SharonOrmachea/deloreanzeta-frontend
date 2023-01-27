import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Category } from './entity/Category';
import { Image } from './entity/Image';
import { Product } from './entity/Product';
import { User } from './entity/User';

const config: DataSourceOptions = {
	type: 'mysql',
	host: 'localhost',
	port: 3306,
	username: 'root',
	password: '0000',
	database: 'deloreanzeta',
	entities: [Category, Image, Product, User],
	synchronize: true,
	logging: false,
};

const conn = new DataSource(config);

// return new Promise with the execution of intilization of the connection
export const initialize = async (): Promise<void> => {
	return new Promise((resolve, reject) => {
		conn.initialize()
			.then(() => {
				console.log('Database connected');
				resolve();
			})
			.catch((error) => {
				console.log('Database connection failed');
				reject(error);
			});
	});
};

export default conn;
