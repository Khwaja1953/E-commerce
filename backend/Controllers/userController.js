
export const handleUserLogin = async (req , res)=>{
    const {userName, password} = req.body;
    console.log(userName,password)
    //fetching data from database
    return res.send("welcome to login from controller")
}

export const handleUserSignup = async (req, res)=>{

    return res.send("Welcome to signup page from controller")
}