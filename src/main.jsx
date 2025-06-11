import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

const Main = () => {
  const [textos, setTextos] = useState(null)

  useEffect(() => {
    // Obtener la ruta base actual desde la URL del navegador
    const currentPath = window.location.pathname
    const basePath = currentPath.substring(0, currentPath.lastIndexOf('/') + 1)
    
    fetch(`${basePath}textos.json`)
      .then((response) => response.json())
      .then((data) => setTextos(data))
      .catch((error) => console.error('Error loading textos.json:', error))
  }, [])

  if (!textos) {
    return <div />
  }

  // Usar la ruta base actual para el Router
  const basePath = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'))
  
  return (
    <Router basename={basePath}>
      <App textos={textos} />
    </Router>
  )
}

createRoot(document.getElementById('root')).render(<Main />)
