import React from 'react'
import NavbaRouter from './companents/Navbar/NavbaRouter'
import { Route, Routes } from 'react-router-dom'
import Home from './companents/Home/Home'
import TableBase from './companents/Table/TableBase'
import CreateData from './companents/Section/Section'
import EditeData from './companents/EditePage/EditeData'

const App = () => {
  return (
    <div>
      <NavbaRouter/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/create' element={<CreateData/>}/>
        <Route path='/table' element={<TableBase/>}/>
        <Route path='/table/editetable/:id' element={<EditeData/>}/>
      </Routes> 
    </div>
  )
}

export default App

