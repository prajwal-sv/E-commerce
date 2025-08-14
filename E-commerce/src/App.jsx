import { useState } from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Home from './Pages/home'

function App() {
  const [count, setCount] = useState(0)

  return (
     
      <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      
      </>
    
  )
}

export default App
