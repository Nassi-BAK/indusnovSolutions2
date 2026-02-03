import { motion } from 'framer-motion';
import akwa from '../assets/costumer/akwa.png';
import arcelor from '../assets/costumer/arcelor.png';
import atlasonline from '../assets/costumer/atlasonline.png';
import carnaud from '../assets/costumer/carnaud.png';
import danone from '../assets/costumer/danone.png';
import fenie from '../assets/costumer/fenie.png';
import m from '../assets/costumer/m.png';
import msc from '../assets/costumer/MSC.png';
import petrom from '../assets/costumer/petrom.png';
import prettl from '../assets/costumer/prettl.png';
import ram from '../assets/costumer/ram.png';
import st from '../assets/costumer/st.png';
import tractafric from '../assets/costumer/tractafric.png';

// Logos des clients avec images réelles
const clientLogos = [
  { id: 1, name: 'Akwa', logo: akwa, url: 'https://www.akwagroup.com/' },
  { id: 2, name: 'ArcelorMittal', logo: arcelor, url: 'https://corporate.arcelormittal.com/' },
  { id: 3, name: 'Atlasonline', logo: atlasonline, url: 'http://www.atlasonline.ma/' },
  { id: 4, name: 'Carnaud', logo: carnaud, url: 'https://www.ammc.ma/fr/espace-emetteurs/carnaud-maroc' },
  { id: 5, name: 'Danone', logo: danone, url: 'https://corporate.danone.ma/' },
  { id: 6, name: 'Fenie', logo: fenie, url: 'https://www.feniebrossette.ma/' },
  { id: 7, name: 'M', logo: m, url: 'https://example.com' },
  { id: 8, name: 'MSC', logo: msc, url: 'https://www.msc.com/' },
  { id: 9, name: 'Petrom', logo: petrom, url: 'http://petrom.ma/' },
  { id: 10, name: 'Prettl', logo: prettl, url: 'https://www.prettl.com/en/home' },
  { id: 11, name: 'RAM', logo: ram, url: 'https://www.royalairmaroc.com/ma-fr' },
  { id: 12, name: 'ST', logo: st, url: 'https://www.st.com/content/st_com/en.html' },
  { id: 13, name: 'TractAfric', logo: tractafric, url: 'https://www.tractafric-equipment.com/fr/' },
];

const ClientLogosScroll = () => {
  // Dupliquer les logos pour créer un effet infini
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-20">
      {/* Conteneur du carousel */}
      <div className="relative mx-auto max-w-7xl">
        {/* Gradient overlay gauche */}
        <div className="absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        
        {/* Gradient overlay droit */}
        <div className="absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        {/* Carousel infini */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-16 lg:gap-20 items-center justify-center"
            animate={{ x: [0, -100 * clientLogos.length] }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop',
            }}
          >
            {duplicatedLogos.map((client, index) => (
              <motion.a
                key={`${client.id}-${index}`}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="h-16 w-auto max-w-[150px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogosScroll;
