import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AboutUsSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const stats = [
    { value: '29+', label: t('aboutUs.section.stats.experience') },
    { value: '4.0', label: t('aboutUs.section.stats.industry') },
    { value: '100%', label: t('aboutUs.section.stats.results') },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* Left — visual accent */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex-shrink-0 relative w-full lg:w-64 flex flex-col gap-4"
          >
            {/* Stat boxes */}
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl px-6 py-5 flex items-center gap-4"
              >
                <span className="text-3xl font-bold text-orange-500">{stat.value}</span>
                <span className="text-sm text-gray-400 leading-snug">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Right — text */}
          <div className="flex-grow">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
              className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-3"
            >
              {t('aboutUs.section.badge')}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-5"
            >
              {t('aboutUs.section.title')} <br className="hidden sm:block" />
              {t('aboutUs.section.specializedIn')}{' '}
              <span className="text-orange-600">{t('aboutUs.section.titleHighlight')}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-gray-600 text-sm leading-relaxed mb-4"
            >
              {t('aboutUs.section.descriptionP1')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.28, duration: 0.6 }}
              className="text-gray-500 text-sm leading-relaxed mb-8"
            >
              {t('aboutUs.section.descriptionP2')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.36 }}
            >
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-orange-700 transition-colors duration-200 group"
              >
                {t('aboutUs.section.cta')}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
