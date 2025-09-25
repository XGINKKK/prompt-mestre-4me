import { useState, useRef, useEffect } from 'react';

const ProcessSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const containerRef = useRef(null);
  const isScrollingRef = useRef(false);

  // Define steps first before using in useEffect
  const steps = [
    {
      number: '01',
      title: 'Briefing e levantamento',
      description: 'Requisitos, visitas e viabilidade técnica.',
    },
    {
      number: '02',
      title: 'Projeto estrutural e fundações',
      description: 'Dimensionamento e detalhamento NBR 6118/6122.',
    },
    {
      number: '03',
      title: 'Hidrossanitário e elétrico',
      description: 'Compatibilização NBR 5626/5410 com executivos claros.',
    },
    {
      number: '04',
      title: 'PPCI e aprovações',
      description: 'Saídas, hidrantes, sinalização e aprovação no CBMSC.',
    },
    {
      number: '05',
      title: 'Laudos e assessoria',
      description: 'Inspeções, ART e suporte em obra até a entrega.',
    }
  ];

  useEffect(() => {
    const handleWheel = (e) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const isInSection = rect.top <= 100 && rect.bottom >= 100;

      if (isInSection && !isScrollingRef.current) {
        e.preventDefault(); // BLOQUEIA scroll vertical
        e.stopPropagation();
        
        isScrollingRef.current = true;
        
        if (e.deltaY > 0 && currentStep < steps.length - 1) {
          setCurrentStep(prev => prev + 1);
        } else if (e.deltaY < 0 && currentStep > 0) {
          setCurrentStep(prev => prev - 1);
        }
        
        // Reset após animação
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 800);
      }
    };

    // CRITICAL: Capturar em toda a página
    document.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, [currentStep, steps.length]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      
      {/* Container sticky */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="w-full relative">
          
          {/* Título */}
          <div className="absolute top-16 left-0 right-0 text-center z-10">
            <h2 className="text-5xl font-bold text-white mb-4">
              Nosso <span className="text-blue-400">Processo</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Da ideia à execução, um fluxo de trabalho preciso e transparente.
            </p>
          </div>
          
          {/* Container dos slides */}
          <div className="relative h-screen flex items-center justify-center pt-32">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`absolute inset-0 flex items-center justify-center px-12 step-transition ${
                  index === currentStep ? 'opacity-100 z-10' : 'opacity-0 z-5'
                }`}
              >
                <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  
                  {/* CUBO BRANCO À ESQUERDA */}
                  <div className="flex justify-center lg:justify-end">
                    <div className="relative">
                      {/* Container do cubo 3D */}
                      <div className="w-80 h-80 relative transform-gpu group cursor-pointer">
                        
                        {/* Face frontal - BRANCA */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-200 rounded-3xl cube-front shadow-2xl border border-gray-300/50 hover:shadow-3xl transition-all duration-500">
                          
                          {/* Highlights e reflexos sutis */}
                          <div className="absolute inset-4 bg-gradient-to-br from-white/60 via-transparent to-gray-100/30 rounded-2xl"></div>
                          <div className="absolute top-6 left-6 w-16 h-16 bg-white/80 rounded-xl backdrop-blur-sm shadow-inner"></div>
                          
                          {/* NÚMERO DA ETAPA no centro */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-6xl font-bold text-gray-800 drop-shadow-sm">
                              {step.number}
                            </span>
                          </div>
                          
                          {/* Sombra interna sutil */}
                          <div className="absolute inset-0 rounded-3xl shadow-inner bg-gradient-to-br from-transparent via-transparent to-gray-200/20"></div>
                        </div>
                        
                        {/* Face lateral (profundidade) - mais escura */}
                        <div className="absolute top-3 left-3 w-full h-full bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 rounded-3xl cube-side -z-10 opacity-70"></div>
                        
                        {/* Face inferior (sombra) */}
                        <div className="absolute top-6 left-6 w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 rounded-3xl cube-shadow -z-20 opacity-40"></div>
                        
                        {/* Sombra no chão */}
                        <div className="absolute -bottom-8 left-8 right-8 h-16 bg-gradient-to-r from-transparent via-gray-800/20 to-transparent rounded-full blur-2xl"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* CONTEÚDO À DIREITA */}
                  <div className="text-white space-y-8 lg:pl-12">
                    <div className="text-blue-400 font-semibold text-xl tracking-wider">
                      {step.number.padStart(2, '0')}.
                    </div>
                    
                    <h3 className="text-5xl lg:text-6xl font-bold leading-tight">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-300 text-xl leading-relaxed max-w-xl">
                      {step.description}
                    </p>
                    
                    <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                      Saiba Mais
                    </button>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
          
          {/* Navegação com setas */}
          <button 
            onClick={() => currentStep > 0 && setCurrentStep(prev => prev - 1)}
            disabled={currentStep === 0}
            className={`absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 backdrop-blur-sm rounded-full flex items-center justify-center transition-all ${
              currentStep === 0 
                ? 'bg-white/5 text-gray-500 cursor-not-allowed' 
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={() => currentStep < steps.length - 1 && setCurrentStep(prev => prev + 1)}
            disabled={currentStep === steps.length - 1}
            className={`absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 backdrop-blur-sm rounded-full flex items-center justify-center transition-all ${
              currentStep === steps.length - 1 
                ? 'bg-white/5 text-gray-500 cursor-not-allowed' 
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Indicadores */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentStep ? 'bg-blue-500 w-8' : 'bg-white/30 w-3 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
          
          {/* Instruções de navegação */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center text-white/60 text-sm">
            <p>Role o mouse para navegar pelos processos</p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;