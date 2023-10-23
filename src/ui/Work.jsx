import PizzaImg from "../assets/projects/getyo-pizza.png";
// import realEstate from "../assets//projects/realestate.jpg";
import MoviehubImg from "../assets/projects/moviehub.jpg";
import TravelImg from "../assets/projects/travellist.png";
import PhilBankImg from "../assets/projects/phil-bank.png";
import NikeStoreImg from "../assets/projects/justdoit-sensation.png";

function Work() {
  return (
    <div
      name="work"
      className="bg-[#D3D3D3] w-full h-full md:h-[100dvh] text-[#0a192f]"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-6 flex flex-col justify-center h-full md:flex md:flex-col-2 shadow-2xl">
        <div className="pb-5 pt-10 sm:pt-20">
          <p className="py-10 text-3xl sm:text-4xl text-center font-semibold  hover:text-yellow-800 duration-1000 hover:cursor-default">
            Check out some of my recent work.
          </p>
        </div>

        {/*Grid container*/}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          {/*Card Container*/}
          <div
            style={{ backgroundImage: `url(${PizzaImg})` }}
            className="shadow-lg shadow-yellow-800 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="ml-3 text-2xl font-bold text-white tracking-wider hover:text-[#0a192f] duration-1000 hover:cursor-default">
                Get&apos;yo Pizza Co.
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://marpaul14.github.io/Getyo-Pizza"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#0a192f] font-bold text-lg hover:scale-110">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/marpaul14/Getyo-Pizza"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#0a192f] font-bold text-lg hover:scale-110">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${NikeStoreImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                JustDoIt Sensation
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://justdoit-sensation-store.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/marpaul14/justdoit-sensation-store"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${MoviehubImg})` }}
            className="shadow-lg shadow-yellow-800 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider ml-7 hover:text-[#0a192f] duration-1000 hover:cursor-default">
                MovieHub
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://marpaul14.github.io/moviehub/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#0a192f] font-bold text-lg hover:scale-110">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/marpaul14/moviehub"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#0a192f] font-bold text-lg hover:scale-110">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${TravelImg})` }}
            className="shadow-lg shadow-yellow-800 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider ml-7 hover:text-[#0a192f] duration-1000 hover:cursor-default">
                Travel List
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://marpaul14.github.io/my-travel-list/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#0a192f] font-bold text-lg hover:scale-110">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/marpaul14/my-travel-list"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#0a192f] font-bold text-lg hover:scale-110">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${PhilBankImg})` }}
            className="shadow-lg shadow-yellow-800 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider ml-8 hover:text-[#0a192f] duration-1000 hover:cursor-default">
                Phil-Bank
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://marpaul14.github.io/phil-bank/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#0a192f] font-bold text-lg hover:scale-110">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/marpaul14/phil-bank"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#0a192f] font-bold text-lg hover:scale-110">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* <div
            style={{ backgroundImage: `url(${realEstate})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Work;
