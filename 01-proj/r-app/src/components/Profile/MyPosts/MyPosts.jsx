import css from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      <h3>My Posts</h3>
      <textarea name="" id="" cols="30" rows="5"></textarea>
      <button>Add post</button>
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default MyPosts;
