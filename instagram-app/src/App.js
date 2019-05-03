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

  searchPostsHandler = event => {
    const posts = this.state.posts.filter(post => {
      if (post.username.includes(event.target.value)) {
        return post;
      } else {
        return null;
      }
    });
    this.setState({ filteredPosts: posts });
  };

  render() {
    return (
      <div className="insta-app-container">
        <SearchBar
          // searchTerm={this.state.searchTerm}
          searchPosts={this.searchPostsHandler}
        />
        <PostContainer posts={
          this.state.filteredPosts.length > 0
            ? this.state.filteredPosts
            : this.state.posts} />
      </div>
    );
  };
};

export default App;
