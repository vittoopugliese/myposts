const Post = ({ title, description, image, date, timeRead, url }) => {
    return (
        <>
            <div className="post">
                <img className="postImage" src={image} />
                <div className="postTextsContainer">
                    <a className="postTitle">{title}</a>
                    <p className="postDesc">{description}</p>
                    <p className="postDate">{date} - {timeRead}</p>
                </div>
            </div>
        </>
    )
}

export default Post