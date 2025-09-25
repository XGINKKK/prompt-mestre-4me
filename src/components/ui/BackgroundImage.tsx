const BackgroundImage = () => {
  return (
    <>
      {/* Estampa de fundo visível em todas as seções exceto hero */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-20">
        <div 
          className="w-full h-full invert"
          style={{
            backgroundImage: 'url(https://i.imgur.com/gjBoffg.png)',
            backgroundRepeat: 'repeat',
            backgroundSize: '400px 400px', // Tamanho definido para melhor visibilidade
            backgroundPosition: 'center',
          }}
        />
      </div>
      
      {/* Overlay que esconde a estampa APENAS na primeira seção (hero) */}
      <div 
        className="pointer-events-none fixed top-0 left-0 right-0 z-0 bg-black"
        style={{
          height: '100vh', // Cobre apenas a altura da viewport (hero section)
        }}
      />
    </>
  );
};

export default BackgroundImage;