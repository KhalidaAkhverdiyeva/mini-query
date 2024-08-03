import React from 'react'
import Header from '../header/header'

import { Outlet } from 'react-router-dom'

import Sidebar  from '../sidebar/sidebar';



const Layout = () => {
  return (
    <div className="flex min-h-screen">

      <Sidebar/>
      <div className=" flex-1 flex flex-col">
        <Header />
        <main className="flex-1  px-[50px] ml-[300px]">
          <Outlet />
        </main>

      </div>
    </div>
  )
}

export default Layout