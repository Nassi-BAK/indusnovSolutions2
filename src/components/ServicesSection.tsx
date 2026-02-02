import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import drontech from '../assets/services/drontech.png';
import aquascope from '../assets/services/aquascope.png';
import ecoscan from '../assets/services/ecoscan.png';
import predictech from '../assets/services/predictech.png';
import skillnov from '../assets/services/skillnov.png';
import smartflow from '../assets/services/smartflow.png';

const iconMap: Record<string, string> = {
  drontech,
  aquascope,
  ecoscan,
  predictech,
  skillnov,
  smartflow,
};

interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  objectives: string[];
  benefits: string[];
  features: string[];
  image: string;
}

const services: ServiceItem[] = [
  {
    id: 'drontech',
    title: 'DronTech',
    shortDesc: 'Inspection par drone.',
    fullDesc: 'DronTech fournit des inspections complètes par drone pour vos installations industrielles et bâtiments. Les drones capturent des images haute résolution et fournissent des rapports détaillés pour faciliter la maintenance et la sécurité.',
    objectives: ['Inspection rapide', 'Détection précoce des problèmes', 'Optimisation de la maintenance'],
    benefits: ['Gain de temps', 'Réduction des coûts', 'Sécurité renforcée'],
    features: ['Rapide', 'Précis', 'Sécurité améliorée'],
    image: drontech,
  },
  {
    id: 'aquascope',
    title: 'AquaScope',
    shortDesc: 'Inspection sous-marine.',
    fullDesc: 'AquaScope réalise des inspections sous-marines détaillées pour les infrastructures portuaires et installations aquatiques. Nos équipements permettent un contrôle précis même dans les zones difficiles d\'accès.',
    objectives: ['Surveillance sous-marine', 'Détection de fuites ou corrosion', 'Maintenance proactive'],
    benefits: ['Prévention des accidents', 'Optimisation des interventions', 'Rapports détaillés'],
    features: ['Haute résolution', 'Adapté aux profondeurs', 'Rapport détaillé'],
    image: aquascope,
  },
  {
    id: 'ecoscan',
    title: 'EcoScan',
    shortDesc: 'Audit énergétique.',
    fullDesc: 'EcoScan propose des audits énergétiques pour entreprises et bâtiments. Nous analysons vos consommations, identifions les pertes et recommandons des solutions d\'optimisation énergétique.',
    objectives: ['Réduction de consommation', 'Optimisation des installations', 'Amélioration de l\'efficacité'],
    benefits: ['Économies d\'énergie', 'Impact environnemental réduit', 'Rapport détaillé avec recommandations'],
    features: ['Économie d\'énergie', 'Analyse complète', 'Recommandations pratiques'],
    image: ecoscan,
  },
  {
    id: 'predictech',
    title: 'PredicTech',
    shortDesc: 'Maintenance prédictive.',
    fullDesc: 'PredicTech surveille vos machines et équipements industriels grâce à des capteurs intelligents et l\'IA pour prévenir toute panne ou défaillance. Les interventions sont planifiées avant tout incident.',
    objectives: ['Surveillance continue', 'Prévention des pannes', 'Optimisation du cycle de vie des machines'],
    benefits: ['Réduction des temps d\'arrêt', 'Efficacité accrue', 'Alertes automatiques'],
    features: ['Prévention des pannes', 'Optimisation des performances', 'Alertes automatiques'],
    image: predictech,
  },
  {
    id: 'skillnov',
    title: 'SkilNov',
    shortDesc: 'Formation technique.',
    fullDesc: 'SkilNov offre des formations techniques et certifications professionnelles pour vos employés. Nos programmes sont adaptés aux besoins spécifiques de chaque secteur industriel.',
    objectives: ['Formation pratique', 'Certification reconnue', 'Développement des compétences'],
    benefits: ['Employés qualifiés', 'Amélioration de la productivité', 'Montée en compétence rapide'],
    features: ['Formateurs experts', 'Cours pratiques', 'Certifications reconnues'],
    image: skillnov,
  },
  {
    id: 'smartflow',
    title: 'SmartFlow',
    shortDesc: 'Automatisation industrielle.',
    fullDesc: 'SmartFlow optimise vos processus industriels grâce à l\'automatisation intelligente. Nos solutions permettent de réduire les erreurs, améliorer la qualité et suivre les performances en temps réel.',
    objectives: ['Automatisation des processus', 'Contrôle qualité', 'Suivi en temps réel'],
    benefits: ['Efficacité accrue', 'Réduction des erreurs', 'Gain de temps'],
    features: ['Efficacité accrue', 'Réduction des erreurs', 'Suivi en temps réel'],
    image: smartflow,
  },
];

// Icônes SVG en ligne pour remplacer Heroicons
const Icons = {
  ArrowRight: () => (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  ),
  Check: () => (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
};

const ServicesSectionWithPopup = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <section id="services" className="bg-gradient-to-b from-white to-gray-50 py-20 lg:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nos <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Des solutions innovantes pour optimiser vos opérations industrielles
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              onHoverStart={() => setHoveredCard(service.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              
              <div className="relative h-full bg-white rounded-2xl border border-gray-100 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:border-orange-200">
                {/* Icon avec effet de halo */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                  <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-orange-50 to-white p-4 shadow-lg">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-100 to-orange-50" />
                    <img 
                      src={iconMap[service.id]} 
                      alt={service.title} 
                      className="relative h-16 w-16 object-contain transform transition-transform duration-300 group-hover:scale-110" 
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Feature preview */}
                <div className="mb-8">
                  {service.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 mb-2">
                      <Icons.Check />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <button
                    onClick={() => navigate(`/services/${service.id}`)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <span>Voir détails</span>
                    <Icons.ArrowRight />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section CTA en bas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Vous avez un projet spécifique ?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Nos experts sont disponibles pour discuter de vos besoins et vous proposer la solution adaptée
            </p>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
            >
              <span>Contactez-nous</span>
              <Icons.ArrowRight />
            </ScrollLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSectionWithPopup;