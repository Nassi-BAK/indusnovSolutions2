import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Wifi, Activity, BarChart3, ArrowRight, Cpu } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TechnologyPartnershipsSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const partners = [
    { name: t('technologyPartnerships.partners.synox.name'), role: t('technologyPartnerships.partners.synox.role'), icon: Wifi, color: '#f97316' },
    { name: t('technologyPartnerships.partners.erbessd.name'), role: t('technologyPartnerships.partners.erbessd.role'), icon: Activity, color: '#3b82f6' },
    { name: t('technologyPartnerships.partners.aveva.name'), role: t('technologyPartnerships.partners.aveva.role'), icon: BarChart3, color: '#22c55e' },
  ];

  return (
    <>
      <style>{`
        @font-face {
          font-family: 'Eurostile';
          src: local('Eurostile'), local('Eurostile-Regular');
          font-weight: 400 900;
          font-display: swap;
        }
      `}</style>

      <section
        ref={ref}
        className="relative py-24 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0c1322 0%, #1a2540 60%, #0f172a 100%)' }}
      >
        {/* Circuit grid bg */}
        <motion.div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(rgba(249,115,22,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.8) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
          animate={{ backgroundPosition: ['0px 0px', '50px 50px'] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        />

        {/* Orange radial glow */}
        <div
          className="absolute right-0 top-0 w-[500px] h-[500px] opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 80% 20%, #f97316, transparent 70%)' }}
        />

        <div className="section-container relative z-10">
          <div className="flex flex-col lg:flex-row gap-14 items-center">

            {/* Left — text */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10"
              >
                <Cpu className="w-3 h-3 text-orange-400" />
                <span className="text-orange-400 text-xs font-bold tracking-widest uppercase">{t('technologyPartnerships.badge')}</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5"
                style={{ fontFamily: "'Eurostile', sans-serif" }}
              >
                {t('technologyPartnerships.title')}{' '}
                <span className="text-orange-500">{t('technologyPartnerships.titleHighlight')}</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="text-gray-400 text-sm leading-relaxed mb-8 max-w-lg"
              >
                {t('technologyPartnerships.description')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <Link
                  to="/technology-partnerships"
                  className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold px-7 py-3.5 rounded-xl transition-colors text-sm group"
                >
                  {t('technologyPartnerships.cta')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* Right — partner cards */}
            <div className="flex-1 flex flex-col gap-4 w-full">
              {partners.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.name}
                    initial={{ opacity: 0, x: 40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-2xl px-6 py-5 hover:bg-white/8 hover:border-white/20 transition-all duration-300 group cursor-pointer"
                  >
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${p.color}20`, border: `1.5px solid ${p.color}40` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: p.color }} />
                    </div>

                    {/* Text */}
                    <div className="flex-grow">
                      <p className="text-white font-black text-base" style={{ fontFamily: "'Eurostile', sans-serif" }}>
                        {p.name}
                      </p>
                      <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold">{p.role} Layer</p>
                    </div>

                    {/* Right accent */}
                    <div
                      className="w-1.5 h-8 rounded-full flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity"
                      style={{ background: p.color }}
                    />
                  </motion.div>
                );
              })}

              {/* Stack label */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-2 px-4 pt-2"
              >
                <div className="flex-grow h-px bg-white/10" />
                <span className="text-gray-500 text-xs uppercase tracking-widest">{t('technologyPartnerships.stackLabel')}</span>
                <div className="flex-grow h-px bg-white/10" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnologyPartnershipsSection;
