import '@fortawesome/fontawesome-free/css/all.css';
import { useState } from 'react';

const Post = (props) => {

  const [commentIsOpen, setCommentIsOpen] = useState(false);
  const [likeIsOpen, setLikeIsOpen] = useState(false);

  return (
    <div className="box">
      <div className="media m-auto">
        <div className="media-left">
          <figure className="image is-48x48">
            <img
              className="is-rounded"
              src="https://bulma.io/assets/images/placeholders/96x96.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-4">{props.username}</p>
        </div>
      </div>
      <div className="content">
        <p>{props.postContent}</p>

        <time>
          {props.date} {props.time}
        </time>
      </div>
      <nav className="level is-mobile">
        <div className="level-left">
          <a className="level-item" aria-label="comment">
            <span className="icon is-small">
              <button className='button is-borderless m-0 p-0' id='comment' onClick={() => setCommentIsOpen(true)}>
                <i className="fas fa-comment"></i>
              </button>
            </span>
          </a>
          <a className="level-item" aria-label="like">
            <span className="icon is-small">
              <button className='button is-borderless m-0 p-0' id='like' onClick={() => setLikeIsOpen(true)}>
                <i className="fas fa-heart"></i>
              </button>
            </span>
          </a>
        </div>
      </nav>
      <div className={`modal ${commentIsOpen ? 'is-active' : ''}`}>
        <div className="modal-background" onClick={() => setCommentIsOpen(false)}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Write a comment!</p>
            <button className="delete" aria-label="close" onClick={() => setCommentIsOpen(false)}></button>
          </header>
          <section className="modal-card-body">
            <textarea className='textarea' id='comments'></textarea>
          </section>
          <footer className="modal-card-foot">
            <div className="buttons">
              <button className="button is-success mt-1">Post</button>
              <button className='button is-ghost mt-1' onClick={() => setCommentIsOpen(false)}>Cancel</button>
            </div>
          </footer>
        </div>
      </div>
      <div className={`modal ${likeIsOpen ? 'is-active' : ''}`}>
        <div className="modal-background" onClick={() => setLikeIsOpen(false)}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">See who likes this post!</p>
            <button className="delete" aria-label="close" onClick={() => setLikeIsOpen(false)}></button>
          </header>
          <section className="modal-card-body">
            <ul>
              <li>YOU</li>
            </ul>
          </section>
          <footer className="modal-card-foot">
            <div className="buttons">
              <button className='button is-success mt-1' onClick={() => setLikeIsOpen(false)}>Close</button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Post;
