import React from 'react'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
import Footer from './Footer'

function Layout() {
  return (
    <div>
    <Navbar/>
    <Sidebar/>
    <Dashboard/>
    <Footer/>
    
    </div>
  )
}

export default Layout