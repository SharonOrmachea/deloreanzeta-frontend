import * as express from 'express';
import * as cors from 'cors';
import helmet from 'helmet';
import routes from './routes';
import { PORT } from './config/config';
import { initialize as initializeDb } from './dbConnection';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
// create express app
const app = express();
// middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/', routes);

initializeDb()
	.then(() => {
		app.listen(PORT, () =>
			console.log(`Server running on port http://localhost:${PORT}/`)
		);
	})
	.catch((error) => console.log(error));
