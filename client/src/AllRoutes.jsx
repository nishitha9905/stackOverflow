import React from 'react'
import { Route,Routes } from "react-router-dom";
import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import Questions from './Pages/Questions/Questions';
import AskQuestion from './Pages/AskQuestion/AskQuestion';
import DisplayQuestions from './Pages/Questions/DisplayQuestions';
const AllRoutes = () => {
  return (
    <div>
       <Routes>
       <Route exact path='/' element={<Home/>}/>
       <Route path='/Auth' element={<Auth/>}/>
       <Route path='/Questions' element={<Questions/>}/>
       <Route path='/AskQuestion' element={<AskQuestion/>}/>
       <Route path='/Questions/:id' element={<DisplayQuestions/>}/>
       </Routes>
    </div>
  )
}

export default AllRoutes
