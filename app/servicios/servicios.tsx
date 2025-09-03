"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Datos de ejemplo de los servicios con imágenes
const servicios = [
  {
    slug: "consultoria",
    titulo: "Consultoría Geotécnica",
    descripcion:
      "Estudios y soluciones en geotecnia para proyectos seguros y eficientes.",
    imagen: "/hero01.jpg",
  },
  {
    slug: "laboratorio",
    titulo: "Laboratorio",
    descripcion:
      "Estudios y soluciones en geotecnia para proyectos seguros y eficientes.",
    imagen: "/hero03.jpg",
  },
  {
    slug: "geotecnico",
    titulo: "Geotécnico",
    descripcion:
      "Estudios y soluciones en geotecnia para proyectos seguros y eficientes.",
    imagen: "/hero05.jpg",
  }
];

const Servicios = () => {
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
    </section>
  );
};

export default Servicios;
