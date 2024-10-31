import { getUser, addUser, updateUser, deleteUser } from '../db.js'

async function GetUser(req, res) {
  res.send(await getUser())
}

async function AddUser(req, res) {
  const { email, nev } = req.body
  await addUser(nev, email)
  res.send('Megerkezett valasz')
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
