import React from 'react'
import Header from './Component/Util/Header'
import { Outlet } from 'react-router-dom'

const App = ({isAuthenticated}) => {
  return (
    <div>
      <Header isAuthenticated={isAuthenticated}/>
      <Outlet/>
    </div>
  )
}

export default App
