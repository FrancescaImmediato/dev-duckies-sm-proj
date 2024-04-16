import 'bulma/css/bulma.css'

export default function Post(props) {
    return (
        <div>
            <div className="card">
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <img
                                    src="https://bulma.io/assets/images/placeholders/96x96.png"
                                    alt="Placeholder image"
                                />
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">{props.name}</p>
                        </div>
                    </div>

                    <div className="content">
                        <p>{props.postContent}</p>
                        <br />
                        <time>{props.date} {props.time}</time>
                    </div>
                </div>
            </div>
        </div>
    )
}