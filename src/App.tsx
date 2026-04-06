import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { ThemeProvider } from './context/ThemeContext'
import { AuthProvider } from './hooks/useAuth'
import AdminBar from './components/admin/AdminBar'
import { Toaster } from 'sonner'

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
          <AdminBar />
          <Toaster position="top-center" richColors />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
