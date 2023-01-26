import * as express from "express"
import { config as dbconfig } from "./ormconfig"
import * as cors from "cors";
import helmet from "helmet";
import routes from "./routes"
import * as config from "./config/config";
import { createConnection } from "typeorm";

const PORT = config.PORT    

// create express app
const app = express();
// middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/", routes);

// init db connection
createConnection(dbconfig)
    .then(() => console.log("Connected to database"))
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch(error => console.log(error));