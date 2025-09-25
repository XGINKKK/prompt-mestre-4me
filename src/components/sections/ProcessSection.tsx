import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const ProcessSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

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

  return (
    <section ref={containerRef} className="relative z-10 bg-background process-section-wrapper">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Nosso <span className="engineering-text-gradient">Processo</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Da concepção à execução, um fluxo de trabalho preciso e transparente que garante excelência em cada etapa.
            </p>
          </div>
        </ScrollReveal>

        {/* Container com scroll horizontal estilo DynastyAI */}
        <div className="process-horizontal-container">
          <div className="process-horizontal-scroll">
            {steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 0.1}>
                <motion.div 
                  className="process-step-card"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Header com número e divisor */}
                  <div className="process-step-header">
                    <div className="process-step-number">
                      <div className="process-number-badge">
                        {step.number}
                      </div>
                      <div className="process-divider" />
                    </div>
                    
                    <h3 className="process-step-title">
                      {step.title}
                    </h3>
                  </div>

                  {/* Descrição */}
                  <div className="process-step-description">
                    <p>{step.description}</p>
                  </div>

                  {/* Imagem com efeito parallax */}
                  <motion.div 
                    style={{ y: index % 2 === 0 ? y : undefined }}
                    className="process-step-image"
                  >
                    <img 
                      src={step.image} 
                      alt={step.title}
                      loading="lazy"
                    />
                  </motion.div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
            <div className="w-2 h-2 bg-white/60 rounded-full"></div>
            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;