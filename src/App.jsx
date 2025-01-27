import React, { useState } from "react";
import jsPDF from "jspdf";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import dk84 from './assets/img/dk84.jpg';
import MarioKart from './assets/img/MarioKart.jpg';

ChartJS.register(BarElement, CategoryScale, LinearScale);

export default function App() {
  const [cvData, setCvData] = useState({
    name: "Sergi Ponga Cano",
    profession: "Desarrollador Web",
    experience: "5 años de experiencia en desarrollo full-stack",
    email: "sergiponcan@campus.monlau.com",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCvData((prev) => ({ ...prev, [name]: value }));
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Curriculum Vitae", 10, 10);
    doc.text(`Nombre: ${cvData.name}`, 10, 20);
    doc.text(`Profesión: ${cvData.profession}`, 10, 30);
    doc.text(`Experiencia: ${cvData.experience}`, 10, 40);
    doc.text(`Email: ${cvData.email}`, 10, 50);
    doc.save("cv.pdf");
  };

  const chartData = {
    labels: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    datasets: [
      {
        label: "Nivel de Habilidad (%)",
        data: [90, 80, 85, 75, 70],
        backgroundColor: ["#4F46E5", "#22D3EE", "#FBBF24", "#14B8A6", "#EF4444"],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 py-8 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-indigo-400 tracking-wide">
            Mi Portfolio
          </h1>
          <p className="text-gray-300 mt-2 text-lg">
            Una breve descripción sobre mí y mis habilidades técnicas.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulario */}
          <section className="bg-gray-800 shadow-lg rounded-xl p-8">
            <h2 className="text-3xl font-bold text-indigo-400 mb-6">
              Editar CV
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  value={cvData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Profesión
                </label>
                <input
                  type="text"
                  name="profession"
                  value={cvData.profession}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Experiencia
                </label>
                <textarea
                  name="experience"
                  value={cvData.experience}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={cvData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
                />
              </div>
            </form>
          </section>

          {/* Vista Previa */}
          <section className="bg-gray-800 shadow-lg rounded-xl p-8">
            <h2 className="text-3xl font-bold text-indigo-400 mb-6">
              Vista Previa del CV
            </h2>
            <p className="text-lg">
              <strong className="text-indigo-300">Nombre:</strong> {cvData.name}
            </p>
            <p className="text-lg">
              <strong className="text-indigo-300">Profesión:</strong>{" "}
              {cvData.profession}
            </p>
            <p className="text-lg">
              <strong className="text-indigo-300">Experiencia:</strong>{" "}
              {cvData.experience}
            </p>
            <p className="text-lg">
              <strong className="text-indigo-300">Email:</strong> {cvData.email}
            </p>
            <button
              onClick={generatePDF}
              className="mt-6 bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg transition duration-300 text-white font-bold"
            >
              Descargar PDF
            </button>
          </section>
        </div>

        {/* About Section */}
        <section className="bg-gray-800 shadow-lg rounded-xl p-8 mt-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-indigo-400 mb-6">Sobre mí</h2>
            <p className="text-lg text-gray-300">
            Soy Sergi Ponga Cano, estudiante de informática y alguien apasionado por la tecnología. Me encanta aprender cosas nuevas, especialmente relacionadas con la programación y el mundo digital. A pesar de pasar muchas horas entre códigos, siempre intento dedicar tiempo a las personas que más quiero. En mis ratos libres, jugar a videojuegos es mi forma favorita de relajarme, divertirme y conectar con otras personas.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-12 bg-gray-800 shadow-lg rounded-xl mt-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-indigo-400 mb-6">Proyectos</h2>
            <div className="flex flex-wrap justify-center">
              {/* Proyecto 1 */}
              <div className="w-full md:w-1/3 p-4 flex justify-center">
                <div className="bg-gray-700 shadow-lg rounded-lg overflow-hidden">
                  <img src={dk84} alt="Proyecto DK84" className="w-full h-48 object-contain mx-auto p-4"/>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-indigo-300 mb-2">Proyecto DK84</h3>
                    <p className="text-gray-300">He realizado este juego en Phaser</p>
                  </div>
                </div>
              </div>

              {/* Proyecto 2 */}
              <div className="w-full md:w-1/3 p-4 flex justify-center">
                <div className="bg-gray-700 shadow-lg rounded-lg overflow-hidden">
                  <img src={MarioKart} alt="Proyecto Mario Kart" className="w-full h-48 object-contain mx-auto p-4"/>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-indigo-300 mb-2">Proyecto Mario Kart</h3>
                    <p className="text-gray-300">He realizado este juego en Phaser</p>
                  </div>
                </div>
              </div>
              {/* Añadir más proyectos según sea necesario */}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-6 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://github.com/tu-usuario" className="text-gray-400 hover:text-white">
            <i className="fab fa-github fa-lg"></i>
          </a>
          <a href="https://linkedin.com/in/tu-usuario" className="text-gray-400 hover:text-white">
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          {/* Añadir más íconos sociales según sea necesario */}
        </div>
        <p className="text-gray-400">
          © 2025 Sergi Ponga - Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
