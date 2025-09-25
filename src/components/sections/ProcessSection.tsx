import { useRef, useEffect, useState } from 'react';

const ProcessSection = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Briefing e levantamento',
      description: 'Requisitos detalhados, visitas técnicas e análise de viabilidade estrutural para garantir a execução perfeita.',
      image: 'https://i.imgur.com/WBPCAx2.png'
    },
    {
      number: '02',
      title: 'Projeto estrutural e fundações',
      description: 'Dimensionamento preciso e detalhamento técnico seguindo rigorosamente as normas NBR 6118/6122.',
      image: 'https://i.imgur.com/jvb23r8.png'
    },
    {
      number: '03',
      title: 'Hidrossanitário e elétrico',
      description: 'Compatibilização completa das instalações NBR 5626/5410 com projetos executivos claros e detalhados.',
      image: 'https://i.imgur.com/E3maufk.png'
    },
    {
      number: '04',
      title: 'PPCI e aprovações',
      description: 'Saídas de emergência, hidrantes, sinalização e aprovação completa junto ao Corpo de Bombeiros.',
      image: 'https://i.imgur.com/QoVjmMI.png'
    },
    {
      number: '05',
      title: 'Laudos e assessoria',
      description: 'Inspeções técnicas, ART e suporte completo em obra até a entrega final do projeto.',
      image: 'https://i.imgur.com/lWaT7vf.png'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;

      const container = containerRef.current;
      const track = trackRef.current;
      
      // Pega a posição do scroll da seção
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calcula o progresso do scroll (0 a 1)
      const scrollProgress = Math.max(0, Math.min(1, 
        (windowHeight - rect.top) / (windowHeight + rect.height)
      ));
      
      // Calcula quanto mover horizontalmente
      const maxScroll = track.scrollWidth - window.innerWidth;
      const translateX = scrollProgress * maxScroll;
      
      // Aplica a transformação
      track.style.transform = `translateX(-${translateX}px)`;
      
      // Atualiza o indicador de progresso
      const cardIndex = Math.floor(scrollProgress * (steps.length - 1));
      setCurrentIndex(cardIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Chama uma vez para definir a posição inicial

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [steps.length]);

  return (
    <section 
      ref={containerRef} 
      className="process-section-fake-scroll"
    >
      <div className="process-sticky-container">
        {/* Header fixo */}
        <div className="absolute top-0 left-0 w-full z-10 p-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Nosso <span className="engineering-text-gradient">Processo</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Da concepção à execução, um fluxo de trabalho preciso e transparente que garante excelência em cada etapa.
            </p>
          </div>
        </div>

        {/* Track horizontal que se move */}
        <div 
          ref={trackRef}
          className="process-horizontal-track"
        >
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="process-card-fake-scroll"
            >
              {/* Header com número e divisor */}
              <div className="process-header-fake-scroll">
                <div className="process-number-fake-scroll">
                  <div className="process-badge-fake-scroll">
                    {step.number}
                  </div>
                  <div className="process-divider-fake-scroll" />
                </div>
                
                <h3 className="process-title-fake-scroll">
                  {step.title}
                </h3>
              </div>

              {/* Conteúdo */}
              <div className="process-content-fake-scroll">
                <div className="process-description-fake-scroll">
                  <p>{step.description}</p>
                </div>

                {/* Imagem */}
                <div className="process-image-fake-scroll">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicador de progresso */}
        <div className="process-progress-indicator">
          {steps.map((_, index) => (
            <div 
              key={index}
              className={`process-progress-dot ${index === currentIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;