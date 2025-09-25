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
        className="relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-2xl shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          width: isExpanded ? "auto" : "64px",
          paddingLeft: isExpanded ? "16px" : "16px",
          paddingRight: isExpanded ? "16px" : "16px"
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex items-center space-x-3 py-4">
          {/* Logo sempre visível */}
          <div className="flex-shrink-0">
            <img 
              src="https://i.imgur.com/H0q0jWu.png" 
              alt="4ME" 
              className="h-8 w-8 rounded-lg bg-white/20 p-1"
            />
          </div>
          
          {/* Conteúdo expandido */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center space-x-3 whitespace-nowrap"
              >
                <div className="text-left">
                  <div className="text-sm font-semibold">4ME Engenharia</div>
                  <div className="text-xs opacity-90">Fale no WhatsApp</div>
                </div>
                <MessageCircle size={20} className="flex-shrink-0" />
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Ícone WhatsApp quando contraído */}
          {!isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <MessageCircle size={20} />
            </motion.div>
          )}
        </div>
        
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-2xl bg-green-500 animate-ping opacity-20"></div>
      </motion.button>
    </div>
  );
};

export default StickyCTA;