import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import Dashboard from './Dashboard'
import { AuthProvider } from './contexts/AuthContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
    <AuthProvider>
    <BrowserRouter>
        <Routes>
          <Route element={<RegisterPage />} index path='/' />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login'  element={<LoginPage />}/>
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
