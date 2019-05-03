import React from 'react'

import heartIcon from '../images/heart.png'
import messageIcon from '../images/speech-bubble.png'


class LikeSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: this.props.likes,
        }
    }

    addLike = event => {
        event.preventDefault();
        this.setState((prevState) => {
            return { likes: prevState.likes + 1 }
        }
        )

    }

    render() {
        return (
            <>
                <div className="post-icons">
                    <img
                        onClick={this.addLike}
                        src={heartIcon}
                        alt="heart icon"
                        className="post-icon"
                    />
                    <img src={messageIcon} alt="message icon" className="post-icon" />
                </div>
                <p className="post-likes">{this.state.likes} likes</p>
            </>
        )
    }


}






export default LikeSection
