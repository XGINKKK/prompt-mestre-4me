import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show CTA when hero section is not visible
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const heroSection = document.getElementById('hero');
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => {
      if (heroSection) {
        observer.unobserve(heroSection);
      }
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="engineering-card m-4 p-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-xs text-white mb-1">Resposta em até 1h</div>
                <div className="text-sm text-white font-semibold">CREA + ART • Compatibilização</div>
              </div>
              <img 
                src="https://i.imgur.com/H0q0jWu.png" 
                alt="4ME" 
                className="w-8 h-8"
              />
            </div>
            
            <div className="flex space-x-2">
              <Button 
                className="flex-1 bg-white text-black hover:bg-accent hover:text-white transition-all duration-300 font-bold"
                onClick={() => window.open('mailto:contato@4meengenharia.com')}
              >
                Solicitar orçamento
              </Button>
              
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-6"
                onClick={() => window.open('https://wa.me/5547997957480?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento.', '_blank')}
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;