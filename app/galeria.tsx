'use client';

import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

// --- DATOS DE LOS SERVICIOS ---
const serviciosData = [
  {
    id: 1,
    imageSrc: "/hero01.jpg",
    title: "Implementación de Laboratorio en Obra",
    description: "Servicios especializados de laboratorio en sitio para control de calidad durante la construcción.",
  },
  {
    id: 2,
    imageSrc: "/hero02.jpg",
    title: "Estudios Geotécnicos",
    description: "Análisis detallados del suelo y roca para cimentaciones y diseño de estructuras.",
  },
  {
    id: 3,
    imageSrc: "/hero03.jpg",
    title: "Control de Calidad en Obras Civiles",
    description: "Supervisión y garantía de calidad en todos los procesos constructivos.",
  },
  {
    id: 4,
    imageSrc: "/hero04.jpg",
    title: "Consultoría Especializada",
    description: "Asesoramiento técnico especializado en geotecnia e ingeniería civil.",
  },
];

const Galeria = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Portafolio de Servicios
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Soluciones diseñadas para ti
          </motion.p>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-orange-500 mx-auto mt-4"
          />
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-5">
          {serviciosData.map((servicio, index) => (
            <motion.div
              key={servicio.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut",
                delay: index * 0.1 
              }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-48 bg-gray-100">
                <Image
                  src={servicio.imageSrc}
                  alt={servicio.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-800 mb-3 text-lg">
                  {servicio.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {servicio.description}
                </p>
                <button className="flex items-center text-orange-600 font-medium text-sm hover:text-orange-700 transition-colors">
                  Ver detalles <FaArrowRight className="ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Servicio destacado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-8 border border-orange-200"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">95%</span>
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Implementación de Laboratorio en Obra
              </h3>
              <p className="text-gray-700 mb-4">
                Nuestro servicio principal con el más alto índice de satisfacción clientes. 
                Más de 200 proyectos completados exitosamente.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Solicitar cotización
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Galeria;