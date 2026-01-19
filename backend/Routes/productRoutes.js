import express from "express"
const router = express.Router();

router.post('/addProduct',(req, res)=>{ return res.send("ok")})


export default router