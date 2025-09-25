const BackgroundImage = () => {
  return (
    // Div que fica fixo, atrás de tudo, com opacidade mais visível no mobile
    <div 
      className="pointer-events-none fixed inset-0 z-[-1]"
      style={{
        opacity: 0.12, // Aumentei de 0.05 para 0.12 para melhor visibilidade no mobile
        transform: 'translateZ(0)', // Força aceleração de hardware no mobile
        willChange: 'opacity' // Otimiza para animações
      }}
    >
      <img
        src="https://i.imgur.com/gjBoffg.png" 
        alt=""
        className="w-full h-full object-cover invert"
        style={{
          imageRendering: 'auto', // Melhor renderização no mobile
          backfaceVisibility: 'hidden', // Otimização para mobile
          transform: 'translateZ(0)' // Força aceleração de hardware
        }}
        loading="eager" // Carrega imagem imediatamente
      />
    </div>
  );
};

export default BackgroundImage;