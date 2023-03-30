module.exports={
    home: function(req,res){
        res.send('hello ToDo  world')
    },
    poster:function (req,res){
    console.log(req.body)
   const {userId,title,completed} = req.body
   const todo = new Todo({userId,title,completed})
   todo.save()
   .then(answer => {
    res.json({
        msg:'new todo is save',
        data:answer
    })
   })
}


}