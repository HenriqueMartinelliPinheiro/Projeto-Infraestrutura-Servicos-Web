import { EventRepository } from "../../repository/implementation/EventRepository";
import { IEventRepository } from "../../repository/interfaces/IEventRepository";
import { PrismaClient } from "@prisma/client";
import { CreateEventService } from "../../services/event/CreateEventService";
import {Request, Response} from "express"
import { createEventSchema } from "../../dataSchema/event/createEventSchema";
import { EventDomain } from "../../domain/EventDomain";

export class CreateEventController {
    private repository : IEventRepository;
    
    constructor(){
        const prismaClient = new PrismaClient();
        this.repository = new EventRepository(prismaClient);
    }

    createEvent = async (req :  Request, res: Response) => {
        const {error, value} = createEventSchema.validate(req.body);

        if (error && value.name.length<1) {
           return res.status(400).json({
            "event": undefined,
            "msg": "Dados Inválidos",
            "errorCode": 5
           })
        }
        const createEventService = new CreateEventService(this.repository);
        try{
            const createdEvent = await createEventService.execute(new EventDomain(
                {
                    name: value.name,
                    status: value.status
                }));

            if(createdEvent.success) {
                console.log("Evento criado com sucesso.")
                return res.status(201).json(JSON.stringify(createdEvent));

            } else{
                res.status(500).json(JSON.stringify(createdEvent));
            }

        } catch(error){
            console.error("Erro ao executar CreateEventController")
            res.status(500).json({
                "success": false,
                "event": undefined,
                "msg": "Evento não cadastrado",
                "errorCode": 6
            })
        }
    }
}