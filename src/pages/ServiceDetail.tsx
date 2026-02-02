import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Zap, Target, Lightbulb } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import { getServiceById, servicesData } from '@/data/servicesData';
import servicesEn from '@/i18n/services.en.json';
import servicesFr from '@/i18n/services.fr.json';

const ServiceDetail = () => {
  const params = useParams<{ serviceId?: string }>();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const serviceId = params.serviceId?.toLowerCase();

  // Handle quote button click - navigate to home and scroll to contact
  const handleQuoteClick = () => {
    navigate('/');
    setTimeout(() => {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Get service translations based on current language
  const getServiceTranslations = (id: string) => {
    const translations = i18n.language === 'fr' ? servicesFr : servicesEn;
    return translations[id as keyof typeof translations] || null;
  };

  if (!serviceId) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-4xl font-bold">Service not found</h1>
      </div>
    );
  }

  const service = getServiceById(serviceId);
  const serviceTranslations = getServiceTranslations(serviceId);

  if (!service) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">Service not found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return home
          </Link>
        </div>
      </div>
    );
  }

  // Use translated data if available, otherwise fall back to original data
  const displayData = serviceTranslations || service;
  const otherServices = servicesData.filter((s) => s.id !== serviceId).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section Améliorée */}
      <section className="relative min-h-[600px] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950">
        {/* Background avec image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${service.image})` }}
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/98 via-slate-800/95 to-slate-900/98" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-orange-500/15 blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link
                  to="/#services"
                  className="mb-8 inline-flex items-center gap-2 text-orange-400/90 transition-all hover:text-orange-300 hover:gap-3"
                >
                  <ArrowLeft className="h-5 w-5" />
                  <span className="font-medium text-sm uppercase tracking-wider">
                    Back to Services
                  </span>
                </Link>

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 120 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="mb-8 h-2 bg-gradient-to-r from-orange-500 via-orange-400 to-transparent rounded-full"
                />

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  {/* Left side - Text */}
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                  >
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-white mb-6 leading-tight">
                      {displayData.title}
                    </h1>
                    <p className="mt-8 text-2xl text-slate-200 leading-relaxed max-w-2xl font-light">
                      {displayData.subtitle}
                    </p>
                    
                    {/* Quick Stats */}
                    <div className="mt-12 flex gap-8">
                      <div className="border-l-2 border-orange-500 pl-4">
                        <div className="text-3xl font-bold text-orange-400">100%</div>
                        <p className="text-sm text-slate-400">Sécurité garantie</p>
                      </div>
                      <div className="border-l-2 border-orange-500 pl-4">
                        <div className="text-3xl font-bold text-orange-400">24h</div>
                        <p className="text-sm text-slate-400">Support disponible</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Right side - Logo/Image */}
                  <motion.div
                    initial={{ opacity: 0, x: 40, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="flex justify-center lg:justify-end"
                  >
                    <div className="relative group">
                      {/* Glow effect - animé */}
                      <div className="absolute -inset-6 bg-gradient-to-r from-orange-500/40 via-orange-400/20 to-transparent rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-300" />
                      <div className="absolute -inset-6 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Image container */}
                      <div className="relative bg-gradient-to-br from-white via-orange-50 to-orange-100 rounded-3xl p-12 shadow-2xl border border-orange-200/60 w-80 h-80 flex items-center justify-center overflow-hidden group-hover:shadow-3xl transition-shadow duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <img 
                          src={service.image} 
                          alt={displayData.title}
                          className="relative h-64 w-64 object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 lg:py-40 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid gap-20 lg:grid-cols-3">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-16"
            >
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="mb-8 text-4xl lg:text-5xl font-bold text-gray-900">
                  Description
                </h2>
                <p className="text-lg leading-relaxed text-gray-700 bg-gradient-to-br from-orange-50/50 to-transparent rounded-2xl p-8 border-l-4 border-orange-500">
                  {displayData.fullDescription}
                </p>
              </motion.div>

              {/* Objectives */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                    Objectifs
                  </h2>
                </div>
                <ul className="space-y-4 grid sm:grid-cols-2 gap-4">
                  {displayData.objectives.map((objective, index) => (
                    <motion.li
                      key={objective}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="group flex items-start gap-4 rounded-xl bg-gradient-to-br from-orange-50 to-white p-6 border border-orange-200/50 hover:shadow-lg hover:border-orange-300 transition-all duration-300"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 group-hover:scale-110 transition-transform duration-300">
                        <Zap className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-base font-medium text-gray-800 pt-1">{objective}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Key Advantages */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                    Avantages Clés
                  </h2>
                </div>
                <div className="grid gap-6 sm:grid-cols-3">
                  {displayData.keyAdvantages.map((advantage, index) => (
                    <motion.div
                      key={advantage}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="group relative rounded-2xl bg-gradient-to-br from-gradient-to-br from-orange-50 via-white to-blue-50 p-8 border border-orange-200/60 hover:shadow-xl hover:border-orange-400 transition-all duration-300 overflow-hidden"
                    >
                      <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-orange-500/5 group-hover:bg-orange-500/10 transition-colors duration-300" />
                      <div className="relative">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Check className="h-7 w-7 text-white" />
                        </div>
                        <p className="font-semibold text-gray-900 text-lg">{advantage}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Characteristics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="mb-8 text-4xl lg:text-5xl font-bold text-gray-900">
                  Caractéristiques
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {displayData.characteristics.map((characteristic, index) => (
                    <motion.div
                      key={characteristic}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="group flex items-center gap-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200/60 p-5 hover:shadow-lg hover:border-blue-400 transition-all duration-300"
                    >
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 group-hover:scale-110 transition-transform duration-300">
                        <Check className="h-5 w-5 text-white" />
                      </div>
                      <span className="font-medium text-gray-900">{characteristic}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="sticky top-28 rounded-2xl bg-gradient-to-br from-orange-50 via-white to-orange-50/50 border border-orange-200/60 p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600">
                  <Zap className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-8 text-3xl font-bold text-gray-900">
                  Prêt à commencer ?
                </h3>
                <p className="mb-8 text-gray-700 leading-relaxed">
                  Contactez-nous pour une consultation gratuite et découvrez comment <strong className="text-orange-600">{displayData.title}</strong> peut transformer votre entreprise.
                </p>
                <button
                  onClick={handleQuoteClick}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  <span>Demander un devis</span>
                  <ArrowLeft className="h-5 w-5 rotate-180" />
                </button>

                {/* Other Services */}
                {otherServices.length > 0 && (
                  <div className="mt-10 border-t border-orange-200 pt-10">
                    <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-gray-900">
                      Autres Services
                    </h4>
                    <ul className="space-y-3">
                      {otherServices.map((s) => (
                        <li key={s.id}>
                          <Link
                            to={`/services/${s.id}`}
                            className="group flex items-center gap-2 text-gray-700 transition-all hover:text-orange-600 hover:gap-3 font-medium"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default ServiceDetail;
