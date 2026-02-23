import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowLeft, Wifi, Activity, BarChart3, Cpu, CheckCircle, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/* ─── Data ─── */
const getPartners = (t: (key: string) => string) => [
  {
    id: 'synox',
    name: t('technologyPartnerships.partners.synox.name'),
    tagline: t('technologyPartnerships.partners.synox.tagline'),
    color: '#f97316',
    icon: Wifi,
    layer: t('technologyPartnerships.partners.synox.layer'),
    description: t('technologyPartnerships.partners.synox.description'),
    details: t('technologyPartnerships.partners.synox.details'),
    benefit: t('technologyPartnerships.partners.synox.benefit'),
  },
  {
    id: 'erbessd',
    name: t('technologyPartnerships.partners.erbessd.name'),
    tagline: t('technologyPartnerships.partners.erbessd.tagline'),
    color: '#3b82f6',
    icon: Activity,
    layer: t('technologyPartnerships.partners.erbessd.layer'),
    description: t('technologyPartnerships.partners.erbessd.description'),
    details: t('technologyPartnerships.partners.erbessd.details'),
    benefit: t('technologyPartnerships.partners.erbessd.benefit'),
  },
  {
    id: 'aveva',
    name: t('technologyPartnerships.partners.aveva.name'),
    tagline: t('technologyPartnerships.partners.aveva.tagline'),
    color: '#22c55e',
    icon: BarChart3,
    layer: t('technologyPartnerships.partners.aveva.layer'),
    description: t('technologyPartnerships.partners.aveva.description'),
    details: t('technologyPartnerships.partners.aveva.details'),
    benefit: t('technologyPartnerships.partners.aveva.benefit'),
  },
];

const getStack = (t: (key: string) => string) => [
  {
    step: '01',
    label: t('technologyPartnerships.page.stack.connectivity.label'),
    sub: t('technologyPartnerships.page.stack.connectivity.sub'),
    description: t('technologyPartnerships.page.stack.connectivity.description'),
    powered: t('technologyPartnerships.page.stack.connectivity.powered'),
    color: '#f97316',
  },
  {
    step: '02',
    label: t('technologyPartnerships.page.stack.diagnostics.label'),
    sub: t('technologyPartnerships.page.stack.diagnostics.sub'),
    description: t('technologyPartnerships.page.stack.diagnostics.description'),
    powered: t('technologyPartnerships.page.stack.diagnostics.powered'),
    color: '#3b82f6',
  },
  {
    step: '03',
    label: t('technologyPartnerships.page.stack.intelligence.label'),
    sub: t('technologyPartnerships.page.stack.intelligence.sub'),
    description: t('technologyPartnerships.page.stack.intelligence.description'),
    powered: t('technologyPartnerships.page.stack.intelligence.powered'),
    color: '#22c55e',
  },
  {
    step: '04',
    label: t('technologyPartnerships.page.stack.decision.label'),
    sub: t('technologyPartnerships.page.stack.decision.sub'),
    description: t('technologyPartnerships.page.stack.decision.description'),
    powered: t('technologyPartnerships.page.stack.decision.powered'),
    color: '#f97316',
  },
];

const getBenefits = (t: (key: string, options?: { returnObjects: boolean }) => string[]) => 
  t('technologyPartnerships.page.benefits', { returnObjects: true }) as string[];

/* ─── Types ─── */
type Partner = {
  id: string;
  name: string;
  tagline: string;
  color: string;
  icon: typeof Wifi;
  layer: string;
  description: string;
  details: string;
  benefit: string;
};

type StackItem = {
  step: string;
  label: string;
  sub: string;
  description: string;
  powered: string;
  color: string;
};

