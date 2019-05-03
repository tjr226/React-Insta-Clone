import React from 'react'
import instaLogo from '../images/instagram-cursive.png'
import './Login.css'

class Login extends React.Component {
    login = event => {
        localStorage.setItem('username', event.target.username.value)
    }

    render() {
        return (
            <div className="login-card">
                <img
                    src={instaLogo}
                    alt="instagram cursive logo"
                    className="login-logo"
                />
                <form
                    className="login-form"
                    onSubmit={this.login}
                     >
                    <input
                        className="login-input-field"
                        type="text"
                        placeholder="username"
                        name="username"
                    ></input>
                    <input
                        className="login-input-field"
                        type="text"
                        placeholder="password"
                        name="password"
                    ></input>
                    <button 
                    className="login-button"
                    >Log In</button>

                </form>

            </div >
        )
    }
}


export default Login