import React from 'react'
import './CommentSection.css'
import Comment from '../Comment/Comment'

function CommentSection(props) {
    console.log(props)
    return (
        <div>
        {props.post.comments.map(comment => {
            return <Comment
                key={comment.id}
                comment={comment}
                />
        })}
        </div>
        )
}


export default CommentSection