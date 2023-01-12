import * as express from "express"
import { AppDataSource } from "./data-source"
import * as cors from "cors";
import helmet from "helmet";
import routes from "./routes"
import * as config from "./config/config";

const PORT = config.PORT    

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express();
    // middlewares
    app.use(cors());
    app.use(helmet());
    app.use(express.json());

    app.use("/", routes);

    // start express server
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


}).catch(error => console.log(error))
