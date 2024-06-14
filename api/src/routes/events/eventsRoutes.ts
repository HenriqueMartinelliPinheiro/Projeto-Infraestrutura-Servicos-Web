import { Router } from 'express';
import { EventController } from '../../controller/EventController';

export const eventsRouter = Router();
const eventController = new EventController();

eventsRouter.post('/createEvent', eventController.createEvent);