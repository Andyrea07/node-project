//GETCATEGORY, ADDCATEGORY, UPDATECATEGORY, DELETECATEGORY

import {
  getCategory,
  addCategory,
  updateCategory,
  deleteCategory
} from '../db.js'

async function GetCategory(req, res) {
  res.send(await getCategory())
}

async function AddCategory(req, res) {
  const { kategorianev } = req.body
  await addCategory(kategorianev)
  res.send('Kategoria hozzáadás')
}

async function UpdateCategory(req, res) {
  const { kategoriaid } = req.params
  const { kategorianev } = req.body
  res.send(await updateCategory(kategoriaid, kategorianev))
}

async function DeleteCategory(req, res) {
  const { kategoriaid } = req.params
  res.send(await deleteCategory(kategoriaid))
}

export const categoryController = {
  GetCategory,
  AddCategory,
  UpdateCategory,
  DeleteCategory
}
