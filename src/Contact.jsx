export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800">Contact Me</h2>
      <p className="mt-4 text-gray-600">Feel free to reach out for collaborations or opportunities.</p>
      
      <div className="mt-6 flex flex-col md:flex-row justify-center gap-6">
        <a
          href="mailto:meghs.in.0@gmail.com"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Email Me
        </a>
        <a
          href="https://github.com/meghanasmeghs"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/usthili-meghana/"
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
