import {
  FaHome,
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaCertificate,
  FaBriefcase,
  FaEnvelope
} from "react-icons/fa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

{/* <FontAwesomeIcon icon={byPrefixAndName.far['badge-check']} /> */}



export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 h-full w-60 bg-black shadow-lg z-50 p-6 flex flex-col">

      {/* Logo */}
      <h1 className="text-2xl text-center font-bold text-blue-600 mt-3">Megh's</h1>
      <p className="text-xs text-white text-center mb-10">Portfolio</p>

      {/* Menu Items */}
      <ul className="space-y-6 text-gray-700 font-medium text-m">

        {/* Home */}
        <li>
          <a
            href="#home"
            className="flex items-center gap-3 px-3 py-2 rounded-lg group
                       hover:bg-blue-600 transition-all duration-200"
          >
            <FontAwesomeIcon
              icon={faHouse}
              className="text-white group-hover:text-white transition-all duration-200"
              size="lg"
            />
            <span className="text-white">Home</span>
          </a>
        </li>

        {/* About */}
        <li>
          <a
            href="#about"
            className="flex items-center gap-3 px-3 py-2 rounded-lg group
                       hover:bg-blue-600 transition-all duration-200"
          >
            <FontAwesomeIcon
              icon={faUser}
              className="text-white group-hover:text-white transition-all duration-200"
              size="lg"
            />
            <span className="text-white">About</span>
          </a>
        </li>

        {/* Skills */}
        <li>
          <a
            href="#skills"
            className="flex items-center gap-3 px-3 py-2 rounded-lg group
                       hover:bg-blue-600 transition-all duration-200"
          >
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-white group-hover:text-white transition-all duration-200"
              size="lg"
            />
            <span className="text-white">Skills</span>
          </a>
        </li>

        {/* Projects */}
        <li>
          <a
            href="#projects"
            className="flex items-center gap-3 px-3 py-2 rounded-lg group
                       hover:bg-blue-600 transition-all duration-200"
          >
            <FaProjectDiagram
              size={20}
              className="text-white group-hover:text-white transition-all duration-200"
            />
            <span className="text-white">Projects</span>
          </a>
        </li>

        {/* Internships */}
        <li>
          <a
            href="#internships"
            className="flex items-center gap-3 px-3 py-2 rounded-lg group
                       hover:bg-blue-600 transition-all duration-200"
          >
            <FaBriefcase
              size={20}
              className="text-white group-hover:text-white transition-all duration-200"
            />
            <span className="text-white">Internships</span>
          </a>
        </li>

        {/* Certificates */}
        <li>
          <a
            href="#certificates"
            className="flex items-center gap-3 px-3 py-2 rounded-lg group
                       hover:bg-blue-600 transition-all duration-200"
          >
            <FaCertificate
              size={20}
              className="text-white group-hover:text-white transition-all duration-200"
            />
            <span className="text-white">Certificates</span>
          </a>
        </li>

        {/* Contact */}
        <li>
          <a
            href="#contact"
            className="flex items-center gap-3 px-3 py-2 rounded-lg group
                       hover:bg-blue-600 transition-all duration-200"
          >
            <FaEnvelope
              size={20}
              className="text-white group-hover:text-white transition-all duration-200"
            />
            <span className="text-white">Contact</span>
          </a>
        </li>
      </ul>
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} Meghana Usthili.
      </div>
    </nav>
  );
}
