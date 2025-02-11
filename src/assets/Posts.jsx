import { useState, useEffect } from "react";

export default function Posts() {
  // state for posts data
  const [posts, setPosts] = useState([]);

  // fetching data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Data fetching failed");
        }
        const data = await response.json();
        console.log(data);
        setPosts(data);
      } catch (error) {
        console.error("Data fetching failed", error);
      }
    };
    fetchData();
  }, []);

  // creating post elements
  const renderPosts = () => {
    return posts.map((post) => (
      <div key={post.id}>
        <h2>
          {post.id}. {post.title}
        </h2>
        <p>{post.body}</p>
      </div>
    ));
  };

  return <div>{renderPosts()}</div>;
}
