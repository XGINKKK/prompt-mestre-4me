import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

interface SectionCTAProps {
  title?: string;
  subtitle?: string;
  primaryAction?: {
    text: string;
    onClick: () => void;
  };
  secondaryAction?: {
    text: string;
    onClick: () => void;
  };
  variant?: 'default' | 'minimal' | 'floating';
}

const SectionCTA = ({ 
  title = "Pronto para começar seu projeto?",
  subtitle = "Fale conosco e receba uma proposta personalizada",
  primaryAction = {
    text: "Solicitar Orçamento",
    onClick: () => window.open('mailto:contato@4meengenharia.com')
  },
  secondaryAction = {
    text: "WhatsApp",
    onClick: () => window.open('https://wa.me/5547997957480?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento.', '_blank')
  },
  variant = 'default'
}: SectionCTAProps) => {
  
  if (variant === 'minimal') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-white/10 border border-white/20 rounded-2xl"
        style={{
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}
      >
        <div className="text-center sm:text-left">
          <h4 className="text-lg font-semibold text-white mb-1">{title}</h4>
          <p className="text-white/70 text-sm">{subtitle}</p>
        </div>
        
        <div className="flex gap-3">
          <motion.button
            onClick={primaryAction.onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all duration-300 flex items-center gap-2"
          >
            {primaryAction.text}
            <ArrowRight size={16} />
          </motion.button>
          
          {secondaryAction && (
            <motion.button
              onClick={secondaryAction.onClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-all duration-300 flex items-center gap-2"
            >
              <MessageCircle size={16} />
              {secondaryAction.text}
            </motion.button>
          )}
        </div>
      </motion.div>
    );
  }

  if (variant === 'floating') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="engineering-card p-6 text-center"
      >
        <div className="flex items-center justify-center mb-4">
          <img 
            src="https://i.imgur.com/H0q0jWu.png" 
            alt="4ME" 
            className="h-12 w-12 rounded-xl bg-white/20 p-2"
          />
        </div>
        
        <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
        <p className="text-white/80 mb-6">{subtitle}</p>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <motion.button
            onClick={primaryAction.onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 px-6 py-3 bg-white text-black rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2"
          >
            {primaryAction.text}
            <ArrowRight size={18} />
          </motion.button>
          
          <motion.button
            onClick={secondaryAction.onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} />
            {secondaryAction.text}
          </motion.button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center py-8"
    >
      <div className="engineering-card p-8 max-w-2xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <img 
            src="https://i.imgur.com/H0q0jWu.png" 
            alt="4ME Engenharia" 
            className="h-16 w-16 rounded-2xl bg-white/20 p-3"
          />
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-white/80 text-lg mb-8 leading-relaxed">{subtitle}</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            onClick={primaryAction.onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-black rounded-2xl font-bold hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg"
          >
            {primaryAction.text}
            <ArrowRight size={20} />
          </motion.button>
          
          <motion.button
            onClick={secondaryAction.onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-green-600 text-white rounded-2xl font-bold hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg"
          >
            <MessageCircle size={20} />
            {secondaryAction.text}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default SectionCTA;