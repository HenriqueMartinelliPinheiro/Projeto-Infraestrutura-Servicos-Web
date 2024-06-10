import express, { Express, Request, Response } from "express";
import { PrismaClient } from '@prisma/client'

const prisma: PrismaClient = new PrismaClient()

const app: Express = express();

async function createEvent() {
    await prisma.event.create({
        data: {
            name: 'Teste',
            status: 1
        },
    })
}

app.get("/", (req: Request, res: Response) => {
 res.status(200).json("Hello from the server!!!");
});

app.get("/createUser", (req: Request, res: Response) => {
    createEvent().then(()=>{
        res.status(200).json("Evento Cadastradsdsddsddo");
    }).catch((err)=>{
        res.status(400).json("Erro");
    });
   });

app.listen(4000, () => {
 console.log(`App is listening on port 4000`);
});