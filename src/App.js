import logo from './logo.svg';
import './App.css';
import Nav from './Componant/Navbar/Nav';
import Dashboard from './Componant/Navbar/DashBoard/Dashboard';
import {  Route, Routes } from 'react-router-dom';
import Profile from './Componant/Navbar/DashBoard/Profile/Profile';
import Portal from './Componant/Portal';
import Login from './Componant/Navbar/Login/Login';
import Signin from './Componant/Navbar/Login/Signin/Signin';
import About from './Componant/Navbar/About/About';
import Protect from './Protect';


function App() {
  return (
   
    // <BrowserRouter>
    <Routes>
    <Route path="/login" element={<Login/>}/>
   <Route path="/" element={<Login/>}/>
    <Route path='/sigin' element={<Signin/>}/>
    <Route path='/portal' element={<Portal/>}>
    <Route path="" element={<Nav/>}/>
    <Route path='profile' element={<Profile/>}/>
    <Route path='dashboard' element={<Dashboard/>}/>
    <Route path='about' element={<About/>}/>
   
    </Route>
    
    </Routes>
    

    // </BrowserRouter>

    
  );
}

export default App;
