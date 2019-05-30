import React from 'react'
import heartIcon from '../images/heart.png'
import messageIcon from '../images/speech-bubble.png'
import styled from "styled-components";

const PostIcons = styled.div`
    margin-left: 2%;
`;

const PostIconImg = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 2%;
`;

const PostLikes = styled.div`
    padding-left: 2%;
    font-weight: bold;
    font-size: .8rem;   
`;

class LikeSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: this.props.likes,
        };
    }

    addLike = event => {
        event.preventDefault();
        this.setState((prevState) => {
            return { likes: prevState.likes + 1 }
        });
    }

    render() {
        return (
            <>
                <PostIcons>
                    <PostIconImg
                        onClick={this.addLike}
                        src={heartIcon}
                        alt="heart icon"
                    />
                    <PostIconImg
                        src={messageIcon}
                        alt="message icon"
                    />
                </PostIcons>
                <PostLikes>{this.state.likes} likes</PostLikes>
            </>
        )
    }


}






export default LikeSection
