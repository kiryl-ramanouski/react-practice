import css from "./Profile.module.css"
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <main>
      <div>
        <img src="master.jpeg" alt="master" />
      </div>
      <div>
        Avatar + description
      </div>
      <MyPosts />
    </main>
  );
}

export default Profile;
