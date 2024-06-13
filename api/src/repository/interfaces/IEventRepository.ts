import { EventDomain } from "../../domain/EventDomain";

export interface IEventRepository {
    createEvent(event: EventDomain): Promise<EventDomain|undefined>;
    getAllEvents() : Promise<EventDomain[]|undefined>;
}