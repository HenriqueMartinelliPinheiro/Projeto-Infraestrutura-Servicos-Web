import { EventRepository } from "../../repository/implementation/EventRepository";
import { IEventRepository } from "../../repository/interfaces/IEventRepository";
import { PrismaClient } from "@prisma/client";
import {Request, Response} from "express"
import { EventDomain } from "../../domain/EventDomain";
import { GetAllEventsService } from "../../services/event/GetAllEventsService";

export class GetAllEventsController {
    private repository : IEventRepository;
    
    constructor(){
        const prismaClient = new PrismaClient();
        this.repository = new EventRepository(prismaClient);
    }

    getAllEvents = async (req :  Request, res: Response) => {
        //const {error, value} = createEventSchema.validate(req.body);

        // if (error && value.name.length<1) {
        //    return res.status(400).json({
        //     "event": undefined,
        //     "msg": "Dados Inválidos",
        //     "errorCode": 5
        //    })
        // }

        const getAllEventsService = new GetAllEventsService(this.repository);
        try{
            const events = await getAllEventsService.execute();
            if(events.success) {
                console.log("Eventos Retornados com sucesso.")
                return res.status(201).json(JSON.stringify(events));
            } else{
                res.status(500).json(JSON.stringify(events));
            }

        } catch(error){
            res.status(500).json({
                "success": false,
                "event": undefined,
                "msg": "Evento não cadastrado",
                "errorCode": 6
            })
        }
    }
}