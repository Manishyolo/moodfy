import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './features/Auth/pages/Login';
import Register from './features/Auth/pages/Register';
import FaceExpression from './features/expression/components/FaceExpression';


const Approutes = () => {
  return (
     <BrowserRouter>
       <Routes>
          <Route path='/' element={<FaceExpression/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>

       </Routes>
     </BrowserRouter>
  )
}

export default Approutes