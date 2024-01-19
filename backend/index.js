import express from 'express'
import { PORT } from './config.js'

const app = express()

app.get('/', (req, res) => {
  return res.status(200).send("Here is the message.")
})

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}.`)
})