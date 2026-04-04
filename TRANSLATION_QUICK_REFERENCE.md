# Quick Reference: Missing Translation Keys

## Immediate Actions Required

### 🔴 CRITICAL - Fix These First

#### 1. PredictiveMaintenanceSection.tsx
```
Add to en.json:
{
  "predictiveMaintenanceSection": {
    "title": "Predictive Maintenance & Industry 4.0",
    "descriptionP1": "At Indusnov Solutions, predictive maintenance is at the core of everything we do. We combine advanced condition monitoring, industrial IoT, intelligent inspections, and data-driven engineering to help industries anticipate failures before they occur.",
    "descriptionP2": "By integrating multiple Industry 4.0 technologies into a unified approach, we enable continuous asset monitoring, improved reliability, and safer, more efficient operations, transforming maintenance from reactive intervention into strategic performance management.",
    "cta": "Explore Our Solutions",
    "features": {
      "conditionMonitoring": "Advanced Condition Monitoring",
      "iotIntegration": "Industrial IoT Integration",
      "intelligentInspections": "Intelligent Inspections",
      "dataEngineering": "Data-Driven Engineering",
      "assetMonitoring": "Continuous Asset Monitoring",
      "performanceManagement": "Strategic Performance Management"
    }
  }
}

Add to fr.json:
{
  "predictiveMaintenanceSection": {
    "title": "Maintenance Prédictive et Industrie 4.0",
    "descriptionP1": "Chez Indusnov Solutions, la maintenance prédictive est au cœur de tout ce que nous faisons. Nous combinons la surveillance avancée des conditions, l'IoT industriel, les inspections intelligentes et l'ingénierie axée sur les données pour aider les industries à anticiper les défaillances avant qu'elles ne se produisent.",
    "descriptionP2": "En intégrant plusieurs technologies de l'Industrie 4.0 dans une approche unifiée, nous permettons une surveillance continue des actifs, une fiabilité améliorée et des opérations plus sûres et plus efficaces, transformant la maintenance d'une intervention réactive en gestion stratégique de la performance.",
    "cta": "Explorer Nos Solutions",
    "features": {
      "conditionMonitoring": "Surveillance Avancée des Conditions",
      "iotIntegration": "Intégration IoT Industrielle",
      "intelligentInspections": "Inspections Intelligentes",
      "dataEngineering": "Ingénierie Axée sur les Données",
      "assetMonitoring": "Surveillance Continue des Actifs",
      "performanceManagement": "Gestion Stratégique des Performances"
    }
  }
}
```

#### 2. Chatbot.tsx
```
Add to en.json (chatbot section):
{
  "chatbot": {
    "greeting": "Hello! I'm Indusnov's chatbot. How can I help?",
    "defaultResponse": "Sorry, I didn't understand. You can ask me about our services or your project.",
    "services": {
      "drontech": {
        "title": "DronTech",
        "definition": "Aerial inspection by drones for your industrial facilities",
        "shortDesc": "Drone inspection",
        "fullDesc": "DronTech provides comprehensive drone inspections for your industrial facilities and buildings. Drones capture high-resolution images and provide detailed reports to facilitate maintenance and safety.",
        "objectives": ["Fast inspection", "Early problem detection", "Maintenance optimization"],
        "benefits": ["Time savings", "Cost reduction", "Enhanced safety"],
        "features": ["Fast", "Accurate", "Improved safety"]
      },
      "aquascope": { ... },
      "ecoscan": { ... },
      "predictech": { ... },
      "skillnov": { ... },
      "smartflow": { ... }
    }
  }
}
```

#### 3. ServiceDetail.tsx
```
Add to en.json:
{
  "serviceDetail": {
    "notFound": "Service not found",
    "returnHome": "Return home",
    "backToServices": "Back to Services",
    "quote": "Request a Quote"
  }
}

Add to fr.json:
{
  "serviceDetail": {
    "notFound": "Service non trouvé",
    "returnHome": "Retour à l'accueil",
    "backToServices": "Retour aux Services",
    "quote": "Demander un devis"
  }
}
```

---

### 🟠 MEDIUM - Fix After Critical

#### 4. Navbar.tsx - Add Missing Key
```
Add to en.json:
{
  "nav": {
    "allServices": "See all services"
  }
}

Add to fr.json:
{
  "nav": {
    "allServices": "Voir tous les services"
  }
}
```

#### 5. Contact Info (Centralized)
```
Add to en.json:
{
  "contactInfo": {
    "address": "Technopark, Casablanca, Morocco",
    "phones": ["+212 661-185357", "+212 522-750707"],
    "email": "contact@indusnov.com",
    "hours": "Mon - Fri: 8:00 AM - 6:00 PM"
  }
}

Add to fr.json:
{
  "contactInfo": {
    "address": "Technopark, Casablanca, Maroc",
    "phones": ["+212 661-185357", "+212 522-750707"],
    "email": "contact@indusnov.com",
    "hours": "Lun - Ven: 8:00 - 18:00"
  }
}
```

#### 6. ContactSection.tsx - Add Toast Message
```
Add to en.json:
{
  "contact": {
    "form": {
      ...existing...,
      "contactInProgress": "We will contact you shortly."
    }
  }
}

Add to fr.json:
{
  "contact": {
    "form": {
      ...existing...,
      "contactInProgress": "Nous vous contacterons bientôt."
    }
  }
}
```

