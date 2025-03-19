import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import './App.css'
const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <hr />
      <div className='app-content'>
        <Sidebar />
      </div>
    </div>
  )
}

export default App