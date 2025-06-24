import { useLanguage } from '../contexts/LanguageContext'

const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage } = useLanguage()
  
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'sv', name: 'Svenska' },
    { code: 'fr', name: 'Français' },
    { code: 'it', name: 'Italiano' },
    { code: 'ko', name: '한국어' },
  ];

  return (
    <div className="bg-white shadow-primary animate-blow-in-modal absolute top-[120%] w-[200%] left-[-50%] z-100 flex flex-col cursor-pointer items-center justify-center select-none">

      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
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