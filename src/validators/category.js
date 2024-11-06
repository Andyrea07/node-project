import Joi from 'joi'

export const addRule = Joi.object({
  kategorianev: Joi.string().required()
})
