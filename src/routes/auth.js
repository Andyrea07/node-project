import { Router } from 'express'
import { loginController } from '../controller/auth.js'

export const loginRouter = Router()

loginRouter.get('/', loginController.GetLogin)

loginRouter.post('/', loginController.AddLogin)

loginRouter.put('/:user_id', loginController.UpdateLogin)

loginRouter.delete('/:user_id', loginController.DeleteLogin)
