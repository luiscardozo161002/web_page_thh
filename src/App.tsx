import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import AppRoutes from './routes/AppRoutes'
import { ThemeProvider } from './context/ThemeContext'
import { AuthProvider } from './hooks/useAuth'
import AdminBar from './components/admin/AdminBar'
import { Toaster } from 'sonner'

function App() {
  return (
    <HelmetProvider>
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
          <AdminBar />
          <Toaster position="top-center" richColors />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
