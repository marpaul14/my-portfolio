function Home() {
  return (
    <div className="bg-[#D3D3D3] w-full h-screen ">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
        <div className="border-y-2 mx-auto border-[#0a192f]">
          <p className="text-yellow-800 text-2xl sm:text-4xl py-2 hover:text-[#0a192f] duration-1000 hover:cursor-default">
            Hi, my name is
          </p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#0a192f] hover:text-yellow-800 duration-1000 hover:cursor-default">
            Marpaul Jay Bunani
          </h1>
          <h2 className="text-3xl sm:text-6xl font-bold text-[#0a192f] hover:text-yellow-800 duration-1000 hover:cursor-default">
            I&apos;m a Frontend Web Developer
          </h2>
          <p className="text-yellow-800 py-4 max-w-[700px] text-2xl sm:text-3xl hover:text-[#0a192f] duration-1000 hover:cursor-default">
            I&apos;m on a mission to transform ideas into pixel-perfect
            realities.
            <br /> With a strong foundation in HTML, CSS, JavaScript and React.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
