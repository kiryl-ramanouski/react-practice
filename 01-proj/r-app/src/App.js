import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <main className="app-wrapper-content">
                <Dialogs/>
            </main>
            {/*<Profile/>*/}
        </div>
    );
}

export default App;
