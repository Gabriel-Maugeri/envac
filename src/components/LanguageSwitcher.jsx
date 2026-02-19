import { useLanguage } from '../contexts/LanguageContext'
import { useNavigate, useLocation } from 'react-router-dom'

const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage } = useLanguage()
  const navigate = useNavigate()
  const location = useLocation()
  
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'sv', name: 'Svenska' },
    { code: 'fr', name: 'Français' },
    { code: 'ko', name: '한국어' },
  ];

  return (
    <div className="bg-white shadow-primary animate-blow-in-modal absolute top-[120%] w-[200%] left-[-50%] z-100 flex flex-col cursor-pointer items-center justify-center select-none">

      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => {
            changeLanguage(lang.code)
            if (location.pathname === '/sorting' && lang.code !== 'en' && lang.code !== 'sv') {
              navigate('/home')
            }
          }}
          className={`w-full py-1.5 flex items-center cursor-pointer justify-center text-[1.5rem]/7 font-medium transition-colors
            ${currentLanguage === lang.code 
              ? 'text-primary' 
              : 'text-black hover:bg-gray-200'}`}
          title={lang.name}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher