"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// --- DATOS DE LOS CERTIFICADOS ---
const certificados = [
  {
    id: 1,
    imageSrc: "/certificado01.png",
    title: "Norma ISO 9001 - 2015",
    subtitle: "Gestión de la Calidad",
    description: "El alcance del Sistema de Gestión de Calidad ISO 9001: 2015 de INGEOTECON CONTRATISTAS Y EJECUTORES E.I.R.L., abarca los siguientes servicios:",
    services: [
      "Consultorías y peritajes técnicos en geotecnia, concreto, pavimentos y estudios geotécnicos.",
      "Controles de calidad en material de construcción tanto en laboratorio como en el terreno.",
      "Capacitaciones en geotecnia, geofísica, concreto y pavimentos."
    ]
  },
  {
    id: 2,
    imageSrc: "/certificado02.png",
    title: "LABORATORIO DE ENSAYO ACREDITADO",
    subtitle: "NTP-ISO/IEC 17025:2017 por el INACAL",
    description: "Actualmente nos encontramos acreditados en 20 métodos de ensayo. Nuestro alcance se encuentra detallado y disponible para consulta en la web de INACAL – DA.",
    services: []
  },
];

const Certificado = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-20 lg:space-y-24">
        {certificados.map((certificado) => (
          <div
            key={certificado.id}
            className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
          >
            {/* Sección de Texto */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="text-sm font-semibold text-[#e74c3c] mb-2">
                  EMPRESA CERTIFICADA
                </div>
                <h2 className="text-4xl font-extrabold text-[#2c3e50] tracking-tight mb-4">
                  {certificado.title}
                  <br />
                  <span className="text-3xl font-bold">{certificado.subtitle}</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {certificado.description}
                </p>
                {certificado.services.length > 0 && (
                  <ul className="text-left text-gray-700 space-y-3 mb-8 pl-4 lg:pl-0">
                    {certificado.services.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">✔</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                )}
                <div>
                  <button className='px-6 py-3 bg-[#e74c3c] text-white font-semibold rounded-lg shadow-md hover:bg-[#c0392b] transition duration-200'>
                    {certificado.id === 1 ? "CONOCER MÁS" : "Ver Alcance"}
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Sección de la Imagen del Certificado */}
            <div className="w-full lg:w-1/2 p-4 bg-white rounded-3xl shadow-lg flex justify-center items-center">
              <Image
                src={certificado.imageSrc}
                alt={certificado.title}
                width={800}
                height={600}
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificado;