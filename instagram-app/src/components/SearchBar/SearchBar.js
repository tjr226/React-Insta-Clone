import React from 'react'
import "./SearchBar.css"

// importing images
import instaLogo from '../images/instagram-logo.png'
import instaCursive from '../images/instagram-cursive.png'
import heartIcon from '../images/heart.png'
import compassIcon from '../images/navigation.png'
import userIcon from '../images/user-outline.png'

class SearchBar extends React.Component {


    render() {
        return (
            <div className="search-container">
                <img src={instaLogo} alt="instagram logo img" className="insta-logo-img" />
                <p className="pipe">|</p>
                <img src={instaCursive} alt="instagram logo cursive" className="insta-logo-cursive" />
                <input className="search-input" placeholder="&#128269; Search"></input>
                <div className="icon-section">
                    <img src={compassIcon} alt="compass icon" className="search-bar-icon" />
                    <img src={heartIcon} alt="heart icon" className="search-bar-icon" />
                    <img src={userIcon} alt="user icon" className="search-bar-icon" />
                </div>
            </div>
        )
    }
}

export default SearchBar