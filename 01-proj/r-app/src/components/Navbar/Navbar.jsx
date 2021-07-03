import css from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={css.nav}>
      <div className={`${css.item} ${css.active}`}>
        <a href="#s">Profile</a>
      </div>
      <div className={css.item}>
        <a href="#s">Messages</a>
      </div>
      <div className={css.item}>
        <a href="#s">News</a>
      </div>
      <div className={css.item}>
        <a href="#s">Music</a>
      </div>
      <div className={css.item}>
        <a href="#s">Setting</a>
      </div>
    </nav>
  );
}

export default Navbar;
