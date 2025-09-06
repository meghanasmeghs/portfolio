export default function About() {
    return (
        <section id="about" className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
                    <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                        I’m a passionate <span className="font-semibold">Frontend Developer</span>
                        skilled in HTML, CSS, JavaScript, React, and UI/UX design.
                        I enjoy building responsive, user-friendly websites and have
                        worked on projects like{" "}
                        <span className="font-semibold">Kaamwaala (Job Portal)</span>.
                        <br />
                        <br />
                        Currently, I’m expanding my skills in modern frontend frameworks
                        and design systems.
                    </p>
                    <a href="/Meghana_CV.pdf" download className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300">
                        Download CV
                    </a>
                </div>

                <div className="flex justify-center">
                    <img
                        src="/meghana.jpg" 
                        alt="Meghana Usthili"
                        className="rounded-2xl shadow-lg w-72 h-72 object-cover"
                    />
                </div>
            </div>
            <div className="mt-16 max-w-4xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
          Education
        </h3>
        <div className="space-y-6">
          <div className="p-4 border-l-4 border-purple-500 bg-gray-50 shadow rounded">
            <h4 className="text-lg font-semibold text-gray-800">Master of Computer Applications (MCA)</h4>
            <p className="text-gray-600">Atria Institute of Technology — 2024</p>
          </div>
          <div className="p-4 border-l-4 border-purple-500 bg-gray-50 shadow rounded">
            <h4 className="text-lg font-semibold text-gray-800">Bachelor’s Degree</h4>
            <p className="text-gray-600">[Your College Name] — [Year]</p>
          </div>
        </div>
      </div>
        </section>
    );
}
