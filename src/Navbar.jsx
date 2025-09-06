export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      {/* <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16"> */}
        <h1 className="text-2xl font-bold text-blue-600">Meghana</h1>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#internships" className="hover:text-blue-600">Internships</a></li>
          <li><a href="#certificates" className="hover:text-blue-600">Certificates</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      {/* </div> */}
    </nav>
  );
}
