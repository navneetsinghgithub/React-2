
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Layout from './Component/Layout'
import Dasbord from './Component/Dasbord'
import Create from './Component/Create'
import Find from './Component/Find'
import FindSingle from './Component/FindSingle'
import Updated from './Component/Updated'
import Logiin from './Component/Logiin'




function App() {

  return (
    <>
      <Routes>
    
          <Route index element={<Logiin />} />
          <Route path='/' element={<Layout />} >
            <Route path='/dasb' element={<Dasbord/>}/>
          <Route path='/create' element={<Create />} />
          <Route path='/find' element={<Find />} />
          <Route path='/findsingle/:id' element={<FindSingle />} />
          <Route path='/updated/:id' element={<Updated/>} />





        



        </Route>
      </Routes>



    </>
  )
}

export default App
