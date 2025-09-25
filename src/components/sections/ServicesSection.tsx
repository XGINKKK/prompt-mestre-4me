import ScrollReveal from '@/components/ui/ScrollReveal';

const ServicesSection = () => {
  const services = [
    {
      title: 'Projetos Complementares',
      description: 'Desenvolvimento de projetos técnicos especializados que complementam o projeto arquitetônico principal.',
      features: [
        'Projeto Estrutural',
        'Projeto Hidrossanitário',
        'Projeto Elétrico',
        'Projeto de PPCI',
        'Compatibilização de Projetos'
      ],
      icon: '🏗️'
    },
    {
      title: 'Assessoria Técnica',
      description: 'Consultoria especializada para garantir a excelência técnica e conformidade normativa dos seus projetos.',
      features: [
        'Consultoria em Normas Técnicas',
        'Acompanhamento de Obra',
        'Análise de Viabilidade',
        'Gestão de Projetos',
        'Suporte Técnico Especializado'
      ],
      icon: '📋'
    },
    {
      title: 'Laudos Técnicos',
      description: 'Elaboração de laudos especializados com rigor técnico e precisão para suas necessidades específicas.',
      features: [
        'Laudo de Vistoria Técnica',
        'Laudo Estrutural',
        'Laudo de Estabilidade',
        'Análise Patológica',
        'Parecer Técnico'
      ],
      icon: '📊'
    }
  ];

  return (
    <section id="services" className="relative z-10 py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nossos <span className="engineering-text-gradient">Serviços</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos soluções completas em engenharia, do conceito à entrega.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.2}>
              <div className="engineering-card p-8 h-full group hover:scale-105 transition-all duration-300">
                {/* Icon */}
                <div className="text-4xl mb-6 text-center">{service.icon}</div>
                
                {/* Title */}
                <h3 className="text-2xl font-semibold text-white mb-4 text-center">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground mb-6 text-center leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-white">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;