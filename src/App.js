import React from 'react';
import './App.css';
import Header from "./Header";
import Technologies from "./Technologies";

const App = () => {
    return (
        <div className="App">
            <div>
                <Header/>
                <Technologies/>
            </div>
        </div>);
};

export default App;
