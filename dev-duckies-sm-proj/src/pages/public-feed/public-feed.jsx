// App.js
import React from "react";
import Header from "./Header";
import Post from "./Post";
import Sidebar from "./Sidebar";
import "./styles.css";

function PublicFeed() {
  // Sample data for posts
  const posts = [
    // { id: 1, user: "User1", content: "This is the first post" },
    // { id: 2, user: "User2", content: "This is the second post" },
    // // Add more posts as needed
  ];

  return (
    <div className="App">
      <Header />
      <div className="columns">
        <div className="column is-4">
          <Sidebar />
        </div>
        <div className="column is-8">
          {/* {posts.map((post) => (
            <Post key={post.id} user={post.user} content={post.content} />
          ))} */}
          <Post
            user="Tommy"
            postContent="Testing 123"
            date="10/3/24"
            time="13:14"
          />
          <Post
            user="Jessie"
            postContent="Testing 123"
            date="10/3/24"
            time="13:14"
          />
          <Post
            user="Albert"
            postContent="Testing 123"
            date="10/3/24"
            time="13:14"
          />
        </div>
      </div>
    </div>
  );
}

export default PublicFeed;
