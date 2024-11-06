import Joi from 'joi'

export const addRule = Joi.object({
  email: Joi.string().email(),
  nev: Joi.string().required(),
  jelszo: Joi.string().required().min(3).max(100),
  jelszoMegerosit: Joi.string().required().min(3).max(100)
})
