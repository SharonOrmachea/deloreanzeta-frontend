import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Category } from './entity/Category';
import { Image } from './entity/Image';
import { Product } from './entity/Product';
import { User } from './entity/User';


// creating config for typeorm for mysql
export const config: DataSourceOptions = {
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
export default conn;
