import React from 'react'
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection'

import PropTypes from 'prop-types'
import styled from "styled-components";

import PostHeader from './PostHeader';
import LikeSection from '../CommentSection/LikeSection';

const PostContainer = styled.div`
    margin: 2px;
    border: 1px solid lightgrey;  
`;

const PostImage = styled.img`
    width: 98%;
    padding: 5px 1%;
`;

const CommentSectionDiv = styled.div`
    padding: 0% 2%;
`;

class Post extends React.Component {
    render() {

        return (
            <PostContainer>
                <PostHeader
                    thumbnailUrl={this.props.post.thumbnailUrl}
                    username={this.props.post.username}
                />
                <PostImage src={this.props.post.imageUrl} alt="post" />
                <LikeSection likes={this.props.post.likes} />

                <CommentSectionDiv>
                    <CommentSection
                        comments={this.props.post.comments}
                        timestamp={this.props.post.timestamp}
                    />
                </CommentSectionDiv>
            </PostContainer>


        )

    }
}

Post.propTypes = {
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

export default Post;