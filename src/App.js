import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import {Routes, Route} from "react-router-dom";
import { useState } from 'react';
import PrivateRoute from './pages/PrivateRoute';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-screen h-screen bg-black ">
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />}/>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn} >
            <Dashboard/>  
          </PrivateRoute>
        }/>

      </Routes>
    </div>
  );
}

export default App;
