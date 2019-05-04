import React from 'react'
import styled from "styled-components";

const PostHeaderDiv = styled.div`
    display: flex;
    align-items: center;
    padding-top: 5px;
`;

const PostHeaderImg = styled.img`
    width: 25px;
    height: 25px;
    border-radius: 12.5px;
    margin-left: 2%;
`;

const PostHeaderUsername = styled.div`
    font-size: .8rem;
    padding-left: 2%;
    vertical-align: middle;
`;

const PostHeader = props => {
    return (
        <PostHeaderDiv>          
            <PostHeaderImg src={props.thumbnailUrl} alt="tmb" />
            <PostHeaderUsername>{props.username}</PostHeaderUsername>
        </PostHeaderDiv>
    )
}

export default PostHeader;