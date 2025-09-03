"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaClock, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

// Datos de ejemplo de los servicios con imágenes
const servicios = [
  {
    slug: "laboratorio",
    titulo: "Laboratorio Geotécnico",
    descripcion:
      "Estudios y soluciones en geotecnia para proyectos seguros y eficientes.",
    imagen: "/hero01.jpg",
  },
  {
    slug: "geotecnico",
    titulo: " Geotécnico",
    descripcion:
      "Estudios y soluciones en geotecnia para proyectos seguros y eficientes.",
    imagen: "/hero03.jpg",
  },
  {
    slug: "pavimento",
    titulo: "Laboratorio de Pavimento",
    descripcion:
      "Estudios y soluciones en geotecnia para proyectos seguros y eficientes.",
    imagen: "/hero05.jpg",
  },
];

const Servicios = () => {
  // ID del video de YouTube que quieres mostrar. 
  // Reemplaza "dQw4w9WgXcQ" con el ID de tu video.
  const youtubeVideoId = "dQw4w9WgXcQ";

  return (
    <section className="py-16 px-2 md:px-6 max-w-7xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl lg:text-4xl font-bold text-center mb-12 text-[#2c3e50]"
      >
        Nuestros Servicios
      </motion.h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {servicios.map((servicio, index) => (
          <motion.div
            key={servicio.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Link href={`/servicios/${servicio.slug}`} passHref>
              <Card className="relative shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300 overflow-hidden group h-80">
                {/* Imagen de fondo */}
                <Image
                  src={servicio.imagen}
                  alt={servicio.titulo}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="100vw"
                  priority={index === 0}
                />

                {/* Overlay oscuro */}
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    {servicio.titulo}
                  </h3>
                  <p className="text-gray-200 text-sm mb-4">
                    {servicio.descripcion}
                  </p>
                  <Button className="w-full md:w-1/2">Ver más</Button>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

     <div className="mt-16 md:mt-24">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold text-center mb-8 text-gray-800"
        >
          Mira Nuestro Video
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-3xl shadow-2xl"
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${youtubeVideoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>

      {/* --- Sección de Contacto --- */}
      <div className="py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gray-50 rounded-3xl p-6 md:p-12 border border-gray-200 shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            {/* Contacto */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
                Contáctanos
              </h3>
              <div className="space-y-4">
                <p className="flex items-center text-gray-600 text-lg">
                  <FaPhoneAlt className="text-[#2c3e50] w-5 h-5 mr-4 flex-shrink-0" />
                  +1 (234) 567-8900
                </p>
                <p className="flex items-center text-gray-600 text-lg">
                  <FaEnvelope className="text-[#2c3e50] w-5 h-5 mr-4 flex-shrink-0" />
                  info@laboratorio.com
                </p>
                <p className="flex items-center text-gray-600 text-lg">
                  <FaClock className="text-[#2c3e50] w-5 h-5 mr-4 flex-shrink-0" />
                  Lun-Vie: 8:00 AM - 6:00 PM
                </p>
              </div>
            </div>

            {/* Solicitar servicio */}
            <div className="border-t md:border-t-0 md:border-l border-gray-200 pt-8 md:pl-16 md:pt-0">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
                Solicita un Servicio
              </h3>
              <div className="space-y-4">
                <Button
                  className="w-full bg-[#2c3e50] hover:bg-[#1a242f] text-white py-6 text-lg rounded-xl shadow-lg cursor-pointer"
                >
                  Solicitar cotización
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-[#2c3e50] text-[#2c3e50] hover:bg-gray-100 py-6 text-lg rounded-xl transition-colors cursor-pointer"
                >
                  Agendar visita técnica
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Servicios;