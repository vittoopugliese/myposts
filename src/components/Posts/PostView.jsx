
// call to all posts
let postdescrip = "Hi, it's Takuya here. I've been working on preparing to submit my mobile app with In-App Purchase support to the App Store. I'd like to share some tips on that."
export const PostView = ({title, description, image, dateAndCat}) => {
  return (
    <>
      <div className="postContainer">
        <p className="postDate">APR 28, 2023 - 3 MIN READ - <b>NEWS</b></p>
        <h1 className="postTitle">Ready to submit to the app store</h1>
        <img src="src/assets/setup.jpeg" alt="" />
        <p className="postDescrip">{postdescrip}</p>
      </div>

    </>
  );
};
