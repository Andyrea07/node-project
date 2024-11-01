import { getCikkek, addCikkek, updateCikkek, deleteCikkek } from '../db.js'
import Joi from 'joi'

const addRule = Joi.object({
  CikkCim: Joi.string().required().min(3),
  Szoveg: Joi.string().required().min(5).max(100),
  SzerzoID: Joi.number().required()
})

const updateRule = Joi.object({
  CikkCim: Joi.string().required().min(3),
  CikkID: Joi.number().required()
})

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
    const { CikkCim, CikkID } = await updateRule.validateAsync(req.body)
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
