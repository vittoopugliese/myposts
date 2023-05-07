import Post from "./Post";

const postContent = [ { title: "Ready to submit to the App Store", description:"Hi, it's Takuya here. I've been working on preparing to submit my mobile app with In-App Purchase support to the App Store.", image: "src/assets/setup.jpeg", date: "Apr 28, 2023", timeRead: "3 min read", id: "777", }, { title: "Post nuber two", description:"Hi, it's Takuya here. I've been working on preparing to the App Store.", image: "src/assets/setup.jpeg", date: "Apr 28, 2023", timeRead: "3 min read", id: "888", }, { title: "Ready to submit to the App Store", description:"Hi, it's Takuya here. I've been working on preparing to submit my mobile app with In-App Purchase support to the App Store.", image: "src/assets/setup.jpeg", date: "Apr 28, 2023", timeRead: "3 min read", id: "777", }, { title: "Post nuber two", description:"Hi, it's Takuya here. I've been working on preparing to submit my mobile app!", image: "src/assets/setup.jpeg", date: "Apr 28, 2023", timeRead: "3 min read", id: "888", }, ];

export const Body = () => {
  return (
    <>
      <main>
        <p className="latestPosts">Latest posts</p>
        <hr />

        <div className="postsContainer">
          {postContent.map((post) => {
            return (
              <Post
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
