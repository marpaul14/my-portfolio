import { Link } from "react-router-dom";

function Menu() {
  return (
    <>
      <nav>
        <ul className=" hidden font-bold text-md md:flex">
          <Link to="/">
            <li className=" hover:bg-yellow-800 hover:scale-110">Home</li>
          </Link>

          <Link to="/about">
            <li className=" hover:bg-yellow-800 hover:scale-110">About</li>
          </Link>

          <Link to="/skills">
            <li className=" hover:bg-yellow-800 hover:scale-110">Skills</li>
          </Link>

          <Link to="/work">
            <li className=" hover:bg-yellow-800 hover:scale-110">Work</li>
          </Link>

          <Link to="/contact">
            <li className=" hover:bg-yellow-800 hover:scale-110">Contact</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Menu;
