import { config } from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import userRoutes from './Routes/userRoutes.js'
import productRoutes from './Routes/productRoutes.js'
const app = express()
config('.env');
app.use(express.json())

mongoose.connect(process.env.MONGO_URL)
.then(()=>{console.log("database connected")})
.catch(error => {console.log(error)});

app.use('/api/user',userRoutes)
app.use('/api/products',productRoutes)


app.listen(process.env.PORT,()=>{
    console.log(`app is listning on http://localhost:${process.env.PORT}`)
})