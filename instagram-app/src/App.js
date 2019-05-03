import React from 'react'
import './App.css'
import PostsPage from './components/PostContainer/PostsPage';


class App extends React.Component {

  render() {
    return (
      <div className="insta-app-container">
        <PostsPage />
      </div>
    );
  };
};

export default App;
