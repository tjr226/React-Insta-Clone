import React from 'react'
import './App.css'
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './components/authentication/withAuthenticate';
import Login from './components/Login/Login';
import styled from "styled-components";

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

const InstAppContainer = styled.div`
  width: 400px;
`;

class App extends React.Component {
  
  render() {
    return (
      <InstAppContainer>
        <ComponentFromWithAuthenticate />  
      </InstAppContainer>
    );
  };
};

export default App;
