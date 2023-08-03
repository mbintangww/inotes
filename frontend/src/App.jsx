
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//pages
import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'

//components
import NavBar from './components/navBar'

function App() {


  return (
    <>

      <div className='App'>
        <NavBar />

        <BrowserRouter>
          <div className=''>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
