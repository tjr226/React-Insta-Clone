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
    
    render() {
        return (
            <div>
                {this.props.comments.map(comment => {
                    return <Comment
                        key={comment.id}
                        comment={comment}
                    />
                })}
                <p className="timestamp">{moment(this.props.timestamp, "LLL").fromNow()}</p>

                <div className="comment-input-row">
                    <input placeholder="Add a comment..." />
                    <p>&#8943;</p>
                </div>
            </div>
        )
    }
}

export default CommentSection