import express from 'express'
import mongoose from 'mongoose'
import { PORT, DB } from './config.js'
import { Book } from './models/bookModel.js'
import booksRoute from './routes/booksRoute.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  return res.status(200).send("This is the main route.")
})

app.use('/books', booksRoute)

mongoose.connect(DB)
  .then(() => {
    console.log('App is connected to database.')
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}.`)
    })
  })
  .catch((error) => {
    console.log(error)
  })