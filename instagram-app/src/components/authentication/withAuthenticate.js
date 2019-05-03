import React from 'react'

const withAuthenticate = PostsPage => Login => 
  class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
        };
    }

    render() {
      return (this.state.loggedIn ? <PostsPage /> : <Login />)
      }
  };


export default withAuthenticate;