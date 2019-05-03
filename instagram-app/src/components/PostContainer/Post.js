import React from 'react'
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection'

import PropTypes from 'prop-types'

import heartIcon from '../images/heart.png'
import messageIcon from '../images/speech-bubble.png'
import PostHeader from './PostHeader';

class Post extends React.Component {
    render() {

        return (
            <div className="post-container card">
                <PostHeader
                    thumbnailUrl={this.props.post.thumbnailUrl}
                    username={this.props.post.username}
                />
                <div className="post-image">
                    <img src={this.props.post.imageUrl} alt="post" />
                </div>
                <div className="post-icons">
                    <img src={heartIcon} alt="heart icon" className="post-icon" />
                    <img src={messageIcon} alt="message icon" className="post-icon" />
                </div>
                <p className="post-likes">{this.props.post.likes} likes</p>

                <div className="comment-section">
                    <CommentSection
                        comments={this.props.post.comments}
                        timestamp={this.props.post.timestamp}
                    />
                </div>
            </div>


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