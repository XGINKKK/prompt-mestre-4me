const BackgroundImage = () => {
  return (
    <>
      {/* Estampa de fundo visível em todas as seções exceto hero */}
      <div className="pointer-events-none fixed inset-0 z-[1] opacity-30">
        <div 
          className="w-full h-full invert"
          style={{
            backgroundImage: 'url(https://i.imgur.com/gjBoffg.png)',
            backgroundRepeat: 'repeat',
            backgroundSize: '300px 300px',
            backgroundPosition: 'center',
          }}
        />
      </div>
      
      {/* Overlay que esconde a estampa APENAS na primeira seção (hero) */}
      <div 
        className="pointer-events-none fixed top-0 left-0 right-0 z-[2] bg-black"
        style={{
          height: '100vh',
        }}
      />
    </>
  );
};

export default BackgroundImage;