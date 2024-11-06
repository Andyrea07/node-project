//get , post, put , delete
import { Router } from 'express'
import { categoryController } from '../controller/category.js'

export const categoryRouter = Router()

categoryRouter.get('/', categoryController.GetCategory)

categoryRouter.post('/', categoryController.AddCategory)

categoryRouter.put('/:kategoriaid', categoryController.UpdateCategory)

categoryRouter.delete('/:kategoriaid', categoryController.DeleteCategory)

//Ctrl+D(ha mindegyiket egyszerre akarom 'tirni)
