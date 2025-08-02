
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Demo from './pages/Demo'
import Form from './pages/Form'

function App() {
  

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route  path='/' element={<Home />} />
            <Route  path='/demo' element={<Demo />} />
            <Route  path='/form' element={<Form />} />
            
          </Routes>
        </BrowserRouter>


   
    </>
  )
}

export default App
