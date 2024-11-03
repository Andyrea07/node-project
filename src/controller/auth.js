import { getLogin, addLogin, updateLogin, deleteLogin } from '../db.js'
import bcrypt from 'bcrypt'
import Joi from 'joi'

const addRule = Joi.object({
  jelszo: Joi.string().required()
})

async function GetLogin(req, res) {
  res.send(await getLogin())
}

async function AddLogin(req, res) {
  try {
    const { jelszo } = await addRule.validateAsync(req.body)
    await addLogin(jelszo)
    res.send('Megerkezett a valasz')
  } catch (error) {
    res.status(400).send(error)
  }
}

async function UpdateLogin(req, res) {
  const { user_id } = req.params
  const { jelszo } = req.body
  res.send(await updateLogin(user_id, jelszo))
}

async function DeleteLogin(req, res) {
  const { user_id } = req.params
  res.send(await deleteLogin(user_id))
}

export const loginController = {
  GetLogin,
  AddLogin,
  UpdateLogin,
  DeleteLogin
}
