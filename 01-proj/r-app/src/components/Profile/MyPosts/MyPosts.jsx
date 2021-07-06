import css from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
    const postsElements = props.postsData.map((post) => {
        return (<Post message={post.message}/>);
    });
    const newPostElement = React.createRef();
    const addPost = () => {
        const postText = newPostElement.current.value;
        props.addPost(postText);
    };

    return (
        <div className={css.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea ref={newPostElement} name="" id="" cols="30" rows="5"></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={css.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;
