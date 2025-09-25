import ScrollReveal from '@/components/ui/ScrollReveal';

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative z-[5] py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Portfólio de <span className="engineering-text-gradient">Projetos</span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto mb-12">
              Explore a diversidade e a qualidade dos nossos trabalhos, que transformam visões em realidade.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-2xl mx-auto text-center">
            <div className="engineering-card p-12">
              <h3 className="text-2xl font-semibold text-white mb-4">Em Breve...</h3>
              <p className="text-white leading-relaxed">
                Estamos preparando uma galeria especial dos nossos projetos mais impactantes. 
                Em breve você poderá conhecer em detalhes o nosso portfólio de excelência.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProjectsSection;