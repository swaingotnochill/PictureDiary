import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import postRoutes from './routes/posts.js'

const app = express();

// Routing Middleware
app.use('/posts', postRoutes)

// Middlewares
app.use(bodyParser.json({limit: '50mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))
app.use(cors())

const CONNECTION_URL = process.env.CONNECTION_URL

const PORT = process.env.Port || 5000

// Connect to MongoDB
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true , useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server started on port ${PORT}`)))
    .catch(err => console.log(err.message))


