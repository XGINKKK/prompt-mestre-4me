const BackgroundImage = () => {
  return (
    // Div que fica fixo, atrás de tudo, e quase transparente
    <div className="pointer-events-none fixed inset-0 z-[-1] opacity-[0.05]">
      <img
        src="https://i.imgur.com/gjBoffg.png" // O link da estampa
        alt=""
        className="w-full h-full object-cover invert" // 'invert' transforma a estampa preta em branca
      />
    </div>
  );
};

export default BackgroundImage;