import React from 'react'
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection'

import heartIcon from '../images/heart.png'
import messageIcon from '../images/speech-bubble.png'

function PostContainer(props) {

    return (
        <div className="post-container">

            <div className="post-header">
                <img src={props.post.thumbnailUrl} alt="tmb" />
                <p>{props.post.username}</p>
            </div>
            <div className="post-image">
                <img src={props.post.imageUrl} alt="post" />
            </div>
            <div className="post-icons">
                <img src={messageIcon} alt="message icon" className="post-icon" />
                <img src={heartIcon} alt="heart icon" className="post-icon" />
            </div>
            <p>{props.post.likes} likes</p>

            <div className="comment-section">
                <CommentSection post={props.post} />
            </div>
            <p>{props.post.timestamp}</p>
            <div className="comment-input-row">
                <input placeholder="Add a comment..." />
                <p>&#8943;</p>
            </div>

        </div>
    )
}

export default PostContainer

