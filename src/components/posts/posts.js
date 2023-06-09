import Post from "../post/post";
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {Array.isArray(posts)?(posts).map((p) => (
        <Post post={p} />)) : null
      }
    </div>
  );
}