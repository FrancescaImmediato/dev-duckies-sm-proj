// Post.js
import React from "react";

const Post = (props) => {
  return (
    <div className="box">
      <article className="media">
        <div className="media-content">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                class="is-rounded"
                src="https://bulma.io/assets/images/placeholders/96x96.png"
                alt="Placeholder image"
              />
            </figure>
            <br />
          </div>
          <div className="content">
            <p>{props.postContent}</p>
            <br />
            <time>
              {props.date} {props.time}
            </time>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Post;