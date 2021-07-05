import css from "./Profile.module.css"
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <main className={css.profile}>
            <ProfileInfo/>
            <MyPosts postsData={props.state.postsData}/>
        </main>
    );
}

export default Profile;
