import { Navigate, Route, Routes } from 'react-router'
import { HomePage, LoginPage, SignUpPage } from './pages'
import { Footer } from './components'
import { Toaster } from 'react-hot-toast'
import { useAuthStore } from './store/authUser.js'
import { useEffect } from 'react'
import { Loader } from 'lucide-react'

const App = () => {
  const { user, isCheckingAuth, authCheck } = useAuthStore();

  useEffect(() => {
    authCheck()
  }, [authCheck]);

  if (isCheckingAuth) {
    return (
      <div className='h-screen'>
        <div className='flex justify-center items-center bg-black h-full'>
          <Loader className='animate-spin text-red-600 size-10' />
        </div>
      </div>
    );
  }
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={!user ? <LoginPage /> : <Navigate to={'/'} />} />
        <Route path='/signup' element={!user ? <SignUpPage /> : <Navigate to={'/'} />} />
      </Routes>
      <Toaster />
      <Footer />
    </>
  )
}

export default App