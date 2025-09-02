"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import servicios from "@/app/data/servicios.json";
import Navbar from "@/app/navbar";
import Footer from "@/app/footer";

// Define el tipo para los parámetros
interface PageProps {
  params: Promise<{ slug: string }>;
}

const ServicioPage = ({ params }: PageProps) => {
  // Usamos React.use() para desempaquetar los parámetros
  const { slug } = React.use(params);
  const servicio = servicios.find((s) => s.slug === slug);

  if (!servicio) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-6 text-center">
        <h1 className="text-3xl font-bold text-red-500">Servicio no encontrado</h1>
        <p className="mt-4 text-gray-600">
          El servicio que buscas no existe o fue removido.
        </p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="w-full">
        {/* Hero */}
        <div className="relative w-full h-[30vh] md:h-[40vh] md:py-40 overflow-hidden">
          <Image
            src={servicio.imagen}
            alt={servicio.titulo}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center pt-10 md:pt-24 justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white text-center"
            >
              {servicio.titulo}
            </motion.h1>
          </div>
        </div>

        {/* Contenido */}
        <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            {servicio.contenido}
          </motion.p>

          {/* Lista de detalles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {servicio.detalles.map((detalle, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl shadow-lg bg-white border-l-4 border-[#2c3e50]"
              >
                <p className="text-gray-800 font-medium">{detalle}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div> 
      <Footer/>
    </>
  );
};

export default ServicioPage;