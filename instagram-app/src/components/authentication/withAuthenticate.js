import React from 'react'

const withAuthenticate = PostsPage => Login => 
  class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
        };
    }

    componentDidMount() {
        let localLoggedIn = localStorage.getItem('username');
        if (!localLoggedIn) {
            this.setState({loggedIn: false});
        } else {
            this.setState({loggedIn: true});
        }
    }
    render() {
      return (this.state.loggedIn ? <PostsPage /> : <Login />)
      }
  };


export default withAuthenticate;