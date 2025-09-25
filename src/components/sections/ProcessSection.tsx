import { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const ProcessSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Briefing e levantamento',
      description: 'Requisitos, visitas e viabilidade técnica detalhada para garantir o sucesso do projeto desde o início.',
      image: 'https://i.imgur.com/WBPCAx2.png'
    },
    {
      number: '02',
      title: 'Projeto estrutural e fundações',
      description: 'Dimensionamento e detalhamento seguindo NBR 6118/6122 com precisão técnica e inovação.',
      image: 'https://i.imgur.com/jvb23r8.png'
    },
    {
      number: '03',
      title: 'Hidrossanitário e elétrico',
      description: 'Compatibilização NBR 5626/5410 com executivos claros e detalhamento impecável.',
      image: 'https://i.imgur.com/E3maufk.png'
    },
    {
      number: '04',
      title: 'PPCI e aprovações',
      description: 'Saídas, hidrantes, sinalização e aprovação no CBMSC com agilidade e conformidade total.',
      image: 'https://i.imgur.com/QoVjmMI.png'
    },
    {
      number: '05',
      title: 'Laudos e assessoria',
      description: 'Inspeções, ART e suporte em obra até a entrega com acompanhamento técnico especializado.',
      image: 'https://i.imgur.com/lWaT7vf.png'
    }
  ];

  return (
    <section className="relative z-10 bg-background">
      {/* Header Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nosso <span className="engineering-text-gradient">Processo</span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Da ideia à execução, um fluxo de trabalho preciso e transparente.
            </p>
          </div>
        </div>
      </div>

      {/* Swiper Container */}
      <div className="processos-swiper-wrapper" style={{ height: '100vh' }}>
        <Swiper
          direction="horizontal"
          slidesPerView={1}
          spaceBetween={0}
          mousewheel={true}
          pagination={{ 
            clickable: true,
            dynamicBullets: true
          }}
          modules={[Mousewheel, Pagination]}
          className="processos-swiper h-full"
          onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        >
          {steps.map((step, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-full px-8 lg:px-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
                  
                  {/* Visual Element */}
                  <motion.div 
                    className="flex justify-center items-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative">
                      {/* 3D Visual Element */}
                      <div className="w-80 h-80 relative">
                        {/* Gradient Background */}
                        <div 
                          className="absolute inset-0 rounded-3xl opacity-20"
                          style={{
                            background: `linear-gradient(135deg, 
                              hsl(${index * 60}, 70%, 60%), 
                              hsl(${(index * 60) + 30}, 80%, 70%)
                            )`
                          }}
                        />
                        
                        {/* Main 3D Element */}
                        <motion.div
                          className="absolute inset-4 rounded-2xl shadow-2xl overflow-hidden group"
                          style={{
                            background: `linear-gradient(135deg, 
                              hsl(${index * 60}, 60%, 50%), 
                              hsl(${(index * 60) + 30}, 70%, 60%)
                            )`,
                            boxShadow: `0 25px 50px hsla(${index * 60}, 70%, 50%, 0.3)`
                          }}
                          whileHover={{ 
                            scale: 1.05, 
                            rotateY: 10,
                            rotateX: 5
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Glass Effect Overlay */}
                          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                          
                          {/* Step Image */}
                          <img 
                            src={step.image} 
                            alt={step.title}
                            className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                          />
                          
                          {/* Number Overlay */}
                          <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                            <span className="text-2xl font-bold text-white">{step.number}</span>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.div 
                    className="space-y-8 text-center lg:text-left"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {/* Process Number */}
                    <div className="flex items-center justify-center lg:justify-start space-x-4">
                      <span 
                        className="text-6xl font-bold opacity-20"
                        style={{ color: `hsl(${index * 60}, 70%, 60%)` }}
                      >
                        {step.number}
                      </span>
                      <div 
                        className="w-24 h-1 rounded"
                        style={{ backgroundColor: `hsl(${index * 60}, 70%, 60%)` }}
                      />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-xl text-white/80 leading-relaxed max-w-lg">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProcessSection;