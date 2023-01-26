import * as express from 'express';
import * as cors from 'cors';
import helmet from 'helmet';
import routes from './routes';
import * as config from './config/config';
import dbConnection from './dbConnection';

const PORT = config.PORT;

// create express app
const app = express();
// middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/', routes);

// init db connection
dbConnection.initialize()
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}/`));
    })
	.catch((error) => console.log(error))
    .finally(() => dbConnection.destroy());
