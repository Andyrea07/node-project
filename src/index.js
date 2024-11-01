import express from 'express'
import { createCikkek, createUser } from './db.js'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import { userRouter } from './routes/user.js'
import { category } from './db.js'
import { categoryRouter } from './routes/category.js'
import { articleRouter } from './routes/article.js'

const app = express()

const port = 3000

app.use(bodyParser.json())
app.use(morgan('dev'))

app.use('/users', userRouter)

app.use('/categories', categoryRouter)

app.use('/articles', articleRouter)

app.listen(port, () => {
  console.log(`A szerver fut a http://localhost:${port} cimen`)
  createUser()
  category()
  createCikkek()
})
