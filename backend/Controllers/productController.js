import { Product } from "../Models/Product.js";


export const addProduct = async (req, res)=>{
    const {name,description,price,image,discount,category,subCategory,MFG,EXP} = req.body;
    console.log(name,description,price,image,discount,category,subCategory,MFG,EXP)
    const product = await Product.create({name,description,price,image,discount,category,subCategory,MFG,EXP});
    if (product){
        return res.status(200).json({"product created ":product})
    }
    else{
        return res.status(400).json({"message":"sorry something went wrong please try again"})
    }
}