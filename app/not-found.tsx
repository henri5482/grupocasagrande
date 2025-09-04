"use client";

import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaHardHat, FaHome, FaEnvelope, FaTools } from "react-icons/fa";
import Navbar from "./navbar";
import Footer from "./footer";

export default function NotFoundPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 text-center relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-200 rounded-full opacity-30"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-200 rounded-full opacity-30"></div>
        
        {/* Iconos flotantes de construcción */}
        <div className="absolute top-1/4 left-1/4 animate-float">
          <FaTools className="text-yellow-500 text-xl opacity-60" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float delay-1000">
          <FaHardHat className="text-blue-500 text-xl opacity-60" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-float delay-2000">
          <FaTools className="text-orange-500 text-xl opacity-60" />
        </div>

        {/* Contenedor principal */}
        <div className="relative z-10 bg-white/95 backdrop-blur-sm p-10 rounded-3xl shadow-2xl max-w-2xl w-full text-center border border-white/20">
          {/* Badge de error */}
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            Error 404
          </div>
          
          <h1 className="text-8xl font-black text-gray-800 mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            404
          </h1>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            ¡Ups! Página en construcción
          </h2>
          
          <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-md mx-auto">
            Parece que has encontrado un área que todavía estamos desarrollando. 
            Nuestro equipo de arquitectos digitales está trabajando duro para crear 
            algo increíble aquí.
          </p>

          {/* Ilustración */}
          <div className="mb-8 mx-auto max-w-xs">
            <Image
              src="/404-illustration.svg"
              alt="Página en construcción"
              width={320}
              height={240}
              className="mx-auto"
            />
          </div>

          {/* Estadísticas divertidas */}
          <div className="bg-gray-50 p-4 rounded-xl mb-8">
            <p className="text-sm text-gray-500 mb-2">¿Sabías que?</p>
            <p className="text-gray-700 font-medium">
              El 47% de los usuarios esperan que una página web cargue en 2 segundos o menos
            </p>
          </div>

          {/* Opciones de navegación */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Link
              href="/"
              className="flex items-center justify-center gap-3 bg-blue-600 text-white px-6 py-4 rounded-xl font-medium shadow-lg hover:bg-blue-700 transition-all transform hover:scale-105"
            >
              <FaHome className="text-lg" /> 
              Volver al inicio
            </Link>
            
            <Link
              href="/blog"
              className="flex items-center justify-center gap-3 bg-gray-100 text-gray-800 px-6 py-4 rounded-xl font-medium shadow-md hover:bg-gray-200 transition-all"
            >
              <FaArrowLeft className="text-lg" /> 
              Ir al blog
            </Link>
          </div>

          {/* Contacto */}
          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-500 mb-3">¿Necesitas ayuda inmediata?</p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <FaEnvelope className="text-sm" />
              Contáctanos
            </Link>
          </div>
        </div>

        {/* Mensaje inspirador */}
        <div className="relative z-10 mt-8 max-w-lg mx-auto">
          <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-white/30">
            <p className="text-gray-700 italic">
              La arquitectura es el juego sabio, correcto y magnífico de los volúmenes 
              bajo la luz. - Le Corbusier
            </p>
          </div>
        </div>
      </div>
      
      {/* Añadir estilos CSS para animación */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
      
      <Footer />
    </>
  );
}