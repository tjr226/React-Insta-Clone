import React from 'react'
// import logo from './logo.svg';
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'
import dummyData from './dummy-data'

function App() {

  return (
    <div className="insta-app-container">
      {/* render search bar */}
      <SearchBar />
      {/* render one PostContainer for each post */}
      {dummyData.map(post => {
        return <PostContainer
          key={post.id}
          post={post}
        />
      })
      }

    </div>
  );
}


export default App;
