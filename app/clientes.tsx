"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

const companies = [
  { name: "Cámara de Comercio de Lima", logo: "/logo01.png" },
  { name: "Club de Ingenieros", logo: "/logo02.png" },
  { name: "Asociación de Constructores 1", logo: "/logo03.png" },
  { name: "Asociación de Constructores 2", logo: "/logo04.png" },
  { name: "Asociación de Constructores 3", logo: "/logo05.png" },
];

const Cliente = () => {
  return (
    <div className={cn("w-full py-12 md:py-16 bg-gray-50 text-gray-800")}>
      {/* Sección de contenido superior */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Nuestros <span className="text-blue-600">Socios Estratégicos</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Colaboramos con las instituciones más prestigiosas del sector
        </p>
      </div>

      {/* Carrusel infinito */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee gap-8 py-4 whitespace-nowrap">
          {[...companies, ...companies].map((company, idx) => (
            <div
              key={idx}
              className="inline-flex items-center justify-center px-6"
            >
              <Image
                width={100}
                height={80}
                src={company.logo}
                alt={company.name}
                className="w-20 h-16 md:w-28 md:h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
        {/* Duplicamos para crear el efecto bucle */}
        <div className="absolute top-0 flex animate-marquee2 gap-8 py-4 whitespace-nowrap">
          {[...companies, ...companies].map((company, idx) => (
            <div
              key={`dup-${idx}`}
              className="inline-flex items-center justify-center px-6"
            >
              <Image
                width={100}
                height={80}
                src={company.logo}
                alt={company.name}
                className="w-20 h-16 md:w-28 md:h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Estilos globales */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes marquee2 {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
        }
        .animate-marquee:hover,
        .animate-marquee2:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Cliente;
