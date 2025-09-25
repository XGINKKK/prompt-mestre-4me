const BackgroundImage = () => {
  return (
    // Background pattern com CSS inline para evitar conflitos no mobile
    <div 
      className="pointer-events-none fixed inset-0"
      style={{
        zIndex: -1,
        opacity: 0.15,
        background: '#000000', // Background preto sólido primeiro
        transform: 'translateZ(0)',
        willChange: 'opacity'
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundImage: 'url(https://i.imgur.com/gjBoffg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'invert(1)', // Inverte cores (preto vira branco)
          opacity: 1,
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      />
    </div>
  );
};

export default BackgroundImage;