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
      className="process-section-fixed"
    >
      <div className="process-sticky-fixed">
        {/* Header fixo */}
        <div className="absolute top-0 left-0 w-full z-20 p-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Nosso <span className="engineering-text-gradient">Processo</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Da concepção à execução, um fluxo de trabalho preciso e transparente que garante excelência em cada etapa.
            </p>
          </div>
        </div>

        {/* Container dos cards */}
        <div className="process-container-fixed">
          {steps.map((step, index) => {
            let cardClass = 'process-card-fixed';
            
            if (index === currentIndex) {
              cardClass += ' active';
            } else if (index < currentIndex) {
              cardClass += ' exiting';
            }
            
            return (
              <div 
                key={step.number}
                className={cardClass}
              >
                {/* Header com número e divisor */}
                <div className="process-header-fixed">
                  <div className="process-number-fixed">
                    <div className="process-badge-fixed">
                      {step.number}
                    </div>
                    <div className="process-divider-fixed" />
                  </div>
                  
                  <h3 className="process-title-fixed">
                    {step.title}
                  </h3>
                </div>

                {/* Conteúdo */}
                <div className="process-content-fixed">
                  <div className="process-description-fixed">
                    <p>{step.description}</p>
                  </div>

                  {/* Imagem */}
                  <div className="process-image-fixed">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Indicador de progresso */}
        <div className="process-progress-fixed">
          {steps.map((_, index) => {
            let stepClass = 'process-progress-step-fixed';
            
            if (index === currentIndex) {
              stepClass += ' active';
            } else if (index < currentIndex) {
              stepClass += ' completed';
            }
            
            return (
              <div 
                key={index}
                className={stepClass}
                onClick={() => handleProgressClick(index)}
                title={`Etapa ${index + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;