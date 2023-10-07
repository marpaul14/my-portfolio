import htmlImg from "../assets/html.png";
import cssImg from "../assets/css.png";
import jsImg from "../assets/javascript.png";
import reactImg from "../assets/react.png";
import tailwindImg from "../assets/tailwind.png";
import reactRouterImg from "../assets/react-router.png";
import githubImg from "../assets/github.png";
import reduxImg from "../assets/redux1.png";

function Skills() {
  return (
    <div name="skills" className="bg-[#D3D3D3] text-[#0a192f] w-full h-screen">
      {/*Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justtify-center w-full h-full">
        <div className="flex justify-center pt-15 sm:pt-20">
          <p className="text-5xl sm:text-5xl font-bold inline border-b-4 border-[#0a192f] pt-[80px]  hover:text-yellow-800 duration-1000 hover:cursor-default hover:border-yellow-800">
            Skills
          </p>
        </div>
        <p className="py-4 text-2xl flex justify-center font-semibold  hover:text-yellow-800 duration-1000 hover:cursor-default">
          These are the technologies I&apos;ve worked with.
        </p>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 text-center gap-4 p-8">
          <div className="shadow-md shadow-yellow-800 hover:scale-110 hover:bg-[#0a192f] hover:text-white duration-500">
            <img className="w-20 mx-auto" src={htmlImg} alt="html logo" />
            <p className="my-4 font-m">HTML</p>
          </div>

          <div className="shadow-md shadow-yellow-800 hover:scale-110 hover:bg-[#0a192f] hover:text-white duration-500">
            <img className="w-20 mx-auto" src={cssImg} alt="css logo" />
            <p className="my-4 font-m">CSS</p>
          </div>

          <div className="shadow-md shadow-yellow-800 hover:scale-110 hover:bg-[#0a192f] hover:text-white duration-500">
            <img className="w-20 mx-auto" src={jsImg} alt="javascript logo" />
            <p className="my-4 font-m">Javascript</p>
          </div>

          <div className="shadow-md shadow-yellow-800 hover:scale-110 hover:bg-[#0a192f] hover:text-white duration-500">
            <img className="w-20 mx-auto" src={reactImg} alt="react logo" />
            <p className="my-4 font-m">ReactJs</p>
          </div>

          <div className="shadow-md shadow-yellow-800 hover:scale-110 hover:bg-[#0a192f] hover:text-white duration-500">
            <img
              className="w-20 mx-auto"
              src={tailwindImg}
              alt="tailwindcss logo"
            />
            <p className="my-4 font-m">Tailwind CSS</p>
          </div>

          <div className="shadow-md shadow-yellow-800 hover:scale-110 hover:bg-[#0a192f] hover:text-white duration-500">
            <img
              className="w-20 mx-auto pt-5"
              src={reactRouterImg}
              alt="react-router logo"
            />
            <p className="my-4 pt-4 font-m">React-router</p>
          </div>

          <div className="shadow-md shadow-yellow-800 hover:scale-110 hover:bg-[#0a192f] hover:text-white duration-500">
            <img className="w-20 mx-auto" src={reduxImg} alt="redux logo" />
            <p className="my-4 font-m">Redux</p>
          </div>

          <div className="shadow-md shadow-yellow-800 hover:scale-110 hover:bg-[#0a192f] hover:text-white duration-500">
            <img className="w-20 mx-auto" src={githubImg} alt="github logo" />
            <p className="my-4 font-m">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
