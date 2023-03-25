import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Login from './signin-signup/login';
import SignIn from './signin-signup/signin';
import CheckComponent from './checkComp';
import Home from './home-add/home';
import AddNote from './home-add/add';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
<Route path='/' element={<Login/>}></Route>
<Route path='/signin' element={<SignIn/>}></Route>
<Route element={<CheckComponent />}>
<Route path='/home' element={<Home/>}></Route>
<Route path='/add' element={<AddNote/>}></Route>


</Route>
  </Routes>      
      
      </BrowserRouter>

    </div>
  );
}

export default App;
