import { AppError } from "./utils/appError.js";
import { bootstrap } from "./src/modules/bootstrap.js";
import cors from "cors";
import { dbConn } from "./database/dbConnection.js";
import dotenv from "dotenv";
import express from "express";
import { globalError } from "./src/middleware/globalError.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
bootstrap(app);

app.use(globalError);

app.listen(port, () => console.log(` Server running on port  ${port}!`));
