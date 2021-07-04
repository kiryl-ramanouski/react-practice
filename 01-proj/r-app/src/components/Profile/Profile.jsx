import css from "./Profile.module.css"
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <main className={css.profile}>
            <ProfileInfo/>
            <MyPosts/>
        </main>
    );
}

export default Profile;