#### 7. PortfolioSection.tsx - Portfolio Items
```
Add to en.json:
{
  "portfolio": {
    "items": {
      "aerospaceStructure": "Aerospace Structure",
      "precisionParts": "Precision Parts",
      "metalFramework": "Metal Framework",
      "robotizedLine": "Robotized Line",
      "stainlessSteelWeld": "Stainless Steel Weld",
      "industrialBuilding": "Industrial Building"
    }
  }
}

Add to fr.json:
{
  "portfolio": {
    "items": {
      "aerospaceStructure": "Structure Aéronautique",
      "precisionParts": "Pièces de Précision",
      "metalFramework": "Charpente Métallique",
      "robotizedLine": "Ligne Robotisée",
      "stainlessSteelWeld": "Soudure TIG Inox",
      "industrialBuilding": "Bâtiment Industriel"
    }
  }
}
```

---

### 🟡 MINOR - Additional Improvements

#### 8. TechnologyPartnershipsSection.tsx - Fix "Layer" Text
```
Current hardcoded: {p.role} Layer

Option 1: Update partner roles in i18n to include "Layer"
Option 2: Add suffix translation key:
{
  "technologyPartnerships": {
    "layerSuffix": "Layer"  // en
    "layerSuffix": "Couche"  // fr
  }
}
```

---

## Files to Modify (Component Code)

### Critical Changes Required

**1. src/components/PredictiveMaintenanceSection.tsx**
```typescript
// Add at top:
import { useTranslation } from 'react-i18next';

// In component:
const { t } = useTranslation();

// Replace hardcoded strings with:
t('predictiveMaintenanceSection.title')
t('predictiveMaintenanceSection.descriptionP1')
t('predictiveMaintenanceSection.descriptionP2')
t('predictiveMaintenanceSection.cta')
t('predictiveMaintenanceSection.features.conditionMonitoring')
// ... etc for all features
```

**2. src/components/Chatbot.tsx**
```typescript
// Add at top:
import { useTranslation } from 'react-i18next';

// In component:
const { t } = useTranslation();

// Replace all hardcoded service definitions with:
const services = t('chatbot.services', { returnObjects: true });

// Replace all FAQ responses with i18n keys:
return t('chatbot.defaultResponse');
```

**3. src/pages/ServiceDetail.tsx**
```typescript
// Add imports:
import { useTranslation } from 'react-i18next';

// In component:
const { t } = useTranslation();

// Replace hardcoded messages:
// Change: "Service not found" → t('serviceDetail.notFound')
// Change: "Return home" → t('serviceDetail.returnHome')
// Change: "Back to Services" → t('serviceDetail.backToServices')
```

**4. src/components/ContactSection.tsx**
```typescript
// Replace hardcoded toast:
toast({
  description: t('contact.form.contactInProgress'),
});

// Replace hardcoded contact info array with:
const contactInfo = [
  { icon: MapPin, label: t('contactInfo.address') },
  { icon: Phone, label: t('contactInfo.phones.0') },
  { icon: Phone, label: t('contactInfo.phones.1') },
  { icon: Mail, label: t('contactInfo.email') },
  { icon: Clock, label: t('contactInfo.hours') },
];
```

**5. src/components/Footer.tsx**
```typescript
// Reuse contact info from shared translation:
const address = t('contactInfo.address');
const phone1 = t('contactInfo.phones.0');
const phone2 = t('contactInfo.phones.1');
```

**6. src/components/PortfolioSection.tsx**
```typescript
// Replace hardcoded portfolio items with:
const portfolioItems = [
  {
    id: 1,
    category: 'welding',
    image: '...',
    titleKey: 'portfolio.items.aerospaceStructure',
    title: t('portfolio.items.aerospaceStructure'),
  },
  // ... etc
];
```

**7. src/components/Navbar.tsx**
```typescript
// Change line ~145 from:
<span>{t('nav.allServices') || 'Voir tous les services'}</span>

// To:
<span>{t('nav.allServices')}</span>
// (Now the key exists in both en.json and fr.json)
```

---

## Translation Keys Checklist

### ✅ Already Exist (Keep as-is):
- nav.* (all navigation)
- hero.slides, hero.cta
- technologyPartnerships.* (mostly)
- aboutUs.* (mostly)
- servicesPage.*
- services.items[]
- contact.* (except new ones)
- footer.*
- portfolio.title, portfolio.subtitle, portfolio.filters
- testimonials.*
- clients.* (title, subtitle)

### ❌ Need to Add:
- predictiveMaintenanceSection.*
- chatbot.*
- serviceDetail.*
- contactInfo.*
- portfolio.items.* (individual items)
- nav.allServices

---

## Quick Test After Implementation

1. Switch language to English → verify all content is in English
2. Switch language to French → verify all content is in French
3. Open Chatbot → test that responses are translated
4. Click Portfolio → verify item titles are translated
5. Scroll to Contact → verify all contact info is translated
6. Open Footer → verify footer content is translated
7. Open ServiceDetail for any service → verify error messages translate
8. Check browser console → no missing translation key warnings

---

## Priority Matrix

| Priority | Component | Impact | Time | Status |
|----------|-----------|--------|------|--------|
| 🔴 Critical | Chatbot | High | 30min | Not started |
| 🔴 Critical | PredictiveMaintenanceSection | Medium | 20min | Not started |
| 🔴 Critical | ServiceDetail | Medium | 15min | Not started |
| 🟠 Medium | Navbar | Low | 5min | Not started |
| 🟠 Medium | ContactSection | Medium | 15min | Not started |
| 🟠 Medium | Footer | Low | 10min | Not started |
| 🟠 Medium | PortfolioSection | Medium | 20min | Not started |
| 🟡 Minor | TechPartnships | Low | 5min | Not started |

**Total Estimated Time: 2-3 hours**
