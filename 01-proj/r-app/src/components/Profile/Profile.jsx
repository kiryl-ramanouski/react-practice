import css from "./Profile.module.css"
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <main className={css.content}>
      <div>
        <img src="magister.jpeg" alt="magister" />
      </div>
      <div>
        Avatar + description
      </div>
      <MyPosts />
    </main>
  );
}

export default Profile;
