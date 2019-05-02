import React from 'react'
import './Comment.css'

function Comment(props) {
    return (
        <div className="individual-comment">
            <p>{props.comment.username}</p>
            <p>{props.comment.text}</p>
        </div>
    )
}

export default Comment