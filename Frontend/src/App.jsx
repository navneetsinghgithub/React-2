import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import New from './component/New'
import Index from './component/Index'
import Dashboard from './component/Dashboard'
import GetSingle from './component/GetSingle'
import Update from './component/Update'




function App() {

  return (
    <>
      <Routes>

        <Route path='/new' element={<New />} />
        <Route path='/dash' element={<Dashboard />} />

        <Route path='/index' element={<Index />} />
        <Route path='/getSingle/:id' element={<GetSingle />} />
        <Route path='/Update/:id' element={<Update />} />




      </Routes>
    </>
  )
}

export default App
