import css from "./Post.module.css"

const Post = () => {
  return (
    <div className={css.item}>
      <p>Post 1</p>
      <img src="avatar.jpg" alt="avatar" />
      <button>Like</button>
    </div>
  );
}

export default Post;
