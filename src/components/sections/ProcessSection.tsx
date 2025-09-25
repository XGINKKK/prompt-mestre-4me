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
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        {/* Header fixo */}
        <div className="text-center mb-16 px-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Nosso <span className="engineering-text-gradient">Processo</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
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
                className="w-full flex-shrink-0 px-16"
                style={{ minWidth: '100%' }}
              >
                <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    
                    {/* Lado esquerdo - Card com número uniformizado */}
                    <div className="flex justify-center lg:justify-end">
                      <div className="relative group">
                        {/* Card principal com tamanho fixo */}
                        <div className="w-96 h-96 bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-black/90 backdrop-blur-xl border border-white/10 rounded-3xl flex items-center justify-center relative overflow-hidden shadow-2xl hover:shadow-white/10 transition-all duration-500">
                          
                          {/* Background pattern sutil */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/20"></div>
                          
                          {/* Número central - tamanho fixo */}
                          <div className="relative z-10 text-center">
                            <span className="text-9xl font-black text-white drop-shadow-2xl leading-none">
                              {step.number}
                            </span>
                          </div>
                          
                          {/* Reflexo superior */}
                          <div className="absolute top-8 left-8 w-20 h-20 bg-white/20 rounded-2xl backdrop-blur-sm"></div>
                          
                          {/* Glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Lado direito - Conteúdo uniformizado */}
                    <div className="text-white space-y-6 lg:pl-12">
                      <div className="text-white/60 font-semibold text-lg tracking-wider uppercase">
                        Etapa {step.number}
                      </div>
                      
                      <h3 className="text-4xl lg:text-5xl font-bold leading-tight text-white min-h-[120px] flex items-center">
                        {step.title}
                      </h3>
                      
                      <p className="text-white/80 text-xl leading-relaxed max-w-2xl min-h-[120px]">
                        {step.description}
                      </p>
                      
                      {/* Imagem uniformizada */}
                      <div className="relative w-full max-w-lg h-56 rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                        <img 
                          src={step.image} 
                          alt={step.title}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Indicadores de progresso */}
        <div className="flex justify-center mt-12 pb-8">
          <div className="flex space-x-4 bg-black/40 backdrop-blur-sm px-8 py-4 rounded-full border border-white/10">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => handleProgressClick(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white w-10 shadow-lg' 
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