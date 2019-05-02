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
        {this.state.posts.map(post =>
          <PostContainer
            key={post.id}
            post={post}
          />)
        };

      </div>
    );
  };
}


export default App;
