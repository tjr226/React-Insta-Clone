import React from 'react'
import './App.css'
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './components/authentication/withAuthenticate';
import Login from './components/Login/Login';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

class App extends React.Component {
  
  render() {
    return (
      <div className="insta-app-container">
        <ComponentFromWithAuthenticate />  
      </div>
    );
  };
};

export default App;
