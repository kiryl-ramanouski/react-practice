import css from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    const postsData = props.postsData;
    const postsElements = postsData.map((post) => {
        return (<Post message={post.message}/>);
    })

    return (
        <div className={css.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea name="" id="" cols="30" rows="5"></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={css.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;
