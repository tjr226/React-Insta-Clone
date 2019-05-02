import React from 'react'
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection'

import heartIcon from '../images/heart.png'
import messageIcon from '../images/speech-bubble.png'
import PropTypes from 'prop-types';

function PostContainer(props) {

    return (
        <div className="post-container card">
            <div className="post-header">
                <img src={props.post.thumbnailUrl} alt="tmb" />
                <p>{props.post.username}</p>
            </div>
            <div className="post-image">
                <img src={props.post.imageUrl} alt="post" />
            </div>
            <div className="post-icons">
                <img src={heartIcon} alt="heart icon" className="post-icon" />
                <img src={messageIcon} alt="message icon" className="post-icon" />

            </div>
            <p className="post-likes">{props.post.likes} likes</p>

            <div className="comment-section">
                <CommentSection
                    comments={props.post.comments}
                    timestamp={props.post.timestamp}
                />
            </div>

        </div>

    )




}
PostContainer.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        timestamp: PropTypes.string.isRequired,
        comments: PropTypes.array.isRequired,
    }).isRequired,
};

export default PostContainer

