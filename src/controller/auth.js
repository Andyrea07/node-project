import { getLogin, addLogin, updateLogin, deleteLogin } from '../db.js'
import bcrypt from 'bcrypt'
import Joi from 'joi'

async function GetLogin(req, res) {
  res.send(await getLogin())
}

async function AddLogin(req, res) {
  const { user_id, jelszo } = req.body
  res.send(await addLogin(user_id, jelszo))
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
