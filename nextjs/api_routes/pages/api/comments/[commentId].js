import { comments } from "@/data/comments";

export default function handler(req,res){
 
    const {commentId} = req.query // name of the file and our query as well  
    // btw this is string so we have to parse it to int 

    if(req.method ==="GET")
    {
        const comment = comments.find(comment => comment.id === parseInt(commentId))
        res.status(200).json(comment)
    }else if (req.method ==="DELETE"){
        const deletedComment = comments.find(comment => comment.id === parseInt(commentId))
        const index = comments.findIndex( comment => comment.id === parseInt(commentId))
        res.status(200).json(deletedComment)
        comments.splice(index,1)

    }else if (req.method ==="PATCH"){
        const newValue = req.body.comment
        const index = comments.findIndex( comment => comment.id === parseInt(commentId))
        comments[index].text = newValue // replacing the old value with the new 

        const EditedComment = comments.find(comment => comment.id === parseInt(commentId))
        res.status(200).json(EditedComment)
        // last 2 line can be skip with          res.status(200).json(comments[index])

    }

}