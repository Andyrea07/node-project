import { getUser, addUser, updateUser, deleteUser } from '../db.js'
import bcrypt from 'bcrypt'
import Joi from 'joi'

const addRule = Joi.object({
  email: Joi.string().email(),
  nev: Joi.string().required(),
  jelszo: Joi.string().required().min(3).max(100),
  jelszoMegerosit: Joi.string().required().min(3).max(100)
})

async function GetUser(req, res) {
  res.send(await getUser())
}

async function AddUser(req, res) {
  try {
    const { email, nev, jelszo, jelszoMegerosit } = await addRule.validateAsync(
      req.body
    )
    const titkosJelszo = await bcrypt.hash(jelszo, 10)

    const ugyanaz = await bcrypt.compare(jelszoMegerosit, titkosJelszo)
    if (!ugyanaz) {
      res.status(400).send('Nem ugyanaz a ket jelszo')
      return
    }

    await addUser(nev, email, titkosJelszo)
    res.send('Megerkezett valasz')
  } catch (error) {
    res.status(400).send(error)
  }
}

async function UpdateUser(req, res) {
  const { id } = req.params
  const { email, nev } = req.body
  res.send(await updateUser(id, nev, email))
}

async function DeleteUser(req, res) {
  const { id } = req.params
  res.send(await deleteUser(id))
}

export const userController = {
  GetUser,
  AddUser,
  UpdateUser,
  DeleteUser
}
