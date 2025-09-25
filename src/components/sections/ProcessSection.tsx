import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';

const ProcessSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      number: '01',
      title: 'Briefing e levantamento',
      description: 'Requisitos, visitas e viabilidade técnica detalhada para garantir o sucesso do projeto desde o início.',
      image: 'https://i.imgur.com/WBPCAx2.png'
    },
    {
      number: '02',
      title: 'Projeto estrutural e fundações',
      description: 'Dimensionamento e detalhamento seguindo NBR 6118/6122 com precisão técnica e inovação.',
      image: 'https://i.imgur.com/jvb23r8.png'
    },
    {
      number: '03',
      title: 'Hidrossanitário e elétrico',
      description: 'Compatibilização NBR 5626/5410 com executivos claros e detalhamento impecável.',
      image: 'https://i.imgur.com/E3maufk.png'
    },
    {
      number: '04',
      title: 'PPCI e aprovações',
      description: 'Saídas, hidrantes, sinalização e aprovação no CBMSC com agilidade e conformidade total.',
      image: 'https://i.imgur.com/QoVjmMI.png'
    },
    {
      number: '05',
      title: 'Laudos e assessoria',
      description: 'Inspeções, ART e suporte em obra até a entrega com acompanhamento técnico especializado.',
      image: 'https://i.imgur.com/lWaT7vf.png'
    }
  ];

  const scrollToSlide = (index: number) => {
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      });
      setCurrentSlide(index);
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.offsetWidth;
      const scrollLeft = scrollRef.current.scrollLeft;
      const newSlide = Math.round(scrollLeft / slideWidth);
      setCurrentSlide(newSlide);
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="relative z-10 py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nosso <span className="engineering-text-gradient">Processo</span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Da ideia à execução, um fluxo de trabalho preciso e transparente.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {steps.map((step, index) => (
          <div 
            key={step.number}
            className="flex-none w-full snap-start"
          >
            <div className="min-h-[80vh] flex items-center justify-center px-8 lg:px-16">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                
                {/* Visual Element */}
                <motion.div 
                  className="order-2 lg:order-1 flex justify-center items-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    {/* 3D Visual Element */}
                    <div className="w-80 h-80 relative">
                      {/* Gradient Background */}
                      <div 
                        className="absolute inset-0 rounded-3xl opacity-20"
                        style={{
                          background: `linear-gradient(135deg, 
                            hsl(${index * 60}, 70%, 60%), 
                            hsl(${(index * 60) + 30}, 80%, 70%)
                          )`
                        }}
                      />
                      
                      {/* Main 3D Element */}
                      <motion.div
                        className="absolute inset-4 rounded-2xl shadow-2xl overflow-hidden group"
                        style={{
                          background: `linear-gradient(135deg, 
                            hsl(${index * 60}, 60%, 50%), 
                            hsl(${(index * 60) + 30}, 70%, 60%)
                          )`,
                          boxShadow: `0 25px 50px hsla(${index * 60}, 70%, 50%, 0.3)`
                        }}
                        whileHover={{ 
                          scale: 1.05, 
                          rotateY: 10,
                          rotateX: 5
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Glass Effect Overlay */}
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                        
                        {/* Step Image */}
                        <img 
                          src={step.image} 
                          alt={step.title}
                          className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                        />
                        
                        {/* Number Overlay */}
                        <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                          <span className="text-2xl font-bold text-white">{step.number}</span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div 
                  className="order-1 lg:order-2 space-y-8 text-center lg:text-left"
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {/* Process Number */}
                  <div className="flex items-center justify-center lg:justify-start space-x-4">
                    <span 
                      className="text-6xl font-bold opacity-20"
                      style={{ color: `hsl(${index * 60}, 70%, 60%)` }}
                    >
                      {step.number}
                    </span>
                    <div 
                      className="w-24 h-1 rounded"
                      style={{ backgroundColor: `hsl(${index * 60}, 70%, 60%)` }}
                    />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-xl text-white/80 leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-3 mt-12">
        {steps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-white scale-125' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;