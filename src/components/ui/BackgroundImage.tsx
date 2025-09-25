const BackgroundImage = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] opacity-[0.05]">
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
  );
};

export default BackgroundImage;