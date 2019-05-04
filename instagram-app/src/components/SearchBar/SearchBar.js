import React from 'react'
import styled from "styled-components";

// importing images
import instaLogo from '../images/instagram-logo.png'
import instaCursive from '../images/instagram-cursive.png'
import heartIcon from '../images/heart.png'
import compassIcon from '../images/navigation.png'
import userIcon from '../images/user-outline.png'

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const InstaLogo = styled.img`
    width: 25px;
    height: 25px;
    margin: 0px 10px;
`;

const Pipe = styled.p`
    vertical-align: sub;
    `;

const InstaLogoCursive = styled.img`
    width: 50px;
    height: 20px;
    margin: 0px 10px; 
`;

const SearchInput = styled.input`
    height: 20px;
`;

const IconSection = styled.div`
    display: flex;
    margin-left: 10px;
`;

const SearchBarIcon = styled.img`
    width: 20px;
    height: 20px;
    margin: 0 5px;
`;

const SearchBar = props => {
    return (
        <SearchContainer>
            <InstaLogo
                src={instaLogo}
                alt="instagram logo img"
            />
            <Pipe>|</Pipe>
            <InstaLogoCursive
                src={instaCursive}
                alt="instagram logo cursive"
            />
            <SearchInput
                type="text"
                placeholder="&#128269; Search"
                onKeyDown={props.searchPosts}
            />

            <IconSection>
                <SearchBarIcon src={compassIcon} alt="compass icon" />
                <SearchBarIcon src={heartIcon} alt="heart icon" />
                <SearchBarIcon src={userIcon} alt="user icon" />
            </IconSection>
        </SearchContainer>
    )

}

export default SearchBar