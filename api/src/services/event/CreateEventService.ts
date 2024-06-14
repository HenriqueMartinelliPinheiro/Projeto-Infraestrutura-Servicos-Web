import { IEventRepository } from "../../repository/interfaces/IEventRepository";
import { EventDomain } from "../../domain/EventDomain";

export class CreateEventService {
    private eventRepository : IEventRepository;

    constructor(repository : IEventRepository){
        this.eventRepository = repository;
    }

    execute = async (event : EventDomain) => {
        //necessário verificar se já existe antes de cadastrado
        try{
            const createdEvent : EventDomain | undefined = await this.eventRepository.createEvent(event);
            if(createdEvent){
                return {
                    success: true,
                    event: createdEvent,
                    msg: "Evento criado com sucesso",
                    errorCode: null
                }
            } else{
                return{
                    success: false,
                    event: null,
                    msg: "Erro ao Cadastrar Evento",
                    errorCode: 1
                }
            }
        } catch(error){
            console.error("Erro ao executar CreateEvent:", error);
            return{
                success: false,
                event: null,
                msg: "Erro ao criar Evento",
                errorCode: 2
            }
        }   
    }
}