/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
const PostCard = ({ title, description, image, date, timeRead, url }) => {
    return (
        <>
            <div className="postCard">
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