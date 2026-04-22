import { Route, Routes } from 'react-router-dom'
import './App.css'
import Registr from './Registr/Registr'
import Login from './Login/Login'

function App() {


  return (
    <div className='App'>
      {/* <Registr /> */}

       <Routes>
          <Route path='/' element={<Registr />} />
          <Route path='/login' element={<Login />} />
       </Routes>
    </div>
  )
}

export default App
