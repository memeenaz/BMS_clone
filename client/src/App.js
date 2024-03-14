import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import "./stylesheets/alignment.css"
import "./stylesheets/custom.css"
import "./stylesheets/form-elements.css"
import "./stylesheets/sizes.css"
import "./stylesheets/theme.css"
import "./stylesheets/form.css"

function App() {
  return (
  <div>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
     </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
