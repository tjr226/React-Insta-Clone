import React from 'react'
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection'

import heartIcon from '../images/heart.png'
import messageIcon from '../images/speech-bubble.png'
import PropTypes from 'prop-types';

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

