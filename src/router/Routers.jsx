import React from 'react'
import { Routes,Route } from "react-router-dom";
import Root from '../pages/Root';
import Main from '../pages/Main';
import Login from '../pages/Login';
// import Header from '../component/Header';
// import Dashboard from '../component/Nav';
import Test from '../pages/Test';

export default function Routers() {
  return (
        <Routes>
            <Route path='/Login' element={ <Login/>} />
            <Route element={<Root/>}>
                <Route path='/Main' element={ <Main/>}></Route>
                <Route path='/test' element={ <Test/>}></Route>
            </Route>
        </Routes> 
  )
}
