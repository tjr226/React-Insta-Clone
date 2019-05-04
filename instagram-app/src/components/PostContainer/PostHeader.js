import React from 'react'

const PostHeader = props => {
    return (
        <div className="post-header">          
            <img src={props.thumbnailUrl} alt="tmb" />
            <p>{props.username}</p>
        </div>
    )
}

export default PostHeader;