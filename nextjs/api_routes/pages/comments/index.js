import React, { useState } from 'react'

export default function index() {
    const [comments, setComments] = useState([])
    const [addComment, setAddComment] = useState('')
    const [editState, setEditState] = useState(false)
    const [EditValue, setEditValue] = useState('')
    // GET Request
    const fetchComment = async () => {
        const response = await fetch('/api/comments')
        const data = await response.json()
        setComments(data)
    }
    // POST Request
    const submitComment = async () => {
        const response = await fetch('/api/comments', {
            method: 'POST',

            body: JSON.stringify({
                "comment": addComment
            }),
            headers: {
                'content-type': 'application/json'
            },

        })
        const data = await response.json()
        console.log(data)
    }

    //    DELETE Request
    const deleteComment = async (commentId) => {
        const response = await fetch(`/api/comments/${commentId}`, {
            method: "DELETE"
        })
        const data = await response.json()
        console.log(data)
        fetchComment()

    }
    // PATCH Request
    const editComment = async (commentId) => {
        const response = await fetch(`/api/comments/${commentId}`, {
            method: "PATCH",
            body: JSON.stringify({
                "comment": EditValue
            }),
            headers: {
                'content-type': 'application/json'
            },

        }
        )
        const data = await response.json()
        console.log(data)
        fetchComment()

    }


    return (
        <>
        {/* fetch the comment and map it */}
            <button onClick={fetchComment}>Comments Generation</button>
            {
                comments.map(comment =>
                    <div key={comment.id}>
                        <h2> comment:{comment.id}. {comment.text}
                        <button onClick={() => { setEditState([true, comment.id]) }}>Edit</button> 
                        <button onClick={() => deleteComment(comment.id)}>Delete</button></h2>


                        {/* drop input with a button for edit  */}
                        {
                            editState[0] === true && editState[1] === comment.id ?

                                [comment.id].map(state =>
                                    <div key={state}>
                                        <input type="text"  value={EditValue} onChange={e => setEditValue(e.target.value)}></input>
                                        <button onClick={() => editComment(state)}>Submit </button> 
                                       
                                    </div>
                                )
                                 : ""
                        }
                    </div>
                )
            }
            {/* add a comment */}
            <input type={'text'} value={addComment} onChange={e => setAddComment(e.target.value)}></input>
            <button onClick={submitComment}>Submit a Comment</button>

        </>
    )
}
