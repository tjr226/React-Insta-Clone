import React from 'react'
import './Comment.css'
import PropTypes from 'prop-types';


function Comment(props) {
    return (
        <div className="individual-comment">
            <p className="comment-username">{props.comment.username}</p>
            <p className="comment-text">{props.comment.text}</p>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired,
}

export default Comment