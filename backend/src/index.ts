import * as express from 'express';
import bodyParser = require('body-parser');
import * as cors from 'cors';
import helmet from 'helmet';
import routes from './routes';
import { PORT } from './config/config';
import { initialize as initializeDb } from './dbConnection';

const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const opn = require('opn');

// const swaggerDefinition = {
// 	openapi: '3.0.0',
// 	info: {
// 		title: 'API Documentation',
// 		version: '1.0.0',
// 		description: 'API Documentation',
// 	},
// 	servers: [
// 		{
// 			url: 'http://localhost:3000',
// 		},
// 	],
// };

// const options = {
// 	swaggerDefinition,
// 	apis: ['./src/routes/*.ts'],
// };

// const swaggerSpec = swaggerJSDoc(options);
const swaggerDocument = require('../swagger.json');

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw({ type: 'multipart/form-data' }));

app.use('/', routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

initializeDb()
	.then(() => {
		app.listen(PORT, async () => {
			console.log(`Server running on port http://localhost:${PORT}/`);
			// opn(`http://localhost:${PORT}/api-docs`);
		});
	})
	.catch((error) => console.log(error));
