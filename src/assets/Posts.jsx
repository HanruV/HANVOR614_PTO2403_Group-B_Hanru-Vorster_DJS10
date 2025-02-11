import { useState, useEffect } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaeholder.typicode.com/posts"
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

  return <h1>Posts</h1>;
}
