import ScrollReveal from '@/components/ui/ScrollReveal';

const AboutSection = () => {
  return (
    <section id="about" className="relative z-[5] py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <ScrollReveal>
            <div className="space-y-12">
              {/* Mission */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Nossa <span className="engineering-text-gradient">Missão</span>
                </h2>
                <p className="text-lg text-white leading-relaxed">
                  Revolucionar a engenharia por meio de soluções técnicas inovadoras, 
                  impulsionando a transição para práticas mais autênticas e precisas. 
                  Inspirar mudanças impactantes no setor da construção civil através de 
                  projetos complementares, assessorias e laudos de excelência.
                </p>
              </div>

              {/* Vision */}
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Nossa <span className="engineering-text-gradient">Visão</span>
                </h3>
                <p className="text-lg text-white leading-relaxed">
                  Ser referência em projetos complementares, assessoria técnica e laudos 
                  especializados, nacional e regionalmente. Desafiar os limites da engenharia 
                  tradicional, alcançando um futuro onde a precisão técnica e a inovação se 
                  entrelaçam, redefinindo o conceito de excelência em engenharia.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Image */}
          <ScrollReveal delay={0.2}>
            <div className="relative">
              <div className="engineering-card p-8 animate-glow flex items-center justify-center">
                <img 
                  src="/src/assets/4me-logo.png" 
                  alt="4ME Engenharia - Logo" 
                  className="w-full max-w-md h-auto object-contain"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 engineering-card p-6">
                <div className="text-center">
                  <div className="text-3xl font-black text-white mb-2">4ME</div>
                  <div className="text-sm text-accent">Engenharia</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;