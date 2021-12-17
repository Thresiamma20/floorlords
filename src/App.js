import React from 'react';
import { BrowserRouter , Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Signin from './components/views/signin';
import Signup from './components/views/signup';
import Home from './components/views/home';
import Profile from './components/views/profile';

function App() {
  return (
  
    
    <BrowserRouter>

     <Navbar/>
    <Routes>
     
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    <div className="bgimg">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyyuJrDsyZgbq0DNPEYFL_sU0rFYKoZr1Gjw&usqp=CAU  " alt="no net"></img>
    </div>
  </BrowserRouter>
  );
  }

export default App;
