const BackgroundImage = () => {
  return (
    <>
      {/* Estampa que aparece em todo lugar EXCETO na hero section */}
      <div className="pointer-events-none fixed inset-0 z-[-1] opacity-[0.15]">
        <img
          src="https://i.imgur.com/gjBoffg.png"
          alt=""
          className="w-full h-full object-cover invert"
          style={{
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
          }}
        />
      </div>
      
      {/* Overlay que esconde a estampa apenas na hero section */}
      <div 
        className="pointer-events-none fixed inset-0 z-[-1]"
        style={{
          background: 'linear-gradient(to bottom, black 0%, black 100vh, transparent 100vh)',
        }}
      />
    </>
  );
};

export default BackgroundImage;