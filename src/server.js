import dotenv from 'dotenv'
import mongoose from 'mongoose'
import app from './app'

dotenv.config()

mongoose
  .connect(
    `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_KEY}@cluster0-l0u7k.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .then(() => {
    console.log('Database connection successful')
    app.listen(process.env.PORT || 3333)
  })
  .catch((err) => {
    console.error('Database connection error', err)
  })
