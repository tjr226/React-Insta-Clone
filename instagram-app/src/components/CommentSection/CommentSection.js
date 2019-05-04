import React from 'react'
import Comment from '../Comment/Comment'
import moment from 'moment';
import styled from "styled-components";

const Timestamp = styled.p`
    font-size: 0.5rem;
    color: grey;
`;

const CommentInputRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid lightgrey;
`;

const CommentInput = styled.input`
height: 20px;
border: none;
`;

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: '',
        }
    }

    handleComment = event => {
        this.setState({ comment: event.target.value });
    };

    addComment = event => {
        event.preventDefault();
        const newComment = { 
            id: this.state.comment, 
            text: this.state.comment, 
            username: localStorage.getItem('username')
        };
        const comments = this.state.comments.slice();
        comments.push(newComment);
        this.setState({ comments, comment: '' });

    };

    render() {
        return (
            <div>
                {this.state.comments.map(comment => {
                    return <Comment
                        key={comment.id}
                        comment={comment}
                    />
                })}
                <Timestamp>{moment(this.props.timestamp, "LLL").fromNow()}</Timestamp>

                <CommentInputRow>
                    <form onSubmit={this.addComment}>
                    <CommentInput
                        placeholder="Add a comment..." 
                        type="text"
                        name="comment"
                        onChange={this.handleComment}
                        value={this.state.comment}
                        />
                    <p>&#8943;</p>
                    </form>
                </CommentInputRow>
            </div>
        )
    }
}

export default CommentSection