import css from "./Post.module.css"

const Post = (props) => {
  return (
    <div className={css.item}>
      <p>{props.message}</p>
      <img src="avatar.jpg" alt="avatar" />
      <p>likes: {props.likes}</p>
      <button>Like</button>
    </div>
  );
}

export default Post;
