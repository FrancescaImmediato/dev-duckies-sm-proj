export default function Post(props) {
    return (
        <div>
            <div class="card">
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img
                                    src="https://bulma.io/assets/images/placeholders/96x96.png"
                                    alt="Placeholder image"
                                />
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">{props.name}</p>
                        </div>
                    </div>

                    <div class="content">
                        <p>{props.postContent}</p>
                        <br />
                        <time datetime={props.date}>{props.date} {props.time}</time>
                    </div>
                </div>
            </div>
        </div>
    )
}