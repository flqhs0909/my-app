import React from 'react'
import { Routes,Route } from "react-router-dom";
import Root from '../pages/Root';
import Main from '../pages/Main';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
// import Header from '../component/Header';
// import Dashboard from '../component/Nav';
import Test from '../pages/Test';
import BusinessMain from '../pages/BusinessMain';
import UserEdit from '../pages/UserEdit';

export default function Routers() {
  return (
        <Routes>
            <Route path='/' element={ <Login/>} />
            <Route element={<Root/>}>
                <Route path='/main' element={ <Main/>}></Route>
                <Route path='/businessMain' element={ <BusinessMain/>}></Route>
                <Route path='/signUp' element={ <SignUp/>}></Route>
                <Route path='/userEdit' element={ <UserEdit/>}></Route>
                <Route path='/test' element={ <Test/>}></Route>
            </Route>
        </Routes> 
  )
}
