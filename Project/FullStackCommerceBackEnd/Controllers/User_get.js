
const getUser = (req, res,next)=> { 
    //ensureAuthenticated
    if(!req.user){
        console.log(req.user+" no user")
    //  return res.send(undefined)
        // res.redirect('/')
        next() 
// res.send({msg:'wrong'})  
    }else{
      console.log(req.user+" yes user")

      return  res.send(req.user)
    } 
    
  }

module.exports = {getUser}      