export default function Internships() {
  return (
    <section id="internships" className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-gray-800">Internships</h2>
      <div className="mt-8 max-w-4xl mx-auto space-y-6">
        
        <div className="p-6 bg-white shadow-lg rounded-lg text-left">
          <h3 className="text-xl font-semibold text-gray-800">Frontend Developer Intern</h3>
          <p className="mt-2 text-gray-600">Company: XYZ Tech Solutions</p>
          <p className="mt-1 text-gray-600">Duration: Sep 2024 – Present</p>
          <p className="mt-2 text-gray-600">
            Worked on building responsive UIs using React, Tailwind CSS, and integrated APIs
            for live projects like job portals.
          </p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg text-left">
          <h3 className="text-xl font-semibold text-gray-800">UI/UX Design Intern</h3>
          <p className="mt-2 text-gray-600">Company: ABC Designs</p>
          <p className="mt-1 text-gray-600">Duration: Jun 2024 – Aug 2024</p>
          <p className="mt-2 text-gray-600">
            Designed user-friendly interfaces in Figma and collaborated with developers
            to implement modern layouts.
          </p>
        </div>

      </div>
    </section>
  );
}
