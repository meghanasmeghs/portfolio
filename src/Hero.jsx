export default function Hero() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-50 to-blue-100 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
        Hi, I'm <span className="text-blue-600">Meghana Usthili</span>
      </h1>
      <p className="mt-4 text-lg md:text-2xl text-gray-600">
        Frontend Developer | MCA Graduate
      </p>
      <div className="mt-6 flex space-x-4">
        <a href="#projects" className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
          View My Work
        </a>

      </div>
    </section>
  );
}
