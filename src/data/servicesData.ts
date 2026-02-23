import drontech from '../assets/services/drontech.png';
import aquascope from '../assets/services/aquascope.png';
import ecoscan from '../assets/services/ecoscan.png';
import predictech from '../assets/services/predictech.png';
import skillnov from '../assets/services/skillnov.png';
import smartflow from '../assets/services/smartflow.png';

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  objectives: string[];
  keyAdvantages: string[];
  characteristics: string[];
  image: string;
}

export const servicesData: Service[] = [
  {
    id: 'drontech',
    title: 'DronTech',
    subtitle: 'Inspections aériennes avancées',
    description: 'Solutions d\'inspection par drone pour installations industrielles',
    fullDescription: 'DronTech fournit des inspections complètes par drone pour vos installations industrielles et bâtiments. Les drones capturent des images haute résolution et fournissent des rapports détaillés pour faciliter la maintenance et la sécurité.',
    objectives: [
      'Inspection rapide',
      'Détection précoce des problèmes',
      'Optimisation de la maintenance'
    ],
    keyAdvantages: [
      'Gain de temps',
      'Réduction des coûts',
      'Sécurité renforcée'
    ],
    characteristics: [
      'Rapide',
      'Précis',
      'Sécurité améliorée'
    ],
    image: drontech
  },
  {
    id: 'aquascope',
    title: 'AquaScope',
    subtitle: 'Inspections sous-marines',
    description: 'Solutions d\'inspection sous-marine avec ROV avancés',
    fullDescription: 'AquaScope offre des inspections sous-marines complètes pour ports, installations offshore et structures hydrauliques. Nos ROV capturent des images détaillées et fournissent des données analytiques pour la maintenance préventive.',
    objectives: [
      'Cartographie sous-marine',
      'Analyse de la qualité de l\'eau',
      'Inspection structurelle complète'
    ],
    keyAdvantages: [
      'Accès aux zones inaccessibles',
      'Données précises et détaillées',
      'Sécurité optimale'
    ],
    characteristics: [
      'Technologie ROV avancée',
      'Haute résolution',
      'Rapports détaillés'
    ],
    image: aquascope
  },
  {
    id: 'ecoscan',
    title: 'EcoScan',
    subtitle: 'Audit énergétique intelligent',
    description: 'Audits énergétiques complets avec thermographie et IoT',
    fullDescription: 'EcoScan réalise des audits énergétiques complets de vos installations. Détection de fuites thermiques, analyse de consommation énergétique et conformité ESG pour une industrie durable.',
    objectives: [
      'Analyse consommation énergétique',
      'Rapport d\'optimisation',
      'Conseils techniques spécialisés'
    ],
    keyAdvantages: [
      'Réduction consommation',
      'Conformité ESG',
      'Économies d\'énergie'
    ],
    characteristics: [
      'Thermographie infrarouge',
      'Capteurs IoT',
      'Analyse complète'
    ],
    image: ecoscan
  },
  {
    id: 'predictech',
    title: 'PredicTor',
    subtitle: 'Predictive Maintenance & Condition Monitoring',
    description: 'PredicTor improves equipment reliability through advanced condition monitoring and predictive maintenance solutions. By continuously analyzing machine behavior, we detect early anomalies and prevent failures before they disrupt production.',
    fullDescription: 'We deploy vibration monitoring, diagnostic analysis, and asset health evaluation aligned with Industry 4.0 maintenance methodologies. Data collected from equipment allows proactive maintenance planning and optimized intervention scheduling.',
    objectives: [
      'Anticipate equipment failures before breakdowns',
      'Improve reliability of rotating equipment',
      'Reduce maintenance costs and emergency interventions',
      'Extend asset lifecycle'
    ],
    keyAdvantages: [
      'Up to 40% reduction in unplanned downtime',
      '25–30% decrease in corrective maintenance costs',
      'Early detection of failures weeks before breakdown',
      '15–20% increase in equipment availability'
    ],
    characteristics: [
      'Vibration analysis & diagnostics',
      'Rotating equipment monitoring',
      'Predictive maintenance implementation',
      'Root cause failure analysis',
      'Asset health reporting'
    ],
    image: predictech
  },
  {
    id: 'skillnov',
    title: 'SkilNov',
    subtitle: 'Formation et innovation',
    description: 'Programmes de formation techniques et innovation industrielle',
    fullDescription: 'SkilNov propose des programmes de formation techniques innovants pour développer l\'expertise de vos équipes. Ateliers pratiques, cours en ligne et certifications professionnelles.',
    objectives: [
      'Développement compétences',
      'Transfert technologique',
      'Innovation opérationnelle'
    ],
    keyAdvantages: [
      'Expertise actualisée',
      'Certifications reconnues',
      'Accompagnement continu'
    ],
    characteristics: [
      'Contenu actualisé',
      'Formatrices experts',
      'Certification'
    ],
    image: skillnov
  },
  {
    id: 'smartflow',
    title: 'SmartFlow',
    subtitle: 'Automatisation industrielle',
    description: 'Solutions d\'automatisation et optimisation des processus',
    fullDescription: 'SmartFlow optimise vos processus industriels avec l\'automatisation intelligente. Gestion robotique, tableaux de bord temps réel et optimisation continue pour une performance maximale.',
    objectives: [
      'Optimisation des processus',
      'Gestion robotique intégrée',
      'Tableaux de bord temps réel'
    ],
    keyAdvantages: [
      'Productivité augmentée',
      'Coûts réduits',
      'Qualité améliorée'
    ],
    characteristics: [
      'Intégration robotique',
      'Dashboards en temps réel',
      'Automatisation intelligente'
    ],
    image: smartflow
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return servicesData.find(service => service.id === id);
};

export const getServiceByTitle = (title: string): Service | undefined => {
  return servicesData.find(service => service.title.toLowerCase() === title.toLowerCase());
};
