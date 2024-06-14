import express, { Express, Request, Response } from "express";
import { PrismaClient } from '@prisma/client'
import { eventsRouter } from "./routes/events/eventsRoutes";
const prisma: PrismaClient = new PrismaClient()

const app: Express = express();

app.use(express.json());

app.use("/",eventsRouter)

app.listen(4000, () => {
 console.log(`App is listening on port 4000`);
});