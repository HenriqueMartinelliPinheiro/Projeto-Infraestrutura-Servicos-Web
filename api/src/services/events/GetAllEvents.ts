import { IEventRepository } from "../../repository/interfaces/IEventRepository";
import { EventDomain } from "../../domain/EventDomain";

export class GetAllEvents {
    private eventRepository : IEventRepository;

    constructor(repository : IEventRepository){
        this.eventRepository = repository;
    }

    execute = async () => {
        //necessário verificar se já existe antes de cadastrado
        try{
            const events : EventDomain[] | undefined = await this.eventRepository.getAllEvents();
            if(events){
                return {
                    events: events,
                    msg: "Eventos Retornados com sucesso",
                    errorCode: null
                }
            } else{
                return{
                    events: null,
                    msg: "Erro ao consultar Eventos",
                    errorCode: 3
                }
            }
        } catch(error){
            console.error("Erro ao executar GetAllEvents:", error);
            return{
                event: null,
                msg: "Erro ao consultar Eventos",
                errorCode: 4
            }
        }   
    }
}