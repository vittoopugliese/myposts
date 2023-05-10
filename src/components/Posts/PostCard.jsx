

const PostCard = ({ title, description, image, date, timeRead, url }) => {

    function goToPostPage(url){
        
    }

    return (
        <>
            <div className="postCard" onClick={() => goToPostPage(url)}>
                <img className="postCardImage" src={image} />
                <div className="postCardTextsContainer">
                    <a className="postCardTitle">{title}</a>
                    <p className="postCardDesc">{description}</p>
                    <p className="postCardDate">{date} - {timeRead}</p>
                </div>
            </div>
        </>
    )
}

export default PostCard