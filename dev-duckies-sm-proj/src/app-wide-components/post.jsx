import '@fortawesome/fontawesome-free/css/all.css';
import { useState } from 'react';

const Post = (props) => {

  const [isOpen, setIsOpen] = useState(false);

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
              <button className='button is-borderless m-0 p-0' id='comment' onClick={() => setIsOpen(true)}>
                <i className="fas fa-comment"></i>
              </button>
            </span>
          </a>
          <a className="level-item" aria-label="like">
            <span className="icon is-small">
              <i className="fas fa-heart" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </nav>
      <div className={`modal ${isOpen ? 'is-active' : ''}`}>
        <div className="modal-background" onClick={() => setIsOpen(false)}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Write a comment!</p>
            <button className="delete" aria-label="close" onClick={() => setIsOpen(false)}></button>
          </header>
          <section className="modal-card-body">
            <textarea className='textarea'></textarea>
          </section>
          <footer className="modal-card-foot">
            <div className="buttons">
              <button className="button is-success mt-1">Post</button>
              <button className='button is-ghost mt-1' onClick={() => setIsOpen(false)}>Cancel</button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Post;
