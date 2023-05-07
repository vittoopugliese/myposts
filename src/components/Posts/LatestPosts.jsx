import PostCard from "./PostCard";

const postContent = [ { title: "Ready to submit to the App Store", description:"Hi, it's Takuya here. I've been working on preparing to submit my mobile app with In-App Purchase support to the App Store.", image: "src/assets/setup.jpeg", date: "Apr 28, 2023", timeRead: "3 min read", id: "777", url:'post1'}, { title: "Post nuber two", description:"Hi, it's Takuya here. I've been working on preparing to the App Store.", image: "src/assets/setup.jpeg", date: "Apr 28, 2023", timeRead: "3 min read", id: "1888", url:'post2'}];
// call to 4 o 5 latest posts
export const LatestPosts = () => {
  
  return (
    <>
      <main>
        <p className="latestPosts">Latest posts</p>
        <hr />

        <div className="postsCardContainer">
          {postContent.map((post) => {
            return (
              <PostCard url={post.url}
                key={post.id}
                title={post.title}
                description={post.description}
                image={post.image}
                date={post.date}
                timeRead={post.timeRead}
              />
            );
          })}
        </div>
      </main>
    </>
  );
};
