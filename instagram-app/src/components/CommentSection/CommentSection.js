import React from 'react'
import './CommentSection.css'
import Comment from '../Comment/Comment'
import moment from 'moment';

function CommentSection(props) {
    return (
        <div>
            {props.comments.map(comment => {
                return <Comment
                    key={comment.id}
                    comment={comment}
                />
            })}
            <p className="timestamp">{moment(props.timestamp, "LLL").fromNow()}</p>

            <div className="comment-input-row">
                <input placeholder="Add a comment..." />
                <p>&#8943;</p>
            </div>
        </div>
    )
}



export default CommentSection