import ScrollReveal from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const contactInfo = [
    {
      title: 'Endereço',
      details: [
        'Rua Miguel Matte, N 687, Sala 1804',
        'Bairro Pioneiros, Balneário Camboriú'
      ]
    },
    {
      title: 'Telefone',
      details: ['+55 (47) 99795-7480']
    },
    {
      title: 'Email',
      details: ['contato@4meengenharia.com']
    }
  ];

  return (
    <section id="contact" className="relative z-10 py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Entre em <span className="engineering-text-gradient">Contato</span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Tem uma ideia ou um projeto em mente? Adoraríamos ouvir sobre ele.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <ScrollReveal>
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={info.title} className="engineering-card p-6 flex items-start space-x-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-white">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {/* CTA Buttons */}
              <div className="space-y-4">
                <a
                  href="https://wa.me/5547997957480?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-white text-black hover:bg-accent hover:text-white transition-all duration-300 font-bold py-4">
                    WhatsApp - Resposta Rápida
                  </Button>
                </a>
                
                <a
                  href="mailto:contato@4meengenharia.com"
                  className="block"
                >
                  <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-bold py-4">
                    Enviar Email
                  </Button>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Map or Additional Content */}
          <ScrollReveal delay={0.2}>
            <div className="engineering-card p-8 h-full flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-white mb-4">Localização</h3>
                <p className="text-white leading-relaxed">
                  Atendemos toda a região de Santa Catarina, incluindo Grande Florianópolis, 
                  Itajaí, Blumenau e Joinville. Nossa localização estratégica em Balneário 
                  Camboriú nos permite oferecer suporte rápido e eficiente.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;