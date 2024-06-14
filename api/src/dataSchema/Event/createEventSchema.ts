import Joi from "joi";

export const createEventSchema = Joi.object({
    name: Joi.string().required(),
    status: Joi.number().required()
})