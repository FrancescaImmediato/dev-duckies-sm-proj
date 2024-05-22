import Header from "../../app-wide-components/Navbar/MobileNav.jsx";
import Post from "../../app-wide-components/post.jsx";
import "../../index.css";

function PublicFeed() {
  return (
    <div className="App">
      <Header />
      <div className="columns">
        <div className="column is-12">
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