import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="logo.jpg" alt="logo" />
      </header>
      <nav className="nav">
        <div>
          <a href="#s">Profile</a>
        </div>
        <div>
          <a href="#s">Messages</a>
        </div>
        <div>
          <a href="#s">News</a>
        </div>
        <div>
          <a href="#s">Music</a>
        </div>
        <div>
          <a href="#s">Setting</a>
        </div>
      </nav>
      <main className="content">
        <div>
          <img src="magister.jpeg" alt="magister" />
        </div>
        <div>
          Avatar + description
        </div>
        <div>
          My Post
          <div>
            New Post
          </div>
          <div>Post 1</div>
          <div>Post 2</div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
