
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//pages
import Home from './pages/home'

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
              <Route
                path="/"
                element={<Home />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
