import { Router } from 'express';
import { CreateEventController } from '../controller/event/CreateEventController';
import { GetAllEventsController } from '../controller/event/GetAllEventsController';

export const eventRouter = Router();
const createEventController = new CreateEventController();
const getAllEventsController = new GetAllEventsController();

eventRouter.post('/createEvent', createEventController.createEvent);
eventRouter.get('/getAllEvents', getAllEventsController.getAllEvents);