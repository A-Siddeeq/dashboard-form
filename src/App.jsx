import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import Dashboard from './Dashboard'
import Test from './pages/Test'
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
          <Route path='/test' element={<Test />} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
