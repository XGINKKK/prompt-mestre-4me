import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
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
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20"
          >
            <div className="flex items-center space-x-3">
              <img 
                src="https://i.imgur.com/H0q0jWu.png" 
                alt="4ME Engenharia" 
                className="h-8 w-auto"
              />
              <div>
                <p className="text-sm font-semibold text-gray-800">4ME Engenharia</p>
                <p className="text-xs text-gray-600">Fale conosco</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={isExpanded ? handleWhatsAppClick : () => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        className="relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div
              key="whatsapp"
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
      </motion.button>
    </div>
  );
};

export default StickyCTA;