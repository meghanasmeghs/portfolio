export default function Hero() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center bg-blue-50 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
        Hi, I'm <span className="text-purple-600">Meghana Usthili</span>
      </h1>
      <p className="mt-4 text-lg md:text-2xl text-gray-600">
        MERN Full Stack Developer | MCA Graduate
      </p>
      <div className="mt-6 flex space-x-4">
        <a href="#projects" className="px-6 py-2 bg-purple-700 text-white rounded-lg shadow hover:bg-purple-500">
          View My Work
        </a>
      </div>
    </section>
  );
}
