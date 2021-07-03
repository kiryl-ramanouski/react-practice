import css from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      <h3>My Posts</h3>
      <textarea name="" id="" cols="30" rows="5"></textarea>
      <button>Add post</button>

      <div className={css.posts}>
      <Post message="Hello, how are you?" likes="10"/>
      <Post message="It's my second post" likes="20"/>
      </div>
    </div>
  );
}

export default MyPosts;
