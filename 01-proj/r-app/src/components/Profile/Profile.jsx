import css from "./Profile.module.css"
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    const postsData = [
        {message: "Hello, how are you?", likes: 10},
        {message: "It's my second post", likes: 20},
    ];

    return (
        <main className={css.profile}>
            <ProfileInfo/>
            <MyPosts postsData={postsData}/>
        </main>
    );
}

export default Profile;
