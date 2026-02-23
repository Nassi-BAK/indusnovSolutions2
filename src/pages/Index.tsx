import '@/i18n';
import Navbar from '@/components/Navbar';
import HeroCarousel from '@/components/HeroCarousel';
import PredictiveMaintenanceSection from '@/components/PredictiveMaintenanceSection';
import TechnologyPartnershipsSection from '@/components/TechnologyPartnershipsSection';
import ServicesSection from '@/components/ServicesSection';
import AboutUsSection from '@/components/AboutUsSection';
import ClientLogosScroll from '@/components/ClientLogosScroll';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroCarousel />
        <PredictiveMaintenanceSection />
        <TechnologyPartnershipsSection />
        <AboutUsSection />
        <ClientLogosScroll />
        
        <ContactSection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
