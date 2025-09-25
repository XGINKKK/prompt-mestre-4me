import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const ProcessSection = () => {
  const containerRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    {
      number: '01',
      title: 'Briefing e levantamento',
      description: 'Requisitos, visitas e viabilidade técnica.',
      image: 'https://i.imgur.com/WBPCAx2.png'
    },
    {
      number: '02',
      title: 'Projeto estrutural e fundações',
      description: 'Dimensionamento e detalhamento NBR 6118/6122.',
      image: 'https://i.imgur.com/jvb23r8.png'
    },
    {
      number: '03',
      title: 'Hidrossanitário e elétrico',
      description: 'Compatibilização NBR 5626/5410 com executivos claros.',
      image: 'https://i.imgur.com/E3maufk.png'
    },
    {
      number: '04',
      title: 'PPCI e aprovações',
      description: 'Saídas, hidrantes, sinalização e aprovação no CBMSC.',
      image: 'https://i.imgur.com/QoVjmMI.png'
    },
    {
      number: '05',
      title: 'Laudos e assessoria',
      description: 'Inspeções, ART e suporte em obra até a entrega.',
      image: 'https://i.imgur.com/lWaT7vf.png'
    }
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Forçar o comportamento de scroll horizontal
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Se a seção está visível
      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        // Calcular progresso do scroll dentro da seção
        const progress = Math.abs(rect.top) / (containerHeight - windowHeight);
        const stepIndex = Math.floor(progress * steps.length);
        setCurrentStep(Math.min(stepIndex, steps.length - 1));
      }
    };

    // Interceptar scroll do mouse dentro da seção
    const handleWheel = (e) => {
      const rect = container.getBoundingClientRect();
      const isInSection = rect.top <= 100 && rect.bottom >= 100;
      
      if (isInSection) {
        e.preventDefault();
        
        // Avançar ou voltar etapas baseado na direção do scroll
        if (e.deltaY > 0 && currentStep < steps.length - 1) {
          setCurrentStep(prev => prev + 1);
        } else if (e.deltaY < 0 && currentStep > 0) {
          setCurrentStep(prev => prev - 1);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    container.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      container.removeEventListener('wheel', handleWheel);
    };
  }, [currentStep, steps.length]);

  // Calcular opacidade baseado no estado atual
  const getStepOpacity = (index) => {
    if (index === currentStep) return 1;
    if (Math.abs(index - currentStep) === 1) return 0.3;
    return 0;
  };

  return (
    // Container com altura gigante para criar espaço de scroll
    <section ref={containerRef} className="relative h-[400vh]">
      {/* Container sticky que fica fixo na tela */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden bg-background">
        <div className="w-full relative">
          
          {/* Título fixo */}
          <div className="absolute top-16 left-0 right-0 text-center container mx-auto z-10 pointer-events-none">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nosso <span className="engineering-text-gradient">Processo</span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Da ideia à execução, um fluxo de trabalho preciso e transparente.
            </p>
          </div>
          
          {/* Container dos slides - todos empilhados */}
          <div className="relative h-screen flex items-center justify-center pt-32 md:pt-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="absolute inset-0 flex items-center justify-center px-4 transition-opacity duration-500"
                style={{ 
                  opacity: getStepOpacity(index),
                  zIndex: index === currentStep ? 10 : 5
                }}
              >
                <div className="container mx-auto max-w-6xl">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Visual/Imagem */}
                    <div className="flex justify-center">
                      <div className="relative group">
                        {/* Elemento 3D inspirado no DynastyAI */}
                        <div className="w-80 h-80 engineering-card p-6 relative overflow-hidden hover:scale-105 transition-transform duration-500">
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-600/20 to-cyan-500/20 backdrop-blur-sm rounded-lg"></div>
                          <img 
                            src={step.image} 
                            alt={step.title}
                            className="relative z-10 w-full h-full object-cover rounded-lg"
                          />
                          {/* Número sobreposto */}
                          <div className="absolute top-4 left-4 z-20">
                            <div className="w-12 h-12 bg-accent/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                              <span className="text-lg font-bold text-white">{step.number}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Conteúdo */}
                    <div className="text-white space-y-6">
                      <div className="text-accent font-semibold text-lg">
                        Etapa {step.number}
                      </div>
                      
                      <h3 className="text-4xl lg:text-5xl font-bold leading-tight">
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Indicadores de progresso */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentStep 
                    ? 'bg-accent scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
          
          {/* Instruções de navegação */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center text-white/60 text-sm">
            <p>Role o mouse para navegar pelos processos</p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;