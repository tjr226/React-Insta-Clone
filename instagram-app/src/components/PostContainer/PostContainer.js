import React from 'react'
import Post from './Post'

const PostContainer = props => {
    return (
        <div>
            {props.posts.map(post => <Post key={post.id} post={post} /> )}
        </div>
    )
}





export default PostContainer

