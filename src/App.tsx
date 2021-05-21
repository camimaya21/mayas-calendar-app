import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Router } from 'routes/Router'
import 'react-toastify/dist/ReactToastify.min.css'
import { StyledToastContainer } from 'styles/toastCustomStyles'
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <StyledToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router />
    </BrowserRouter>
  )
}

export default App
