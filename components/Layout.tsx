import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Sun, Moon, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { Language } from '../types';

export const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, setLanguage, language } = useLanguage();
  const { isDarkMode, toggleTheme } = useTheme();
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsLangOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: t('nav_home'), path: '/' },
    { name: t('nav_about'), path: '/about' },
    { name: t('nav_services'), path: '/services' },
    { name: t('nav_projects'), path: '/projects' },
    { name: t('nav_contact'), path: '/contact' },
  ];

  const changeLang = (lang: Language) => {
    setLanguage(lang);
    setIsLangOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white dark:bg-black shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 z-50">
            <div className={`font-heading font-bold text-2xl tracking-tighter ${isScrolled ? 'text-primary dark:text-white' : 'text-white'}`}>
              TEAM <span className="text-secondary">2023</span>
            </div>
          </Link>

          <div className="flex items-center gap-6">
             <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-bold uppercase tracking-wide transition-colors hover:text-secondary ${
                    isScrolled ? 'text-dark dark:text-gray-200' : 'text-white'
                  } ${location.pathname === link.path ? 'text-secondary' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            
            {/* Controls */}
            <div className="hidden md:flex items-center gap-4">
              {/* Language */}
              <div className="relative">
                 <button 
                   onClick={() => setIsLangOpen(!isLangOpen)}
                   className={`flex items-center gap-1 font-bold text-sm uppercase ${isScrolled ? 'text-dark dark:text-white' : 'text-white'}`}
                 >
                   <Globe size={16} /> {language}
                 </button>
                 <AnimatePresence>
                   {isLangOpen && (
                     <motion.div 
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       exit={{ opacity: 0, y: 10 }}
                       className="absolute right-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 w-24"
                     >
                       {['en', 'ru', 'geo'].map((l) => (
                         <button
                           key={l}
                           onClick={() => changeLang(l as Language)}
                           className={`block w-full text-left px-4 py-2 text-sm uppercase hover:bg-gray-100 dark:hover:bg-gray-700 ${language === l ? 'text-secondary font-bold' : 'text-dark dark:text-gray-300'}`}
                         >
                           {l}
                         </button>
                       ))}
                     </motion.div>
                   )}
                 </AnimatePresence>
              </div>

              {/* Theme */}
              <button onClick={toggleTheme} className={`${isScrolled ? 'text-dark dark:text-white' : 'text-white'}`}>
                 {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            <button
              className="md:hidden z-50 text-secondary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} color={isScrolled ? (isDarkMode ? '#FFFFFF' : '#6D28D9') : '#FFFFFF'} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "tween" }}
              className="fixed inset-0 bg-primary dark:bg-black z-40 flex flex-col items-center justify-center"
            >
              <nav className="flex flex-col gap-8 text-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-2xl font-bold text-white uppercase hover:text-secondary"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex items-center justify-center gap-6 mt-4">
                   {['en', 'ru', 'geo'].map((l) => (
                      <button 
                        key={l} 
                        onClick={() => changeLang(l as Language)}
                        className={`text-lg font-bold uppercase ${language === l ? 'text-secondary' : 'text-white'}`}
                      >
                        {l}
                      </button>
                   ))}
                </div>
                <button onClick={toggleTheme} className="text-white mt-4 flex items-center justify-center gap-2">
                  {isDarkMode ? <><Sun size={24} /> Light Mode</> : <><Moon size={24} /> Dark Mode</>}
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-black text-white pt-16 pb-8 transition-colors">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-heading font-bold text-2xl mb-6">TEAM <span className="text-secondary">2023</span></h3>
              <p className="text-gray-400 mb-6">
                {t('hero_desc')}
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-white hover:text-secondary transition-colors"><Facebook size={20} /></a>
                <a href="#" className="text-white hover:text-secondary transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-white hover:text-secondary transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-white hover:text-secondary transition-colors"><Linkedin size={20} /></a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-primary">{t('footer_quick')}</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/about" className="hover:text-secondary transition-colors">{t('nav_about')}</Link></li>
                <li><Link to="/services" className="hover:text-secondary transition-colors">{t('nav_services')}</Link></li>
                <li><Link to="/projects" className="hover:text-secondary transition-colors">{t('nav_projects')}</Link></li>
                <li><Link to="/contact" className="hover:text-secondary transition-colors">{t('nav_contact')}</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-primary">{t('footer_services')}</h4>
              <ul className="space-y-3 text-gray-400">
                <li>Construction Management</li>
                <li>Design & Build</li>
                <li>General Contracting</li>
                <li>Pre-construction</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-primary">{t('footer_contact')}</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <MapPin className="text-secondary shrink-0" size={20} />
                  <span>123 Construction Blvd, Innovation City, ST 12345</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-secondary shrink-0" size={20} />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-secondary shrink-0" size={20} />
                  <span>info@team2023.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} TEAM 2023 Construction. {t('footer_rights')}
          </div>
        </div>
      </footer>
    </div>
  );
};