import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <img src="logo.jpg" alt="logo" />
    </header>
  );
}

export default Header;
