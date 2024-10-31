import { getCikkek, addCikkek, updateCikkek, deleteCikkek } from '../db.js'
import Joi from 'joi'

const addRule = Joi.object({
  CikkCim: Joi.string().required().min(3),
  Szoveg: Joi.string().required().min(5).max(100),
  SzerzoID: Joi.number().required(),
  CikkID: Joi.number().required()
})

const addRule2 = Joi.object({
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
    const { CikkCim, CikkID } = await addRule2.validateAsync(req.body)
    await updateCikkek(CikkCim, CikkID)
    res.send('Frissitettem a cikket')
  } catch (error) {
    res.status(400).send(error)
  }
}

async function DeleteArticle(req, res) {
  try {
    const { CikkID } = await addRule.validateAsync(req.params)
    await deleteCikkek(CikkID)
    res.send('Toroltem a cikket')
  } catch (error) {
    res.status(400).send(error)
  }
}

export const articleController = {
  GetArticle,
  AddArticle,
  UpdateArticle,
  DeleteArticle
}
