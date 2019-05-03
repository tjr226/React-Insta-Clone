import React from 'react'
import instaLogo from '../images/instagram-cursive.png'
import styled from "styled-components";

const LoginCard = styled.div`
    margin: 2px;
    border: 1px solid lightgrey;
    width: 400px;
`;

const LoginLogo = styled.img`
    width: 98%;
    padding: 1%;
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    input::placeholder {
        text-align: center;
    }
`;

const LoginButton = styled.button`
    width: 60%;
    height: 30px;
    color:white;
    background-color:darkgrey;
    border-radius: 8px;
`;

const LoginInput = styled.input`
    width: 60%;
    height: 30px;
    padding: 5px 0px
`;

class Login extends React.Component {
    login = event => {
        localStorage.setItem('username', event.target.username.value)
    }

    render() {
        return (
            <LoginCard>
                <LoginLogo
                    type="LoginLogo"
                    src={instaLogo}
                    alt="instagram cursive logo"
                    className="login-logo"
                />
                <LoginForm onSubmit={this.login}>
                    <LoginInput
                        type="text"
                        placeholder="username"
                        name="username"
                    ></LoginInput>
                    <LoginInput
                        type="text"
                        placeholder="password"
                        name="password"
                    ></LoginInput>
                    <LoginButton>Log In</LoginButton>
                </LoginForm>

            </LoginCard >
        )
    }
}


export default Login