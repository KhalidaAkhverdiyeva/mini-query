import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import { Outlet } from 'react-router-dom'

import Sidebar  from '../sidebar/sidebar';



const Layout = () => {
  return (
    <div className="flex min-h-screen">

      <Sidebar/>
      <div className=" flex-1 flex flex-col">
        <Header />
        <main className="flex-1  p-[25px] ml-[300px]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout