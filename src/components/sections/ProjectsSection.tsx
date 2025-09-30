import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionCTA from '@/components/ui/SectionCTA';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, CheckCircle } from 'lucide-react';

import project1 from '@/assets/projects/project-1.jpeg';
import project2 from '@/assets/projects/project-2.jpeg';
import project3 from '@/assets/projects/project-3.jpeg';
import project4 from '@/assets/projects/project-4.jpeg';
import project5 from '@/assets/projects/project-5.jpeg';
import project6 from '@/assets/projects/project-6.jpeg';

const projects = [
  {
    id: 1,
    image: project1,
    location: 'Condomínio Haras Rio do Ouro, Balneário Camboriú/SC',
    services: ['Estrutural', 'Hidrossanitário', 'Elétrico']
  },
  {
    id: 2,
    image: project2,
    location: 'Condomínio Green Ocean, Balneário Camboriú/SC',
    services: ['Estrutural', 'Hidrossanitário', 'Elétrico']
  },
  {
    id: 3,
    image: project3,
    location: 'Condomínio Green Ocean, Balneário Camboriú/SC',
    services: ['Estrutural', 'Hidrossanitário', 'Elétrico']
  },
  {
    id: 4,
    image: project4,
    location: 'Brusque/SC',
    services: ['Estrutural', 'Hidrossanitário', 'Elétrico']
  },
  {
    id: 5,
    image: project5,
    location: 'Balneário Camboriú/SC',
    services: ['Preventivo contra incêndio', 'Elétrico', 'Assessoria de aprovações']
  },
  {
    id: 6,
    image: project6,
    location: 'Itajaí/SC',
    services: ['Estrutural']
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative z-10 py-20 bg-background">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <Card className="engineering-card overflow-hidden group cursor-pointer h-full">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`Projeto em ${project.location}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-white font-medium">{project.location}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold text-white/80 mb-3">Projetos elaborados:</h3>
                    <ul className="space-y-2">
                      {project.services.map((service, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-white/90 text-sm">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal>
          <div className="mt-16">
            <SectionCTA 
              variant="default"
              title="Vamos criar algo incrível juntos?"
              subtitle="Entre em contato e vamos transformar sua ideia em um projeto real e bem executado"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProjectsSection;