import {
  getLogin,
  addLogin,
  updateLogin,
  deleteLogin
} from '../db data/auth.js'
import bcrypt from 'bcrypt'
import { addRule } from '../validators/auth.js'

async function GetLogin(req, res) {
  res.send(await getLogin())
}

async function AddLogin(req, res) {
  try {
    const { jelszo, passwordConfirm } = await addRule.validateAsync(req.body)
    const secretpass = await bcrypt.hash(jelszo, 10)

    const same = await bcrypt.compare(passwordConfirm, secretpass)
    if (!same) {
      res.status(400).send('Not the same password')
      return
    }
    await addLogin(secretpass)
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
