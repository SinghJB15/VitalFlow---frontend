import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/Index.js';
import Sidebar from './components/Sidebar.js';
import Main from "./components/Main.js";
import Auth from './components/login.js';
import DeviceRegistration from './components/DeviceRegistrationComponenet.js';
import Journal from "./components/Journal.js";


function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <div className="App">
        <Sidebar user={user}/>
        <Auth user={user} setUser={setUser}/>
        <Journal user={user}/>
        <Routes>
          <Route path="/" element={<IndexPage/>}></Route>
          <Route path="/fitbit" element={<Main user={user}/>}></Route>
          <Route path="/register-device" element={<DeviceRegistration/>}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
 