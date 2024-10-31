import express from 'express'

const app = express()

const port = 3000

app.delete('/Kitorol', (req, res) => {
  res.send('Kitorol random!')
})

app.listen(port, () => {
  console.log(`A szerver fut a http://localhost:${port} cimen`)
})
