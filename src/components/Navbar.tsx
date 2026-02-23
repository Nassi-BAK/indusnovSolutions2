import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Menu, X, Globe, ChevronDown, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';
import { servicesData } from '../data/servicesData';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
    setIsLangDropdownOpen(false);
  };

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/#about', label: t('nav.about') },
    { to: '/#services', label: t('nav.services') },
    { to: '/#contact', label: t('nav.contact') },
  ];

  const languages = [
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
  ];

  const handleNavClick = (to: string) => {
    setIsMobileMenuOpen(false);
    if (to.includes('#')) {
      const id = to.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed start-0 top-0 z-50 w-full bg-white shadow-lg backdrop-blur-md transition-all duration-300"
    >
      <div className="section-container">
        <div className="flex h-20 items-center justify-between">
          {/* Logo only */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo Indusnov" className="h-14 w-14 object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              // Special handling for services link with dropdown
              if (link.label === t('nav.services')) {
                return (
                  <div
                    key={link.to}
                    className="relative"
                    ref={servicesRef}
                  >
                    {/* Clic sur le label = naviguer vers /services | Clic sur le chevron = ouvre le dropdown */}
                    <div className="flex items-center gap-1">
                      <Link
                        to="/services"
                        className="relative font-body text-sm font-medium uppercase tracking-wider text-gray-700 transition-colors hover:text-orange-500 pb-1"
                      >
                        {link.label}
                        <span className="absolute -bottom-0 start-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 hover:w-full" />
                      </Link>
                      <button
                        onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                        className="p-1 text-gray-700 hover:text-orange-500 transition-colors"
                      >
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                    </div>

                    {/* Services Dropdown */}
                    {isServicesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute start-0 top-full mt-3 min-w-[280px] overflow-hidden rounded-lg bg-white shadow-xl border border-gray-200 z-50"
                      >
                        {/* Liste des services */}
                        {servicesData.map((service) => (
                          <Link
                            key={service.id}
                            to={`/services/${service.id}`}
                            onClick={() => setIsServicesDropdownOpen(false)}
                            className="flex flex-col px-4 py-3 text-start transition-colors duration-200 hover:bg-orange-50 border-b border-gray-100 last:border-b-0"
                          >
                            <span className="font-medium text-gray-900 hover:text-orange-600">{service.title}</span>
                            <span className="text-xs text-gray-500">{service.subtitle}</span>
                          </Link>
                        ))}

                        {/* Lien "Voir tous les services" */}
                        <Link
                          to="/services"
                          onClick={() => setIsServicesDropdownOpen(false)}
                          className="flex items-center justify-between gap-2 px-4 py-3 bg-orange-500 text-white text-sm font-semibold transition-colors duration-200 hover:bg-orange-600 group"
                        >
                          <span>{t('nav.allServices') || 'Voir tous les services'}</span>
                          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </Link>
                      </motion.div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => handleNavClick(link.to)}
                  className="relative font-body text-sm font-medium uppercase tracking-wider text-gray-700 transition-colors hover:text-orange-500 pb-1"
                >
                  {link.label}
                  <span className="absolute -bottom-0 start-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 hover:w-full" />
                </Link>
              );
            })}

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-2 rounded-lg bg-orange-500/10 px-4 py-2 text-orange-600 font-medium transition-all duration-200 hover:bg-orange-500/20 hover:text-orange-700 border border-orange-200/50"
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm uppercase">{i18n.language}</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLangDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute end-0 top-full mt-3 min-w-[160px] overflow-hidden rounded-lg bg-white shadow-xl border border-gray-200"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`flex w-full items-center gap-3 px-4 py-3 text-start transition-colors duration-200 ${
                        i18n.language === lang.code ? 'bg-orange-50 text-orange-600 border-l-2 border-orange-500' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span className="text-sm font-medium">{lang.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200 lg:hidden"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-gray-200 lg:hidden"
          >
            <div className="flex flex-col gap-3 py-4">
              {navLinks.map((link) => {
                // Special handling for services link in mobile
                if (link.label === t('nav.services')) {
                  return (
                    <div key={link.to} className="flex flex-col">
                      <div className="flex items-center justify-between px-2 py-2">
                        {/* Clic sur le label = naviguer vers /services */}
                        <Link
                          to="/services"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="font-body text-sm font-medium uppercase tracking-wider text-gray-700 transition-colors hover:text-orange-500"
                        >
                          {link.label}
                        </Link>
                        {/* Chevron = toggle dropdown */}
                        <button
                          onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                          className="p-1 text-gray-700 hover:text-orange-500"
                        >
                          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                      </div>

                      {/* Mobile Services Dropdown */}
                      {isMobileServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex flex-col bg-orange-50/50 border-l-2 border-orange-500"
                        >
                          {servicesData.map((service) => (
                            <Link
                              key={service.id}
                              to={`/services/${service.id}`}
                              onClick={() => {
                                setIsMobileServicesOpen(false);
                                setIsMobileMenuOpen(false);
                              }}
                              className="flex flex-col px-4 py-2 text-start transition-colors duration-200 hover:text-orange-600 border-b border-orange-100 last:border-b-0"
                            >
                              <span className="text-sm font-medium text-gray-900">{service.title}</span>
                              <span className="text-xs text-gray-600">{service.subtitle}</span>
                            </Link>
                          ))}

                          {/* Lien "Voir tous les services" mobile */}
                          <Link
                            to="/services"
                            onClick={() => {
                              setIsMobileServicesOpen(false);
                              setIsMobileMenuOpen(false);
                            }}
                            className="flex items-center justify-between gap-2 px-4 py-3 bg-orange-500 text-white text-sm font-semibold transition-colors duration-200 hover:bg-orange-600 group"
                          >
                            <span>{t('nav.allServices') || 'Voir tous les services'}</span>
                            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                          </Link>
                        </motion.div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => handleNavClick(link.to)}
                    className="font-body text-sm font-medium uppercase tracking-wider text-gray-700 transition-colors hover:text-orange-500 px-2 py-2"
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="flex gap-2 pt-3 border-t border-gray-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      i18n.language === lang.code
                        ? 'bg-orange-500 text-white shadow-md'
                        : 'bg-orange-500/10 text-orange-600 hover:bg-orange-500/20'
                    }`}
                  >
                    {lang.flag} {lang.code.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;