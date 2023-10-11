import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Resume from "../assets/resume.pdf";

function SocialIcons() {
  return (
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
      <ul>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0a192f]">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://www.linkedin.com/in/marpaul-jay-bunani-51a2b327b/"
          >
            LinkedIn <FaLinkedin size={30} />
          </a>
        </li>

        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://github.com/marpaul14"
          >
            Github <FaGithub size={30} />
          </a>
        </li>

        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://twitter.com/marpaul_14"
          >
            Twitter <FaTwitter size={30} />
          </a>
        </li>

        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href={Resume}
            download="Marpaul Resume"
          >
            Resume <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialIcons;
