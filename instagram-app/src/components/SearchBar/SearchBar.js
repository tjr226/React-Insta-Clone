import React from 'react';
import "./SearchBar.css"
import instaLogo from '../images/instagram-logo.png'


function SearchBar(props) {
    return (
        <div className="search-bar">
            <img src={instaLogo} alt="instagram logo img" className="logo-img"/>
            <p>insta logo placeholder</p>
            <input></input>
        </div>
    )   
}

export default SearchBar