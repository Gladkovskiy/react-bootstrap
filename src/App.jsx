import React from 'react'
import AppRouter from './components/AppRouter'
import {BrowserRouter} from 'react-router-dom'
import NavbarExample from './components/NavbarExample'

function App() {
  return (
    <BrowserRouter>
      <NavbarExample />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
