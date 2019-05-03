import React from 'react'
// import logo from './logo.svg';
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'
import dummyData from './dummy-data'

class App extends React.Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    this.setState({ posts: dummyData })
  }

  render() {
    return (
      <div className="insta-app-container">
        <SearchBar />
        <PostContainer posts={this.state.posts} />
      </div>
    );
  };
};

export default App;
