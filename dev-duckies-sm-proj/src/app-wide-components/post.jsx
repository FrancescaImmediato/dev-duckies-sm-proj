import '@fortawesome/fontawesome-free/css/all.css';

const Post = (props) => {

  const handleComment = () =>{
    console.log('I made a comment!')
  }
  
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
              <button className='button is-borderless m-0 p-0' id='comment' onClick={handleComment}>
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
    </div>
  );
};

export default Post;
