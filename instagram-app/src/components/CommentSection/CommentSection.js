import React from 'react'
import './CommentSection.css'
import Comment from '../Comment/Comment'
import moment from 'moment';

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
        // event.preventDefault();
        // let newComment = {user: 'browser-user', text: this.state.comment };
        // this.setState({
        //     comments: [...this.state.comments, newComment ],
        //     comment: '',
        // });

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
                <p className="timestamp">{moment(this.props.timestamp, "LLL").fromNow()}</p>

                <div className="comment-input-row">
                    <form onSubmit={this.addComment}>
                    <input 
                        placeholder="Add a comment..." 
                        type="text"
                        name="comment"
                        onChange={this.handleComment}
                        value={this.state.comment}
                        />
                    <p>&#8943;</p>
                    </form>
                </div>
            </div>
        )
    }
}

export default CommentSection