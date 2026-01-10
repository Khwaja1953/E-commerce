import { config } from 'dotenv'
import express from 'express'
const app = express()
config('.env')

app.listen(process.env.PORT,()=>{
    console.log(`app is listning on http://localhost:${process.env.PORT}`)
})