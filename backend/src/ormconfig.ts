import 'reflect-metadata';
import { Category } from './entity/Category';
import { Product } from './entity/Product';
import { User } from './entity/User';

// imports for typeorm
import { DataSourceOptions } from 'typeorm';

// creating config for typeorm for mysql
export const config: DataSourceOptions = {
	type: 'mysql',
	host: 'localhost',
	port: 3306,
	username: 'root',
	password: '0000',
	database: 'deloreanzeta',
	entities: [Category, Product, User],
	synchronize: true,
	logging: false,
};
