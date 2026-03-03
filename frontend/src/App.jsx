import React from 'react'
import FaceExpression from './features/expression/components/FaceExpression'
import Approutes from './Approutes'
import { AuthProvider } from './features/Auth/Auth.context'
const App = () => {
  return (
  <>

  <AuthProvider>

<Approutes></Approutes>
  </AuthProvider>
   
  
   
  </>
  )
}

export default App