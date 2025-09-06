export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800">Contact Me</h2>
      <p className="mt-4 text-gray-600">Feel free to reach out for collaborations or opportunities.</p>
      
      <div className="mt-6 flex flex-col md:flex-row justify-center gap-6">
        <a
          href="mailto:meghana@example.com"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Email Me
        </a>
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourlinkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
