import { Route, Routes } from 'react-router'
import { HomePage, LoginPage, SignUpPage } from './pages'
import { Footer } from './components'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App