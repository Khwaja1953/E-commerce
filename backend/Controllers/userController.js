import User from '../Models/User.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const handleUserLogin = async (req , res)=>{
    const {email, password} = req.body;
    console.log(email,password)
    //fetching data from database
    const user = await User.findOne({email:email});
    if (!user){
        return res.status(404).send("invalid email address")
    }
    if(!bcrypt.compareSync(password,user.password)){
        return res.status(401).send("invalid password")
    }
    const token = jwt.sign({id:user._id,email:user.email,name:user.name},process.env.JWT_SECRET_KEY,{expiresIn:'7d'});
    return res.status(200).json({message:"login successful",token:token})
}

//signup new users
export const handleUserSignup = async (req, res)=>{

    const {name,email,password,phone} = req.body;
    console.log(name,email,password,phone);
    const user = await User.findOne({email:email,phone:phone});
    // console.log(user)
    if(user){
        return res.status(409).send("email or phone already exists")
    }

    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = await bcrypt.hash(password,salt);

    const new_user = await User.create({name:name,email:email,password:hashedPassword,phone:phone});

    return res.status(200).send("account created successfully")
}