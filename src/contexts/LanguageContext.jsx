import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [textos, setTextos] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState('es'); // 'es' por defecto

  const changeLanguage = async (langCode) => {
    try {
      const basePath = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);
      const response = await fetch(`${basePath}${langCode}.json`);
      if (!response.ok) {
        throw new Error('Idioma no encontrado');
      }
      const data = await response.json();
      setTextos(data);
      setCurrentLanguage(langCode);
      // Opcional: Guardar el idioma seleccionado en localStorage
      localStorage.setItem('preferredLanguage', langCode);
    } catch (error) {
      console.error('Error al cambiar el idioma:', error);
    }
  };

  // Cargar el idioma guardado al inicio@@
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'es';
    changeLanguage(savedLanguage);
  }, []);

  return (
    <LanguageContext.Provider value={{ textos, currentLanguage, changeLanguage }}>
      {textos ? children : <div>Cargando...</div>}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe usarse dentro de un LanguageProvider');
  }
  return context;
};