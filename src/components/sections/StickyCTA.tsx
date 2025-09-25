import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const StickyCTA = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = "5547997957480";
    const message = "Olá! Gostaria de saber mais sobre os serviços da 4ME Engenharia.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <motion.button
        onClick={handleWhatsAppClick}
        onHoverStart={() => setIsExpanded(true)}
        onHoverEnd={() => setIsExpanded(false)}
        onTap={() => setIsExpanded(!isExpanded)}
        className="relative bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          width: isExpanded ? "auto" : "56px",
          height: "56px",
          paddingLeft: isExpanded ? "16px" : "0",
          paddingRight: isExpanded ? "16px" : "0"
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex items-center justify-center h-full">
          {/* Ícone WhatsApp sempre visível */}
          <MessageCircle size={24} className="flex-shrink-0" />
          
          {/* Texto expandido */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.3 }}
                className="ml-3 whitespace-nowrap"
              >
                <span className="text-sm font-medium">WhatsApp</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Pulse sutil */}
        <div className="absolute inset-0 rounded-full bg-green-400 animate-pulse opacity-30"></div>
      </motion.button>
    </div>
  );
};

export default StickyCTA;