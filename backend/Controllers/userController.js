import User from '../Models/User.js'

export const handleUserLogin = async (req , res)=>{
    const {userName, password} = req.body;
    console.log(userName,password)
    //fetching data from database
    return res.send("welcome to login from controller")
}

//signup new users
export const handleUserSignup = async (req, res)=>{

    const {name,email,password,phone} = req.body;
    console.log(name,email,password,phone);
    const user = await User.findOne({email:email,phone:phone});
    console.log(user)
    if(user){
        return res.status(409).send("email or phone already exists")
    }
    const new_user = await User.create({name:name,email:email,password:password,phone:phone});

    return res.status(200).send("account created successfully")
}