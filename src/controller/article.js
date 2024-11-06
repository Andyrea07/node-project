import {
  getCikkek,
  addCikkek,
  updateCikkek,
  deleteCikkek
} from '../db data/articles.js'
import { addRule } from '../validators/article.js'
import { updateRule } from '../validators/article.js'

async function GetArticle(req, res) {
  res.send(await getCikkek())
}

async function AddArticle(req, res) {
  try {
    const { CikkCim, Szoveg, SzerzoID } = await addRule.validateAsync(req.body)
    await addCikkek(CikkCim, SzerzoID, Szoveg)
    res.send('Cikk hozzáadás')
  } catch (error) {
    res.status(400).send(error)
  }
}

async function UpdateArticle(req, res) {
  try {
    const { CikkCim } = await updateRule.validateAsync(req.body)
    const { CikkID } = req.params
    await updateCikkek(CikkCim, CikkID)
    res.send('Frissitettem a cikket')
  } catch (error) {
    res.status(400).send(error)
  }
}

async function DeleteArticle(req, res) {
  const { CikkID } = req.params
  await deleteCikkek(CikkID)
  res.send('Kitoroltem a cikket')
}

export const articleController = {
  GetArticle,
  AddArticle,
  UpdateArticle,
  DeleteArticle
}
