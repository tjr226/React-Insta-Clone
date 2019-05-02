import React from 'react'
import './Comment.css'
import PropTypes from 'prop-types';


function Comment(props) {
    return (
        <div className="individual-comment">
            <p>{props.comment.username}</p>
            <p>{props.comment.text}</p>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    })
}

export default Comment