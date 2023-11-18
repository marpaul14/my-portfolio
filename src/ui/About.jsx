function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#D3D3D3] text-[#0a192f] ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="bg-[#D3D3D3] border-b-2 border-y-[#0a192f] shadow-2xl">
          <div className="max-w-[1000px] w-full flex justify-center gap-8">
            <div className="sm:text-right pb-8 pl-4 pt-4">
              <p className="text-4xl sm:text-6xl font-bold inline border-b-4 border-[#0a192f]  hover:text-yellow-800 hover:border-yellow-800 duration-1000 hover:cursor-default">
                About
              </p>
            </div>
          </div>
          <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
            <div className="sm:text-right">
              <p className="text-3xl text-center sm:text-center sm:text-5xl font-semibold  hover:text-yellow-800 duration-1000 hover:cursor-default">
                Hi, Nice to meet you!
                <br /> Please take a look around.
              </p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl pb-5 text-yellow-800 sm:text-[#0a192f] font-semibold  hover:text-yellow-800 duration-1000 hover:cursor-default">
                My goal is to secure a Junior level Front-end Web Developer
                position where I can continue to refine my skills, learn from
                experienced professionals, and contribute to creating visually
                stunning and highly functional web applications. I am dedicated
                to staying current with industry trends and best practices,
                especially in the realm of React.js, to excel in this
                ever-evolving field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
