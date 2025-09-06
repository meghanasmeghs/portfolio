export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h3 className="text-lg font-semibold text-white">Meghana Usthili</h3>
          <p className="text-sm text-gray-400">Frontend Developer | React Enthusiast</p>
        </div>

        {/* Center - Navigation */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#internships" className="hover:text-white">Internships</a>
          <a href="#certificates" className="hover:text-white">Certificates</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>

        {/* Right Side - Social Icons */}
        <div className="flex space-x-4">
          <a href="mailto:meghana@gmail.com" target="_blank" rel="noreferrer" className="hover:text-white">
            📧
          </a>
          <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer" className="hover:text-white">
            🌐
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer" className="hover:text-white">
            🔗
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} Meghana Usthili. All rights reserved.
      </div>
    </footer>
  );
}
