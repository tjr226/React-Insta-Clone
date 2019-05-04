import React from 'react'
import PropTypes from 'prop-types';
import styled from "styled-components";

const IndividualCommment = styled.div`
    display: flex;
    font-size: .8rem;
`;

const CommentUsername = styled.p`
    font-weight: bold;
    padding-right: 1%;
`;


function Comment(props) {
    return (
        <IndividualCommment>
            <CommentUsername>{props.comment.username}</CommentUsername>
            <p className="comment-text">{props.comment.text}</p>
        </IndividualCommment>
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