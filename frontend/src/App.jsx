
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
//pages
import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'

//components
import NavBar from './components/navBar'

function App() {
  const { user } = useAuthContext()

  return (
    <>

      <div className='App'>
        <NavBar />

        <BrowserRouter>
          <div className=''>
            <Routes>
              <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
              <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
