import { Helmet } from 'react-helmet-async';
import BackgroundImage from '@/components/ui/BackgroundImage';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import MetricsSection from '@/components/sections/MetricsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import StickyCTA from '@/components/sections/StickyCTA';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>4ME Engenharia - Authentic Spaces</title>
        <meta 
          name="description" 
          content="Criando espaços autênticos e inovadores com arquitetura de ponta e construção de alto padrão." 
        />
        <meta name="keywords" content="engenharia, projetos complementares, estrutural, hidrossanitário, elétrico, PPCI, laudos técnicos" />
        <meta property="og:title" content="4ME Engenharia - Authentic Spaces" />
        <meta property="og:description" content="Criando espaços autênticos e inovadores com arquitetura de ponta e construção de alto padrão." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://4meengenharia.com" />
      </Helmet>

      <div className="relative min-h-screen bg-background text-foreground">
        <BackgroundImage />
        
        <Header />
        
        <main>
          <HeroSection />
          <AboutSection />
          <MetricsSection />
          <ServicesSection />
          <ProcessSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        
        <Footer />
        <StickyCTA />
      </div>
    </>
  );
};

export default Index;
