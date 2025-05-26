import React from 'react'
import { Outlet } from "react-router-dom";

import Header from '../component/Header';
import Nav from '../component/Nav';

export default function Root() {
  return (
    <div>
        <Header/>
        <div className='pageWrap'>
        <Nav/>
        <Outlet />
        </div>
    </div>
  )
}
