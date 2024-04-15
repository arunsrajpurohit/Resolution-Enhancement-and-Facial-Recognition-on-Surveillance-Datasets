import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'  
import Homepage from './pages/Homepage'
import Uploadpage from './pages/Uploadpage'
import Displaypage from './pages/Displaypage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/upload' element={<Uploadpage/>}></Route>
        <Route path='/display' element={<Displaypage/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
