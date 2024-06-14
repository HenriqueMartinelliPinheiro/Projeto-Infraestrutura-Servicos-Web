import { IEventRepository } from "../interfaces/IEventRepository";
import { PrismaClient } from "@prisma/client";
import { EventDomain } from "../../domain/EventDomain";

export class EventRepository implements IEventRepository {
    private prismaClient: PrismaClient;
    
    constructor(prismaClient : PrismaClient){
        this.prismaClient = prismaClient; 
    }

    createEvent = async (event : EventDomain) : Promise<EventDomain | undefined> => {
        try {
            const createdEvent = await this.prismaClient.event.create({
                data: {
                    name: event.getName(),
                    status: event.getStatus()
                }
            });
            
            return new EventDomain({
                id: createdEvent.id,
                name: createdEvent.name,
                status: createdEvent.status
            });

        } catch (error) {
            console.error('Erro ao criar evento:', error);
            return undefined;
        }
    }

    getAllEvents = async () : Promise<EventDomain[]|undefined> =>{
        try {
            const returnedEvents = await this.prismaClient.event.findMany();
            const eventList : EventDomain [] = returnedEvents.map((event)=>{
                return new EventDomain({
                    id: event.id,
                    name: event.name,
                    status: event.status
                });
           });
           return eventList;
        }
        catch(err) {
            console.error(err);
            return undefined;
        }
    }
}
