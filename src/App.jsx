import React from "react"
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Create from "./Component/Create"
import Dashboard from "./Component/Dashboard"
import Get from "./Component/Get"
import GetSingle from "./Component/getSingle"
import Update from "./Component/Update"

function App() {


  return (
    <>
      <Routes>
        <Route path='/create' element={<Create />} />
        <Route path='/get' element={<Get />} />
        <Route path='/getsingle/:id' element={<GetSingle />} />
        <Route path='/update/:id' element={<Update />} />

        <Route path='/dashboard' element={<Dashboard />} />


      </Routes>
    </>
  )
}

export default App
