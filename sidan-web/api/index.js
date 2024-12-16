import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'

import authRouter from './routes/auth.route.js'
import projectRouter from './routes/project.route.js'
import mongoose from 'mongoose'
import path from 'path'

dotenv.config()


const __dirname = path.resolve();
  
mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to mongodb')
}).catch((err) => {
    console.log(err)
})



const app = express()

app.use(express.json())
app.use(cookieParser())

app.listen(3000, () => console.log('Server is running on port 3000'))


app.use('/api/auth', authRouter)
app.use('/api/project', projectRouter)


app.use(express.static(path.join(__dirname, '/my-project/dist')))
app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname, '/my-project/dist/index.html'))
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error'
    
    return res.status(statusCode).json({ 
        success: false,
        statusCode,
        message 
    })
})