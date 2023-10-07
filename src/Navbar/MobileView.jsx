import { Link } from "react-router-dom";

function MobileView({ navbar, handleClickLink }) {
  return (
    <>
      <ul
        className={
          !navbar
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center font-bold items-center"
        }
      >
        <Link
          to="/"
          onClick={handleClickLink}
          className=" hover:scale-110 hover:text-yellow-800"
        >
          <li className="py-6 text-4xl">Home</li>
        </Link>

        <Link
          to="/about"
          onClick={handleClickLink}
          className="hover:scale-110 hover:text-yellow-800"
        >
          <li className="py-6 text-4xl ">About</li>
        </Link>

        <Link to="/skills" onClick={handleClickLink}>
          <li className="py-6 text-4xl hover:scale-110 hover:text-yellow-800">
            Skills
          </li>
        </Link>

        <Link to="/work" onClick={handleClickLink}>
          <li className="py-6 text-4xl hover:scale-110 hover:text-yellow-800">
            Work
          </li>
        </Link>

        <Link to="/contact" onClick={handleClickLink}>
          <li className="py-6 text-4xl hover:scale-110 hover:text-yellow-800">
            Contact
          </li>
        </Link>
      </ul>
    </>
  );
}

export default MobileView;
