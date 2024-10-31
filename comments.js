import {
  getComments,
  addComments,
  updateComments,
  deleteComments
} from '../db.js'

async function GetComments(req, res) {
  res.send(await getComments())
}

async function AddComments(req, res) {
  const { Szoveg } = req.body
  await addComments(Szoveg)
  res.send('Szoveg hozzáadás')
}

async function UpdateComments(req, res) {
  const { hozzaszolasID } = req.params
  const { Szoveg } = req.body
  res.send(await updateComments(hozzaszolasID, Szoveg))
}

async function DeleteComments(req, res) {
  const { hozzaszolasID } = req.params
  res.send(await deleteComments(hozzaszolasID))
}

export const commentsController = {
  GetComments,
  AddComments,
  UpdateComments,
  DeleteComments
}
