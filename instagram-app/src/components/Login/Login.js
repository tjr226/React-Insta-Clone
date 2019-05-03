import React from 'react'
import instaLogo from '../images/instagram-cursive.png'

class Login extends React.Component {
    login() {
        localStorage.setItem('username', "username");
        this.setState(() => {});
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
                    onSubmit={this.login} >
                    <input
                        className="login-input-field"
                        type="text"
                        placeholder="username"
                    />
                    <input
                        className="login-input-field"
                        type="text"
                        placeholder="password"
                    />
                    <button>Log In</button>

                </form>

            </div >
        )
    }
}


export default Login