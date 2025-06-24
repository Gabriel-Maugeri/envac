import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext.jsx'

const Main = () => {
  // Usar la ruta base actual para el Router
  const basePath = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'))
  
  return (
    <LanguageProvider>
      <Router basename={basePath}>
        <App />
      </Router>
    </LanguageProvider>
  )
}

createRoot(document.getElementById('root')).render(<Main />)