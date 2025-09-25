import ScrollReveal from '@/components/ui/ScrollReveal';
import CountUp from '@/components/ui/CountUp';

const MetricsSection = () => {
  const metrics = [
    {
      value: 300,
      suffix: '+',
      label: 'Projetos Entregues',
      description: 'Projetos desenvolvidos com excelência técnica'
    },
    {
      value: 200000,
      suffix: '+',
      label: 'M² Construídos',
      description: 'Metros quadrados de área desenvolvida'
    },
    {
      value: 100,
      suffix: '%',
      label: '% de Prazos Cumpridos',
      description: 'Compromisso com a pontualidade'
    }
  ];

  return (
    <section id="metrics" className="relative z-10 py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Resultados que{' '}
              <span className="engineering-text-gradient">Inspiram</span>
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Números que refletem nosso comprometimento com a excelência
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <ScrollReveal key={metric.label} delay={index * 0.2}>
              <div className="engineering-card p-8 text-center group hover:scale-105 transition-transform duration-300">
                <div className="mb-4">
                  <CountUp
                    value={metric.value}
                    suffix={metric.suffix}
                    className="text-4xl md:text-5xl font-bold text-white block"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{metric.label}</h3>
                <p className="text-white">{metric.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;