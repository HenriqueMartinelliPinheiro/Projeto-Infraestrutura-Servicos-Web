import express, { Express, Request, Response } from "express";
import { PrismaClient } from '@prisma/client'

const prisma: PrismaClient = new PrismaClient()

const app: Express = express();

async function createEvento() {
    await prisma.evento.create({
        data: {
            nome: 'Teste',
            status: 1
        },
    })
}

app.get("/", (req: Request, res: Response) => {
 res.status(200).json("Hello from the server!!!");
});

app.get("/createUser", (req: Request, res: Response) => {
    createEvento().then(()=>{
        res.status(200).json("Evento Cadastradsdsddsddo");
    }).catch((err)=>{
        res.status(400).json(err);
    });
   });

app.listen(4000, () => {
 console.log(`App is listening on port 4000`);
});