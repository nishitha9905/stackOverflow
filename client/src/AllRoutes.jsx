import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Pages/Home/Home'
import Auth from './Pages/Pages/Auth/Auth'
const AllRoutes = () => {
  return (
    <div>
       <Routes>
       <Route exact path='/' element={<Home/>}/>
       <Route path='/Auth' element={<Auth/>}/>
       </Routes>
    </div>
  )
}

export default AllRoutes
