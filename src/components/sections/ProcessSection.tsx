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
    const handleWheel = (e) => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      
      // Verifica se a seção está visível e o scroll está sobre ela
      const isInSection = rect.top <= 100 && rect.bottom >= 100;
      
      if (isInSection && !isTransitioning) {
        e.preventDefault(); // Bloqueia o scroll vertical
        e.stopPropagation();
        
        setIsTransitioning(true);
        
        if (e.deltaY > 0 && currentIndex < steps.length - 1) {
          // Scroll para baixo - próximo step
          setCurrentIndex(prev => prev + 1);
        } else if (e.deltaY < 0 && currentIndex > 0) {
          // Scroll para cima - step anterior
          setCurrentIndex(prev => prev - 1);
        }
        
        // Reset após a transição
        setTimeout(() => {
          setIsTransitioning(false);
        }, 800);
      }
    };

    // Adiciona o event listener para toda a página
    document.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      document.removeEventListener('wheel', handleWheel);
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
      className="relative h-[500vh] bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      {/* Container sticky que fixa a seção */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="w-full relative">
          
          {/* Header fixo */}
          <div className="absolute top-16 left-0 right-0 text-center z-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Nosso <span className="engineering-text-gradient">Processo</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Da concepção à execução, um fluxo de trabalho preciso e transparente que garante excelência em cada etapa.
            </p>
          </div>

          {/* Container dos cards com transição horizontal */}
          <div className="relative h-screen flex items-center justify-center pt-32">
            <div 
              className="flex transition-transform duration-800 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${steps.length * 100}%`
              }}
            >
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="w-full flex-shrink-0 px-12"
                  style={{ width: `${100 / steps.length}%` }}
                >
                  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    
                    {/* Lado esquerdo - Número */}
                    <div className="flex justify-center lg:justify-end">
                      <div className="process-badge-fixed text-8xl font-bold">
                        {step.number}
                      </div>
                    </div>
                    
                    {/* Lado direito - Conteúdo */}
                    <div className="text-white space-y-8 lg:pl-12">
                      <div className="text-blue-400 font-semibold text-xl tracking-wider">
                        {step.number}.
                      </div>
                      
                      <h3 className="text-4xl lg:text-5xl font-bold leading-tight process-title-fixed">
                        {step.title}
                      </h3>
                      
                      <p className="text-white/80 text-xl leading-relaxed max-w-xl">
                        {step.description}
                      </p>
                      
                      {/* Imagem */}
                      <div className="process-image-fixed">
                        <img 
                          src={step.image} 
                          alt={step.title}
                          loading="lazy"
                          className="rounded-xl shadow-2xl max-w-md"
                        />
                      </div>
                    </div>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navegação com setas */}
          <button 
            onClick={() => currentIndex > 0 && setCurrentIndex(prev => prev - 1)}
            className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all disabled:opacity-50"
            disabled={currentIndex === 0}
          >
            ←
          </button>
          
          <button 
            onClick={() => currentIndex < steps.length - 1 && setCurrentIndex(prev => prev + 1)}
            className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all disabled:opacity-50"
            disabled={currentIndex === steps.length - 1}
          >
            →
          </button>
          
          {/* Indicadores */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => handleProgressClick(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-blue-500 w-8' : 'bg-white/30'
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