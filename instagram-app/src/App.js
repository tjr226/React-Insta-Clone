import React from 'react'
// import logo from './logo.svg';
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'
import dummyData from './dummy-data'

class App extends React.Component {
  state = {
    posts: [],
    filteredPosts: [],
  }

  componentDidMount() {
    this.setState({ posts: dummyData })
  }

  searchPosts = event => {
    const posts = this.state.posts.filter(post => {
      if (post.username.includes(event.target.value)) {
        return post;
      }
    });
    this.setState({ filteredPosts: posts });
  };

  render() {
    return (
      <div className="insta-app-container">
        <SearchBar searchPosts={this.state.searchPosts}/>
        <PostContainer posts={this.state.posts} />
      </div>
    );
  };
};

export default App;
