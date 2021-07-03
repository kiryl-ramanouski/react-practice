import css from "./Profile.module.css"

const Profile = () => {
  return (
    <main className={css.content}>
      <div>
        <img src="magister.jpeg" alt="magister" />
      </div>
      <div>
        Avatar + description
      </div>
      <div>
        My Posts
        <div>
          New Post
        </div>
        <div>Post 1</div>
        <div>Post 2</div>
      </div>
    </main>
  );
}

export default Profile;
