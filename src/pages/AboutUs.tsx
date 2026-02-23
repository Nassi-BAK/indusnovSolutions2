import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowLeft, Lightbulb, ShieldCheck, TrendingUp, Users, Target, Eye,
  CheckCircle,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

/* ─── Data ─── */
const getValues = (t: (key: string) => string) => [
  {
    icon: Lightbulb,
    title: t('aboutUs.page.values.innovation.title'),
    description: t('aboutUs.page.values.innovation.description'),
  },
  {
    icon: ShieldCheck,
    title: t('aboutUs.page.values.reliability.title'),
    description: t('aboutUs.page.values.reliability.description'),
  },
  {
    icon: ShieldCheck,
    title: t('aboutUs.page.values.safety.title'),
    description: t('aboutUs.page.values.safety.description'),
  },
  {
    icon: TrendingUp,
    title: t('aboutUs.page.values.performance.title'),
    description: t('aboutUs.page.values.performance.description'),
  },
  {
    icon: Users,
    title: t('aboutUs.page.values.collaboration.title'),
    description: t('aboutUs.page.values.collaboration.description'),
  },
];

const getCeoHighlights = (t: (key: string, options?: { returnObjects: boolean }) => string[]) => 
  t('aboutUs.page.ceoHighlights', { returnObjects: true }) as string[];

/* ─── Types ─── */
type ValueType = {
  icon: typeof Lightbulb;
  title: string;
  description: string;
};

/* ─── Reusable animated section header ─── */
const SectionHeader = ({ label, title }: { label: string; title: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="mb-12"
  >
    <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-2">{label}</p>
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">{title}</h2>
    <div className="w-12 h-1 bg-orange-600 rounded mt-4" />
  </motion.div>
);

/* ─── Value Card ─── */
const ValueCard = ({ value, index }: { value: ValueType; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = value.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
      className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col gap-4"
    >
      <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
        <Icon className="h-5 w-5 text-orange-600" />
      </div>
      <h3 className="text-lg font-bold text-gray-900">{value.title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
    </motion.div>
  );
};

/* ─── Page ─── */
const AboutUs = () => {
  const { t } = useTranslation();
  const values = getValues(t);
  const ceoHighlights = getCeoHighlights(t as (key: string, options?: { returnObjects: boolean }) => string[]);
  
  const stats = [
    { value: '29+', label: t('aboutUs.page.stats.experience') },
    { value: '4.0', label: t('aboutUs.page.stats.industry') },
    { value: '100%', label: t('aboutUs.page.stats.results') },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero — identical style to Services ── */}
      <section className="relative min-h-[350px] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/98 via-slate-800/95 to-slate-900/98" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-orange-500/15 blur-3xl animate-pulse" />
          <div
            className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          />
        </div>

        <div className="relative z-10 section-container">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-400 text-sm font-medium transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> {t('aboutUs.page.backToHome')}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="mb-4 text-4xl sm:text-5xl font-bold text-white leading-tight">
              {t('aboutUs.page.heroTitle')}
            </h1>
            <p className="text-lg text-gray-300">
              {t('aboutUs.page.heroSubtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="py-16 bg-white">
        <div className="section-container max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Stat column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0 flex flex-col gap-4 w-full lg:w-56"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl px-5 py-4 flex items-center gap-4"
                >
                  <span className="text-2xl font-bold text-orange-500">{s.value}</span>
                  <span className="text-xs text-gray-400 leading-snug">{s.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Text */}
            <div className="flex-grow">
              <SectionHeader label={t('aboutUs.page.whoWeAreLabel')} title={t('aboutUs.page.whoWeAreTitle')} />
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-4 text-gray-600 text-sm leading-relaxed"
              >
                <p>{t('aboutUs.page.whoWeAreP1')}</p>
                <p>{t('aboutUs.page.whoWeAreP2')}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      {/* ── Mission & Vision ── */}
      <section className="py-16 bg-gray-50">
        <div className="section-container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center mb-5">
                <Target className="h-5 w-5 text-orange-600" />
              </div>
              <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-2">{t('aboutUs.page.missionLabel')}</p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('aboutUs.page.missionTitle')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('aboutUs.page.missionP1')}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mt-3">
                {t('aboutUs.page.missionP2')}
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center mb-5">
                <Eye className="h-5 w-5 text-orange-400" />
              </div>
              <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2">{t('aboutUs.page.visionLabel')}</p>
              <h3 className="text-xl font-bold text-white mb-4">{t('aboutUs.page.visionTitle')}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t('aboutUs.page.visionP1')}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mt-3">
                {t('aboutUs.page.visionP2')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <SectionHeader label={t('aboutUs.page.valuesLabel')} title={t('aboutUs.page.valuesTitle')} />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          >
            {values.map((v, i) => (
              <ValueCard key={v.title} value={v} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CEO ── */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-500/8 blur-3xl" />

        <div className="section-container max-w-5xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* CEO avatar placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 flex items-center justify-center shadow-xl">
                <span className="text-5xl font-bold text-orange-500">ST</span>
              </div>
              <div className="mt-4 text-center">
                <p className="text-white font-bold text-base">{t('aboutUs.page.ceoName')}</p>
                <p className="text-orange-500 text-xs font-semibold uppercase tracking-wider mt-0.5">{t('aboutUs.page.ceoRole')}</p>
              </div>
            </motion.div>

            {/* CEO text */}
            <div className="flex-grow">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2">{t('aboutUs.page.leadershipLabel')}</p>
                <h2 className="text-3xl font-bold text-white mb-1 leading-tight">{t('aboutUs.page.leadershipTitle')}</h2>
                <div className="w-12 h-1 bg-orange-600 rounded mb-6" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="text-gray-400 text-sm leading-relaxed mb-5"
              >
                {t('aboutUs.page.ceoP1')}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.22 }}
                className="text-gray-500 text-sm leading-relaxed mb-6"
              >
                {t('aboutUs.page.ceoP2')}
              </motion.p>

              {/* Highlights */}
              <ul className="space-y-2">
                {ceoHighlights.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('aboutUs.page.ctaTitle')}</h2>
            <p className="text-gray-500 text-sm mb-8">{t('aboutUs.page.ctaSubtitle')}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-orange-700 transition-colors duration-200"
              >
                {t('aboutUs.page.ctaServices')}
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-2.5 rounded-lg font-semibold text-sm hover:border-orange-600 hover:text-orange-600 transition-colors duration-200"
              >
                {t('aboutUs.page.ctaContact')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Chatbot />
      <Footer />
    </div>
  );
};

export default AboutUs;
