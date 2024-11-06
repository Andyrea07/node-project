import Joi from 'joi'

export const addRule = Joi.object({
  CikkCim: Joi.string().required().min(3),
  Szoveg: Joi.string().required().min(5).max(100),
  SzerzoID: Joi.number().required()
})

export const updateRule = Joi.object({
  CikkCim: Joi.string().required().min(3)
})
