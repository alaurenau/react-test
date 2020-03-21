import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
    return (
        <div className="app-wrapper">
            <header className='header'>
                <img src={logo} alt='logo'/>
            </header>
            <nav className='nav'>
                <div><a>Profile</a></div>
                <div><a>Messages</a></div>
                <div><a>News</a></div>
                <div><a>Music</a></div>
                <div><a>Settings</a></div>
            </nav>
            <div className='content'>
                <div>content</div>
                <div>ava</div>
                <div>My posts
                    <div>post 1</div>
                    <div>post 2</div>
                </div>
            </div>
        </div>);
};

export default App;
