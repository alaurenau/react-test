import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <div>
                <Header/>
                <Technologies/>
            </div>
        </div>);
};

const Header = () => {
    return (
        <div>
            <a href='#s'>home</a>
            <a href='#s'>messages</a>
        </div>);
};

const Technologies = () => {
    return (
        <div>
            <ul>
                <li>css</li>
                <li>js</li>
                <li>html</li>
                <li>react</li>
            </ul>
        </div>);
};

export default App;
