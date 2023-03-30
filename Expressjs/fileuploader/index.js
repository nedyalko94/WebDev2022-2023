//retrieve token as bearer 

const isTokenExist = (req,res,next)=> {
    console.log(req.authorization)
}

const newUser = new User({username,password})