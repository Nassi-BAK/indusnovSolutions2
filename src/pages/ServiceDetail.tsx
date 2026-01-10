import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Zap, Target, Lightbulb } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import { getServiceById, servicesData } from '@/data/servicesData';

const ServiceDetail = () => {
  const params = useParams<{ serviceId?: string }>();
  const serviceId = params.serviceId?.toLowerCase();

  if (!serviceId) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-4xl font-bold">Service not found</h1>
      </div>
    );
  }

  const service = getServiceById(serviceId);

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

  const otherServices = servicesData.filter((s) => s.id !== serviceId).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section Améliorée */}
      <section className="relative min-h-[500px] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Background avec image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${service.image})` }}
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-slate-900/95" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-orange-500/5 blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link
                  to="/#services"
                  className="mb-8 inline-flex items-center gap-2 text-orange-500/80 transition-colors hover:text-orange-400"
                >
                  <ArrowLeft className="h-5 w-5" />
                  <span className="font-heading text-sm uppercase tracking-wider">
                    Back to Services
                  </span>
                </Link>

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 80 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-8 h-1.5 bg-gradient-to-r from-orange-500 to-orange-400"
                />

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left side - Text */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white mb-4">
                      {service.title}
                    </h1>
                    <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-xl">
                      {service.subtitle}
                    </p>
                  </motion.div>

                  {/* Right side - Logo/Image */}
                  <motion.div
                    initial={{ opacity: 0, x: 30, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex justify-center lg:justify-end"
                  >
                    <div className="relative">
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-orange-400/30 rounded-full blur-2xl" />
                      
                      {/* Image container */}
                      <div className="relative bg-gradient-to-br from-white to-orange-50 rounded-2xl p-8 shadow-2xl border border-orange-200/50 w-72 h-72 flex items-center justify-center">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="h-48 w-48 object-contain drop-shadow-lg"
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
      <section className="py-20 lg:py-32">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid gap-16 lg:grid-cols-3">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-12"
            >
              {/* Description */}
              <div>
                <h2 className="mb-6 font-heading text-3xl font-bold text-foreground">
                  Description
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {service.fullDescription}
                </p>
              </div>

              {/* Objectives */}
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <Target className="h-8 w-8 text-primary" />
                  <h2 className="font-heading text-3xl font-bold text-foreground">
                    Objectifs
                  </h2>
                </div>
                <ul className="space-y-3">
                  {service.objectives.map((objective, index) => (
                    <motion.li
                      key={objective}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center gap-3 rounded-lg bg-muted p-4"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                        <Zap className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-foreground">{objective}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Key Advantages */}
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <Lightbulb className="h-8 w-8 text-primary" />
                  <h2 className="font-heading text-3xl font-bold text-foreground">
                    Avantages Clés
                  </h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {service.keyAdvantages.map((advantage, index) => (
                    <motion.div
                      key={advantage}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 p-6 border border-primary/20"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 mb-4">
                        <Check className="h-6 w-6 text-primary" />
                      </div>
                      <p className="font-medium text-foreground">{advantage}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Characteristics */}
              <div>
                <h2 className="mb-6 font-heading text-3xl font-bold text-foreground">
                  Caractéristiques
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {service.characteristics.map((characteristic, index) => (
                    <motion.div
                      key={characteristic}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4"
                    >
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                        <Check className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <span className="font-medium text-foreground">{characteristic}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="sticky top-28 rounded-2xl bg-primary/10 border border-primary/20 p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                  <Zap className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mb-6 font-heading text-xl font-bold text-foreground">
                  Prêt à commencer ?
                </h3>
                <p className="mb-6 text-muted-foreground">
                  Contactez-nous pour une consultation gratuite et découvrez comment {service.title} peut transformer votre entreprise.
                </p>
                <Link
                  to="/#contact"
                  className="btn-primary block w-full text-center"
                >
                  Demander un devis
                </Link>

                {/* Other Services */}
                {otherServices.length > 0 && (
                  <div className="mt-8 border-t border-primary/20 pt-8">
                    <h4 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-foreground">
                      Autres Services
                    </h4>
                    <ul className="space-y-3">
                      {otherServices.map((s) => (
                        <li key={s.id}>
                          <Link
                            to={`/services/${s.id}`}
                            className="text-muted-foreground transition-colors hover:text-primary"
                          >
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
