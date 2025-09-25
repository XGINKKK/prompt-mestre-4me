import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const ProcessSection = () => {
  const containerRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);
  
  // Define steps first before using in useEffect
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

  // Controle de navegação mais simples e direto
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isScrolling = false;

    const handleWheel = (e) => {
      // Verificar se estamos na área da seção
      const rect = container.getBoundingClientRect();
      const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
      
      if (isInViewport && !isScrolling) {
        e.preventDefault();
        isScrolling = true;
        
        // Debounce para evitar mudanças muito rápidas
        setTimeout(() => {
          if (e.deltaY > 0 && currentStep < steps.length - 1) {
            setCurrentStep(prev => prev + 1);
          } else if (e.deltaY < 0 && currentStep > 0) {
            setCurrentStep(prev => prev - 1);
          }
          
          // Reset do debounce
          setTimeout(() => {
            isScrolling = false;
          }, 300);
        }, 50);
      }
    };

    // Auto-avançar baseado no scroll da página
    const handlePageScroll = () => {
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;
      
      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        const scrollProgress = Math.abs(rect.top) / (containerHeight - windowHeight);
        const newStep = Math.min(
          Math.floor(scrollProgress * steps.length), 
          steps.length - 1
        );
        setCurrentStep(newStep);
      }
    };

    // Adicionar listeners
    document.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handlePageScroll, { passive: true });
    
    return () => {
      document.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handlePageScroll);
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
          
          {/* Container dos slides - cada um ocupa tela inteira */}
          <div className="relative h-screen flex items-center justify-center">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="absolute inset-0 flex items-center justify-center px-8 transition-opacity duration-700"
                style={{ 
                  opacity: getStepOpacity(index),
                  zIndex: index === currentStep ? 10 : 5
                }}
              >
                {/* Layout full-width como DynastyAI */}
                <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[60vh]">
                  
                  {/* Visual 3D - Lado Esquerdo */}
                  <div className="flex justify-center items-center">
                    <div className="relative group">
                      {/* Cubo 3D estilo DynastyAI */}
                      <div className="w-96 h-96 relative transform-gpu perspective-1000">
                        {/* Container do cubo principal */}
                        <div className="w-full h-full bg-gradient-to-br from-purple-500 via-blue-600 to-cyan-500 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-6 transition-all duration-700 relative overflow-hidden">
                          {/* Efeito glass morphism */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 backdrop-blur-sm"></div>
                          
                          {/* Círculo/anel interno como no exemplo */}
                          <div className="absolute inset-8 border-4 border-white/30 rounded-full flex items-center justify-center">
                            <div className="w-32 h-32 border-4 border-white/50 rounded-full flex items-center justify-center">
                              <div className="w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center">
                                <span className="text-2xl font-bold text-white">{step.number}</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Efeitos de brilho */}
                          <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full blur-sm"></div>
                          <div className="absolute bottom-6 right-6 w-4 h-4 bg-white/30 rounded-full blur-sm"></div>
                        </div>
                        
                        {/* Sombra/reflexo adicional */}
                        <div className="absolute -bottom-4 left-4 right-4 h-8 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent blur-xl"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Conteúdo - Lado Direito */}
                  <div className="text-white space-y-8">
                    <div>
                      <div className="text-accent font-semibold text-xl mb-4 tracking-wide">
                        Etapa {step.number}
                      </div>
                      
                      <h3 className="text-5xl lg:text-6xl font-bold leading-tight mb-8 tracking-tight">
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-300 text-xl leading-relaxed max-w-xl">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* CTA Button como no DynastyAI */}
                    <div className="pt-4">
                      <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Saiba Mais
                      </button>
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
          
          {/* Navegação com setas (adicional) */}
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10">
            <button
              onClick={() => currentStep > 0 && setCurrentStep(prev => prev - 1)}
              disabled={currentStep === 0}
              className={`w-12 h-12 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all ${
                currentStep === 0 
                  ? 'opacity-30 cursor-not-allowed' 
                  : 'opacity-70 hover:opacity-100 hover:bg-white/10'
              }`}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10">
            <button
              onClick={() => currentStep < steps.length - 1 && setCurrentStep(prev => prev + 1)}
              disabled={currentStep === steps.length - 1}
              className={`w-12 h-12 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all ${
                currentStep === steps.length - 1 
                  ? 'opacity-30 cursor-not-allowed' 
                  : 'opacity-70 hover:opacity-100 hover:bg-white/10'
              }`}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
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