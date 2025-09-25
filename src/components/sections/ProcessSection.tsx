import { useRef, useEffect, useState } from 'react';

const ProcessSection = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const steps = [
    {
      number: '01',
      title: 'Briefing e levantamento',
      description: 'Requisitos detalhados, visitas técnicas e análise de viabilidade estrutural para garantir a execução perfeita do projeto.',
      image: 'https://i.imgur.com/WBPCAx2.png'
    },
    {
      number: '02',
      title: 'Projeto estrutural e fundações',
      description: 'Dimensionamento preciso e detalhamento técnico seguindo rigorosamente as normas NBR 6118/6122 com cálculos estruturais avançados.',
      image: 'https://i.imgur.com/jvb23r8.png'
    },
    {
      number: '03',
      title: 'Hidrossanitário e elétrico',
      description: 'Compatibilização completa das instalações NBR 5626/5410 com projetos executivos claros, detalhados e prontos para execução.',
      image: 'https://i.imgur.com/E3maufk.png'
    },
    {
      number: '04',
      title: 'PPCI e aprovações',
      description: 'Saídas de emergência, hidrantes, sinalização e aprovação completa junto ao Corpo de Bombeiros Militar de Santa Catarina.',
      image: 'https://i.imgur.com/QoVjmMI.png'
    },
    {
      number: '05',
      title: 'Laudos e assessoria',
      description: 'Inspeções técnicas, ART e suporte completo em obra até a entrega final do projeto com acompanhamento técnico especializado.',
      image: 'https://i.imgur.com/lWaT7vf.png'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Verifica se a seção está visível na tela
      const isInView = rect.top <= 0 && rect.bottom >= windowHeight;
      
      if (isInView) {
        // Calcula o progresso baseado na posição da seção
        const scrollProgress = Math.abs(rect.top) / (rect.height - windowHeight);
        const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
        
        // Calcula qual card deve estar ativo
        const totalSteps = steps.length;
        const stepProgress = clampedProgress * totalSteps;
        const newIndex = Math.floor(stepProgress);
        const clampedIndex = Math.min(newIndex, totalSteps - 1);
        
        if (clampedIndex !== currentIndex && !isTransitioning) {
          setIsTransitioning(true);
          setCurrentIndex(clampedIndex);
          
          setTimeout(() => {
            setIsTransitioning(false);
          }, 600);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentIndex, isTransitioning, steps.length]);

  const handleProgressClick = (index) => {
    if (index === currentIndex || isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);
    
    // Scroll para mostrar a seção se não estiver visível
    const container = containerRef.current;
    if (container) {
      container.scrollIntoView({ behavior: 'smooth' });
    }
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  return (
    <section 
      ref={containerRef} 
      className="relative h-[400vh] bg-black"
    >
      {/* Container sticky */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-8">
        
        {/* Header com espaçamento adequado */}
        <div className="text-center mb-8 md:mb-16 px-4 md:px-8 pt-4 md:pt-8">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            Nosso <span className="engineering-text-gradient">Processo</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Da concepção à execução, um fluxo de trabalho preciso e transparente que garante excelência em cada etapa.
          </p>
        </div>

        {/* Container dos slides horizontais */}
        <div className="relative flex-1 flex items-center">
          <div 
            className="flex transition-transform duration-700 ease-out w-full"
            style={{ 
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="w-full flex-shrink-0 px-4 md:px-8 lg:px-16"
                style={{ minWidth: '100%' }}
              >
                <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
                    
                    {/* Lado esquerdo - Cubo 3D branco melhorado */}
                    <div className="flex justify-center lg:justify-end order-2 lg:order-1">
                      <div className="relative group">
                        {/* Cubo 3D branco com sombras */}
                        <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white rounded-3xl flex items-center justify-center relative overflow-hidden transition-all duration-500 hover:scale-105">
                          
                          {/* Sombras para efeito 3D */}
                          <div className="absolute -bottom-6 -right-6 w-full h-full bg-black/20 rounded-3xl blur-xl"></div>
                          <div className="absolute -bottom-3 -right-3 w-full h-full bg-black/10 rounded-3xl"></div>
                          
                          {/* Gradiente sutil no cubo */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl"></div>
                          
                          {/* Reflexo superior */}
                          <div className="absolute top-6 left-6 w-16 h-16 bg-white/80 rounded-2xl shadow-inner"></div>
                          
                          {/* Número central com fonte menos bold */}
                          <div className="relative z-10 text-center">
                            <span className="text-7xl md:text-8xl lg:text-9xl font-semibold text-gray-800 leading-none">
                              {step.number}
                            </span>
                          </div>
                          
                          {/* Sombra interna sutil */}
                          <div className="absolute inset-0 rounded-3xl shadow-inner bg-gradient-to-br from-transparent via-transparent to-black/5"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Lado direito - Conteúdo limpo */}
                    <div className="text-white space-y-4 md:space-y-6 lg:pl-12 order-1 lg:order-2 text-center lg:text-left">
                      <div className="text-white/60 font-semibold text-base md:text-lg tracking-wider uppercase">
                        Etapa {step.number}
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-white">
                        {step.title}
                      </h3>
                      
                      <p className="text-white/80 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                        {step.description}
                      </p>
                    </div>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Indicadores de progresso */}
        <div className="flex justify-center mt-8 md:mt-12 pb-4 md:pb-8">
          <div className="flex space-x-3 md:space-x-4 bg-black/40 backdrop-blur-sm px-6 md:px-8 py-3 md:py-4 rounded-full border border-white/10">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => handleProgressClick(index)}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white w-8 md:w-10 shadow-lg' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                title={`Etapa ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ProcessSection;