/* ─── Partner Card ─── */
const PartnerCard = ({ partner, index, totalPartners }: { partner: Partner; index: number; totalPartners: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = partner.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col lg:flex-row gap-8 items-start ${!isEven ? 'lg:flex-row-reverse' : ''}`}
    >
      {/* Icon block */}
      <div className="flex-shrink-0 relative">
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
          style={{ background: `${partner.color}20`, border: `1.5px solid ${partner.color}40` }}
        >
          <Icon className="w-9 h-9" style={{ color: partner.color }} />
        </div>
        {/* Connector line — only show between cards */}
        {index < totalPartners - 1 && (
          <div
            className="absolute left-1/2 top-full w-px h-16 lg:hidden"
            style={{ background: `linear-gradient(${partner.color}, transparent)`, transform: 'translateX(-50%)' }}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-grow border border-gray-200 rounded-2xl p-7 bg-white hover:shadow-xl transition-shadow duration-400 group">
        <div className="flex items-center gap-3 mb-2">
          <span
            className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full"
            style={{ background: `${partner.color}15`, color: partner.color }}
          >
            {partner.layer}
          </span>
        </div>
        <h3
          className="text-2xl font-black text-gray-900 mb-1 group-hover:text-orange-600 transition-colors"
          style={{ fontFamily: "'Eurostile', sans-serif" }}
        >
          {partner.name}
        </h3>
        <p className="text-sm font-semibold text-gray-500 mb-4">{partner.tagline}</p>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{partner.description}</p>
        <p className="text-gray-500 text-sm leading-relaxed mb-5">{partner.details}</p>
        <div
          className="flex items-start gap-2 p-3 rounded-xl text-sm font-medium"
          style={{ background: `${partner.color}10`, color: partner.color }}
        >
          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
          {partner.benefit}
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Stack Step ─── */
const StackStep = ({ step, index, totalSteps }: { step: StackItem; index: number; totalSteps: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.6 }}
      className="relative flex flex-col"
    >
      {/* Step number */}
      <div
        className="text-5xl font-black mb-3 leading-none"
        style={{ fontFamily: "'Eurostile', sans-serif", color: `${step.color}30` }}
      >
        {step.step}
      </div>
      {/* Top bar accent */}
      <div className="w-10 h-1 rounded-full mb-4" style={{ background: step.color }} />
      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{step.label}</p>
      <h4 className="text-base font-black text-gray-900 mb-2" style={{ fontFamily: "'Eurostile', sans-serif" }}>
        {step.sub}
      </h4>
      <p className="text-sm text-gray-500 leading-relaxed mb-3 flex-grow">{step.description}</p>
      <div
        className="text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-lg self-start"
        style={{ background: `${step.color}15`, color: step.color }}
      >
        Powered by {step.powered}
      </div>

      {/* Arrow between steps (desktop) */}
      {index < totalSteps - 1 && (
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10h12M12 6l4 4-4 4" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
    </motion.div>
  );
};

/* ─── Main Page ─── */
const TechnologyPartnerships = () => {
  const { t } = useTranslation();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  
  const partners = getPartners(t);
  const stack = getStack(t);
  const benefits = getBenefits(t as (key: string, options?: { returnObjects: boolean }) => string[]);

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

      <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <Navbar />

        {/* ── Hero ── */}
        <section
          ref={heroRef}
          className="relative overflow-hidden min-h-[460px] flex items-center pt-28 pb-16"
          style={{ background: 'linear-gradient(135deg, #0c1322 0%, #1a2540 50%, #0f172a 100%)' }}
        >
          {/* Animated circuit board pattern */}
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(249,115,22,0.6) 1px, transparent 1px),
                linear-gradient(90deg, rgba(249,115,22,0.6) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
            animate={{ backgroundPosition: ['0px 0px', '60px 60px'] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          />

          {/* Radial glow */}
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(249,115,22,0.12) 0%, transparent 60%)' }}
          />

          {/* Floating partner tags */}
          {['Synox', 'Erbessd', 'AVEVA'].map((name, i) => (
            <motion.div
              key={name}
              className="absolute text-xs font-black uppercase tracking-widest text-orange-500/30 select-none pointer-events-none"
              style={{ right: `${10 + i * 18}%`, top: `${20 + i * 25}%` }}
              animate={{ y: [0, -12, 0], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4 + i, repeat: Infinity, delay: i * 1.5 }}
            >
              {name}
            </motion.div>
          ))}

          {/* Back link */}
          <motion.div
            className="relative z-10 w-full section-container"
            style={{ y: heroY }}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-400 text-sm font-medium mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> {t('technologyPartnerships.page.backToServices')}
            </Link>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10"
            >
              <Cpu className="w-3 h-3 text-orange-400" />
              <span className="text-orange-400 text-xs font-bold tracking-widest uppercase">{t('technologyPartnerships.page.badge')}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl font-black text-white leading-none mb-5 max-w-3xl"
              style={{ fontFamily: "'Eurostile', sans-serif" }}
            >
              {t('technologyPartnerships.page.heroTitle')}{' '}
              <span className="text-orange-500">{t('technologyPartnerships.page.heroTitleHighlight')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-gray-400 text-base leading-relaxed max-w-2xl"
            >
              {t('technologyPartnerships.page.heroSubtitle')}
            </motion.p>
          </motion.div>
        </section>

        {/* ── Intro ── */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="section-container max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                {t('technologyPartnerships.page.introP1')}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {t('technologyPartnerships.page.introP2')}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t('technologyPartnerships.page.introP3')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Partners ── */}
        <section className="py-20 bg-gray-50">
          <div className="section-container max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-14"
            >
              <p className="text-xs font-black text-orange-600 uppercase tracking-[0.25em] mb-2">{t('technologyPartnerships.page.collaboratorsLabel')}</p>
              <h2 className="text-4xl font-black text-gray-900" style={{ fontFamily: "'Eurostile', sans-serif" }}>
                {t('technologyPartnerships.page.collaboratorsTitle')}
              </h2>
              <div className="w-14 h-1 bg-orange-500 rounded mt-4" />
            </motion.div>

            <div className="space-y-12">
              {partners.map((p, i) => (
                <PartnerCard key={p.id} partner={p} index={i} totalPartners={partners.length} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Tech Stack ── */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <p className="text-xs font-black text-orange-600 uppercase tracking-[0.25em] mb-2">{t('technologyPartnerships.page.architectureLabel')}</p>
              <h2 className="text-4xl font-black text-gray-900" style={{ fontFamily: "'Eurostile', sans-serif" }}>
                {t('technologyPartnerships.page.architectureTitle')}
              </h2>
              <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
                {t('technologyPartnerships.page.architectureSubtitle')}
              </p>
              <div className="w-14 h-1 bg-orange-500 rounded mt-4 mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {stack.map((s, i) => (
                <StackStep key={s.step} step={s} index={i} totalSteps={stack.length} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Why it matters ── */}
        <section
          className="py-20 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0c1322, #1a2540)' }}
        >
          {/* dot grid */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(249,115,22,0.8) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />

          <div className="section-container relative z-10 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <p className="text-xs font-black text-orange-500 uppercase tracking-[0.25em] mb-2">{t('technologyPartnerships.page.valueLabel')}</p>
              <h2 className="text-4xl font-black text-white" style={{ fontFamily: "'Eurostile', sans-serif" }}>
                {t('technologyPartnerships.page.valueTitle')}
              </h2>
              <div className="w-14 h-1 bg-orange-500 rounded mt-4" />
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4"
                >
                  <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">{b}</span>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm leading-relaxed"
            >
              {t('technologyPartnerships.page.valueDescription')}
            </motion.p>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-14 bg-orange-600">
          <div className="section-container text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-white mb-4" style={{ fontFamily: "'Eurostile', sans-serif" }}>
                {t('technologyPartnerships.page.ctaTitle')}
              </h2>
              <p className="text-orange-100 text-sm mb-7">
                {t('technologyPartnerships.page.ctaSubtitle')}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-orange-600 hover:bg-orange-50 font-black px-8 py-3.5 rounded-xl transition-colors text-sm"
              >
                {t('technologyPartnerships.page.ctaButton')} <ExternalLink className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default TechnologyPartnerships;
