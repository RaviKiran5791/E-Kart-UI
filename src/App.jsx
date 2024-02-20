import React from 'react'
import Header from './Component/Util/Header'
import { Outlet } from 'react-router-dom'

const App = ({userName,isAuthenticated}) => {
  return (
    <div>
      <Header userName={userName} isAuthenticated={isAuthenticated}/>
      <Outlet/>
    </div>
  )
}

export default App
