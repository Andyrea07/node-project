import { Router } from 'express'
import { articleController } from '../controller/article.js'

export const articleRouter = Router()

articleRouter.get('/', articleController.GetArticle)

articleRouter.post('/', articleController.AddArticle)

articleRouter.put('/:CikkID', articleController.UpdateArticle)

articleRouter.delete('/:CikkID', articleController.DeleteArticle)
