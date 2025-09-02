"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Datos de ejemplo de los servicios con imágenes
const servicios = [
  {
    slug: "geotecnia",
    titulo: "Geotecnia",
    descripcion:
      "Estudios y soluciones en geotecnia para proyectos seguros y eficientes.",
    imagen: "/hero01.jpg",
  },
  {
    slug: "concreto",
    titulo: "Concreto",
    descripcion:
      "Servicios especializados en concreto estructural y de alta resistencia.",
    imagen: "/servicios/concreto.jpg",
  },
  {
    slug: "pavimentos",
    titulo: "Pavimentos",
    descripcion:
      "Construcción y mantenimiento de pavimentos de calidad.",
    imagen: "/servicios/pavimentos.jpg",
  },
];

const Servicios = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Imagen arriba */}
              <div className="relative w-full h-48">
                <Image
                  src={servicio.imagen}
                  alt={servicio.titulo}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Contenido */}
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#2c3e50]">
                  {servicio.titulo}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{servicio.descripcion}</p>
              </CardContent>
              <CardFooter>
                <Link href={`/servicios/${servicio.slug}`} passHref>
                  <Button className="w-full">Ver más</Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Servicios;
