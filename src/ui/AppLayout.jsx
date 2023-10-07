import { Link, Outlet } from "react-router-dom";
import Logo from "../assets/logo1.png";
import Menu from "../Navbar/Menu";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import MobileView from "../Navbar/MobileView";
import SocialIcons from "../Navbar/SocialIcons";

function AppLayout() {
  const [navbar, setNavbar] = useState(false);

  function handleToggle() {
    setNavbar(!navbar);
  }

  function handleClickLink() {
    setNavbar("");
  }

  return (
    <>
      <div
        className="fixed w-full h-[60px] flex justify-between items-center px-4
     text-gray-300 border-b-2 bg-[#0a192f]"
      >
        <Link to="/my-portfolio">
          <div className="ml-[-10px] py-4">
            <img
              src={Logo}
              alt="logo"
              style={{ width: "50px" }}
              className="hover:scale-110 duration-500"
            />
          </div>
        </Link>
        <Menu />
        <div onClick={handleToggle} className="md:hidden z-10">
          {!navbar ? (
            <div className=" hover:border-2">
              <FaBars className="hover:scale-110" />
            </div>
          ) : (
            <div className="hover:border-2">
              <FaTimes className="hover:scale-110" />
            </div>
          )}
        </div>
        <MobileView navbar={navbar} handleClickLink={handleClickLink} />
        <SocialIcons />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default AppLayout;
