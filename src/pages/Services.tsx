import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap } from 'lucide-react';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import { servicesData } from '@/data/servicesData';

/* ─── Floating Particle ─── */
const Particle = ({ delay, x, size }: { delay: number; x: string; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-orange-500/20 blur-sm"
    style={{ left: x, width: size, height: size, bottom: -20 }}
    animate={{ y: [-20, -500], opacity: [0, 0.8, 0] }}
    transition={{ duration: 6 + Math.random() * 4, delay, repeat: Infinity, ease: 'easeOut' }}
  />
);

/* ─── Service Card ─── */
const ServiceCard = ({ service, index, t }: { service: any; index: number; t: (key: string) => string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative flex flex-col h-full"
    >
      {/* Card shell */}
      <div className="relative flex flex-col h-full rounded-2xl overflow-hidden border border-gray-200/80 bg-white shadow-sm hover:shadow-2xl transition-shadow duration-500">

        {/* Shimmer border on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none z-10"
          style={{
            background: 'linear-gradient(135deg, rgba(234,88,12,0.4) 0%, transparent 50%, rgba(234,88,12,0.2) 100%)',
            padding: 1,
          }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Top image area */}
        <div className="relative h-52 bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden flex items-center justify-center p-8">
          {/* Animated grid behind image */}
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `linear-gradient(rgba(234,88,12,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(234,88,12,0.15) 1px, transparent 1px)`,
              backgroundSize: '24px 24px',
            }}
            animate={{ backgroundPosition: hovered ? ['0px 0px', '24px 24px'] : '0px 0px' }}
            transition={{ duration: 2, ease: 'linear', repeat: hovered ? Infinity : 0 }}
          />

          {/* Orange glow spot */}
          <motion.div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(circle at 50% 50%, rgba(234,88,12,0.12) 0%, transparent 70%)' }}
            animate={{ scale: hovered ? 1.3 : 1, opacity: hovered ? 1 : 0.5 }}
            transition={{ duration: 0.6 }}
          />

          <motion.img
            src={service.image}
            alt={service.title}
            className="relative z-10 h-36 w-auto object-contain"
            animate={{ scale: hovered ? 1.08 : 1, y: hovered ? -4 : 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Index badge */}
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-orange-600 text-white text-xs font-black flex items-center justify-center shadow-lg">
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-6">
          {/* Subtitle pill */}
          <div className="inline-flex items-center gap-1.5 mb-3 self-start">
            <Zap className="h-3 w-3 text-orange-500" />
            <span className="text-[10px] font-black text-orange-600 uppercase tracking-[0.18em]">
              {service.subtitle}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-black text-gray-900 mb-3 leading-tight group-hover:text-orange-600 transition-colors duration-300"
            style={{ fontFamily: "'Eurostile', sans-serif" }}>
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
            {service.description}
          </p>

          {/* Key Advantages */}
          <div className="border-t border-gray-100 pt-4 mb-5">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">{t('servicesPage.keyAdvantages')}</p>
            <ul className="space-y-2">
              {service.keyAdvantages.slice(0, 3).map((adv: string, i: number) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 + i * 0.06 + 0.3 }}
                >
                  <CheckCircle className="h-3.5 w-3.5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-600 leading-snug">{adv}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <Link
            to={`/services/${service.id}`}
            className="relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-orange-600 hover:bg-orange-700 transition-colors duration-200 group/btn"
          >
            {/* Animated shine */}
            <motion.span
              className="absolute inset-0 bg-white/20"
              initial={{ x: '-100%', skewX: -15 }}
              whileHover={{ x: '200%' }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative">{t('servicesPage.learnMore')}</span>
            <motion.span
              className="relative"
              animate={{ x: hovered ? 4 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Main Page ─── */
const Services = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const { t } = useTranslation();

  const particles = Array.from({ length: 14 }, (_, i) => ({
    delay: i * 0.5,
    x: `${(i / 14) * 100}%`,
    size: 4 + Math.random() * 10,
  }));

  return (
    <>
      {/* Import Eurostile font */}
      <style>{`
        @font-face {
          font-family: 'Eurostile';
          src: local('Eurostile'), local('Eurostile-Regular');
          font-weight: 400 900;
          font-display: swap;
        }
      `}</style>

      <div className="min-h-screen bg-gray-50">
        <Navbar />

        {/* ── Hero ── */}
        <section
          ref={heroRef}
          className="relative min-h-[420px] overflow-hidden flex items-center pt-28 pb-16"
          style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #0c1322 100%)' }}
        >
          {/* Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p, i) => <Particle key={i} {...p} />)}
          </div>

          {/* Ambient blobs */}
          <motion.div
            className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(234,88,12,0.18) 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.15, 1], rotate: [0, 45, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.2, 1], rotate: [0, -30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />

          {/* Horizontal scan line */}
          <motion.div
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"
            animate={{ top: ['10%', '90%', '10%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Content */}
          <motion.div
            className="relative z-10 section-container w-full"
            style={{ y: heroY, opacity: heroOpacity }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-orange-400 text-xs font-bold tracking-widest uppercase">{t('servicesPage.badge')}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none mb-5"
              style={{ fontFamily: "'Eurostile', sans-serif" }}
            >
              {t('servicesPage.heroTitle')}{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-orange-500">{t('servicesPage.heroTitleHighlight')}</span>
                <motion.span
                  className="absolute bottom-1 left-0 right-0 h-3 bg-orange-500/20 rounded"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  style={{ transformOrigin: 'left' }}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-gray-400 text-lg max-w-xl leading-relaxed"
            >
              {t('servicesPage.heroSubtitle')}
            </motion.p>

            {/* Animated counter strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-6 mt-8"
            >
              {[['12+', t('servicesPage.stats.services')], ['500+', t('servicesPage.stats.projects')], ['98%', t('servicesPage.stats.satisfaction')]].map(([n, l]) => (
                <div key={l} className="flex flex-col">
                  <span className="text-2xl font-black text-orange-500" style={{ fontFamily: "'Eurostile', sans-serif" }}>{n}</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">{l}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── Section header ── */}
        <div className="py-14 text-center bg-gray-50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-black text-orange-600 uppercase tracking-[0.25em] mb-3">{t('servicesPage.sectionLabel')}</p>
            <h2
              className="text-4xl font-black text-gray-900"
              style={{ fontFamily: "'Eurostile', sans-serif" }}
            >
              {t('servicesPage.sectionTitle')}
            </h2>
            <div className="w-16 h-1 bg-orange-500 rounded mx-auto mt-4" />
          </motion.div>
        </div>

        {/* ── Services Grid ── */}
        <section className="pb-20 bg-gray-50">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {servicesData.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} t={t} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA banner ── */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden py-16"
          style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)' }}
        >
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(234,88,12,0.6) 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }}
            animate={{ backgroundPosition: ['0px 0px', '30px 30px'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          />
          <div className="section-container relative z-10 text-center">
            <h2 className="text-3xl font-black text-white mb-4" style={{ fontFamily: "'Eurostile', sans-serif" }}>
              {t('servicesPage.ctaTitle')}
            </h2>
            <p className="text-gray-400 mb-8">{t('servicesPage.ctaSubtitle')}</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold px-8 py-3.5 rounded-xl transition-colors duration-200 text-sm"
            >
              {t('servicesPage.ctaButton')} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.section>

        <Chatbot />
        <Footer />
      </div>
    </>
  );
};

export default Services;