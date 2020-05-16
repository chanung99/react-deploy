import React from 'react';
import logo from './logo.svg';
import './App.css';
import profileImage from './img/chanung.jpg';

function App() {
  return (
    <div className="App">
     <h1>my react app</h1>
     <h2>author : chanung</h2>
     <img src={profileImage} alt="profile-image"></img>
    </div>
  );
}

export default App;
