import express from 'express'
import { createUser } from './db data/user.js'
import { createCikkek } from './db data/articles.js'
import { createLogin } from './db data/auth.js'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import { userRouter } from './routes/user.js'
import { category } from './db data/category.js'
import { categoryRouter } from './routes/category.js'
import { articleRouter } from './routes/article.js'
import { loginRouter } from './routes/auth.js'
import cors from 'cors'

const app = express()

const port = 3000

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use('/users', userRouter)

app.use('/categories', categoryRouter)

app.use('/articles', articleRouter)

app.use('/logins', loginRouter)

app.listen(port, () => {
  console.log(`A szerver fut a http://localhost:${port} cimen`)
  createUser()
  category()
  createCikkek()
  createLogin()
})
