export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50 text-center pl-10">
      <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold">Kaamwaala Job Portal</h3>
          <p className="mt-3 text-gray-600">
            A live project where users can hire and get jobs. Built with React, 
            Tailwind, and Node.js.
          </p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold">Portfolio Website</h3>
          <p className="mt-3 text-gray-600">
            A personal portfolio built with React + Tailwind showcasing my skills 
            and projects.
          </p>
        </div>


      </div>
    </section>
  );
}