const BackgroundImage = () => {
  return (
    <div 
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: 'url(https://i.imgur.com/gjBoffg.png)',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
        opacity: 0.05,
        filter: 'invert(1)',
      }}
    />
  );
};

export default BackgroundImage;