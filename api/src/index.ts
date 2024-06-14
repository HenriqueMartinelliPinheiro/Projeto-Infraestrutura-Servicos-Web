import express, { Express, Request, Response } from "express";
import { eventRouter } from "./routes/eventRoutes";
import cors from 'cors';

const app: Express = express();

app.use(express.json());
app.use(cors());

app.use("/",eventRouter)

app.listen(4000, () => {
 console.log(`App is listening on port 4000`);
});