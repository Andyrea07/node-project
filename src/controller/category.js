//GETCATEGORY, ADDCATEGORY, UPDATECATEGORY, DELETECATEGORY
import {
  getCategory,
  addCategory,
  updateCategory,
  deleteCategory
} from '../db data/category.js'

import { addRule } from '../validators/category.js'

async function GetCategory(req, res) {
  res.send(await getCategory())
}

async function AddCategory(req, res) {
  try {
    const { kategorianev } = await addRule.validateAsync(req.body)
    await addCategory(kategorianev)
    res.send('Kategoria hozzáadás')
  } catch (error) {
    res.status(400).send(error)
  }
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
