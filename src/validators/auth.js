import Joi from 'joi'

export const addRule = Joi.object({
  jelszo: Joi.string().required(),
  passwordConfirm: Joi.string().required()
})
