import {
  FaBriefcase,
  FaCertificate,
  FaEnvelope,
} from "react-icons/fa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck, faBarsProgress } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 h-full w-60 bg-black shadow-lg z-50 p-6 flex flex-col">

      <h1 className="text-2xl text-center font-bold text-purple-600 mt-3">Megh's</h1>
      <p className="text-xs text-white text-center mb-10">Portfolio</p>

      <ul className="space-y-6 font-medium text-m">

        {/* Home */}
        <li>
          <a href="#home" className="flex items-center gap-3 px-3 py-2 rounded-lg group hover:bg-purple-600 transition-all">
            <FontAwesomeIcon icon={faHouse} className="text-white opacity-70 group-hover:opacity-100" size="lg" />
            <span className="text-white">Home</span>
          </a>
        </li>

        {/* About */}
        <li>
          <a href="#about" className="flex items-center gap-3 px-3 py-2 rounded-lg group hover:bg-purple-600 transition-all">
            <FontAwesomeIcon icon={faUser} className="text-white opacity-70 group-hover:opacity-100" size="lg" />
            <span className="text-white">About</span>
          </a>
        </li>

        {/* Skills */}
        <li>
          <a href="#skills" className="flex items-center gap-3 px-3 py-2 rounded-lg group hover:bg-purple-600 transition-all">
            <FontAwesomeIcon icon={faCircleCheck} className="text-white opacity-70 group-hover:opacity-100" size="lg" />
            <span className="text-white">Skills</span>
          </a>
        </li>

        {/* Projects */}
        <li>
          <a href="#projects" className="flex items-center gap-3 px-3 py-2 rounded-lg group hover:bg-purple-600 transition-all">
            <FontAwesomeIcon icon={faBarsProgress} className="text-white opacity-70 group-hover:opacity-100" size="lg" />
            <span className="text-white">Projects</span>
          </a>
        </li>

        {/* Internships */}
        <li>
          <a href="#internships" className="flex items-center gap-3 px-3 py-2 rounded-lg group hover:bg-purple-600 transition-all">
            <FaBriefcase className="text-white opacity-70 group-hover:opacity-100" size={20} />
            <span className="text-white">Internships</span>
          </a>
        </li>

        {/* Certificates */}
        <li>
          <a href="#certificates" className="flex items-center gap-3 px-3 py-2 rounded-lg group hover:bg-purple-600 transition-all">
            <FaCertificate className="text-white opacity-70 group-hover:opacity-100" size={20} />
            <span className="text-white">Certificates</span>
          </a>
        </li>

        {/* Contact */}
        <li>
          <a href="#contact" className="flex items-center gap-3 px-3 py-2 rounded-lg group hover:bg-purple-600 transition-all">
            <FaEnvelope className="text-white opacity-70 group-hover:opacity-100" size={20} />
            <span className="text-white">Contact</span>
          </a>
        </li>

      </ul>

      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} Meghana Usthili
      </div>
    </nav>
  );
}
