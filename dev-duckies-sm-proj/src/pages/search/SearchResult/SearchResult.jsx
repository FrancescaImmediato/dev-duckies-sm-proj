import './SearchResult.css'
import '@fortawesome/fontawesome-free/css/all.css';
import { useState, useEffect } from 'react';
import axios from 'axios'

axios.defaults.withCredentials = true;

export const SearchResult = ({ result }) => {
  const [profileIsOpen, setProfileIsOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);

  function showProfile(username) {
    // console.log(page);
    axios.get(`http://localhost:8080/posts/user/${username}/1`)
    .then(res => {setPosts(res.data)})
    .catch(err => console.log(err))
    // console.log(posts); 
  }

  const increasePage = () => {
    setPage(page + 1);
  };

  const decreasePage = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    if(page > 0) {
      console.log(page)
      axios.get(`http://localhost:8080/posts/user/${result.username}/${page}`)
      .then(res => {setPosts(res.data)})
      .catch(err => console.log(err));
    }
  }, [page])
  
  return (
  <div>
    <div className='search-result' onClick={() => {setProfileIsOpen(true); showProfile(result.username)}}>
      <figure className= "image is-48x48 is-square mr-5 ml-3">
        <img className= "is-rounded" src={`data:image/png;base64,${result.profilePic}`} alt="ProfilePicture"/>
      </figure>
      <p>{result.username}</p>
    </div>
    <div className={`modal ${profileIsOpen ? "is-active" : ""}`}>
        <div
          className="modal-background"
          onClick={() => setProfileIsOpen(false)}
        ></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Username</p>
            <button
              className="delete"
              aria-label="close"
              onClick={() => setProfileIsOpen(false)}
            ></button>
          </header>
          <section className="modal-card-body">
            {posts.map((post) => {
              return <p>{post.post_content}</p> 
            })}
          </section>
          <footer className="modal-card-foot">
            <div className="buttons">
              <button
                className="button is-ghost mt-1"
                onClick={() => {decreasePage()}}>
                Previous
              </button>
              <button
                className="button is-ghost mt-1"
                onClick={() => {increasePage()}}>
                Next
              </button>
            </div>
          </footer>
        </div>
      </div>
  </div>  
)
}