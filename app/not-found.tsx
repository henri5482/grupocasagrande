// src/app/servicios/not-found.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/app/navbar";
import Footer from "@/app/footer";

const NotFoundPage = () => {
  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            {/* Icono de error */}
            <div className="mb-8">
              <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <svg 
                  className="w-12 h-12 text-red-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
                  />
                </svg>
              </div>
            </div>

            {/* Texto principal */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Servicio No Encontrado
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
              Lo sentimos, el servicio que estás buscando no existe o ha sido movido a otra ubicación.
            </p>

            {/* Información adicional */}
            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">
                ¿Necesita ayuda?
              </h2>
              <p className="text-blue-700 mb-4">
                Nuestros expertos están disponibles para asistirle con cualquier consulta sobre nuestros servicios.
              </p>
              <div className="space-y-2 text-sm text-blue-600">
                <p>📞 +1 (234) 567-8900</p>
                <p>✉️ info@casagrandegeotecnia.com</p>
                <p>🕘 Lun-Vie: 8:00 AM - 6:00 PM</p>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link 
                href="/servicios"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Volver a Servicios
              </Link>
              
              <Link 
                href="/"
                className="border border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Ir al Inicio
              </Link>
            </div>

            {/* Servicios sugeridos */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Nuestros Servicios Principales
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <Link 
                  href="/servicios/geotecnia"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm transition-colors duration-200"
                >
                  Geotecnia
                </Link>
                <Link 
                  href="/servicios/concreto"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm transition-colors duration-200"
                >
                  Concreto
                </Link>
                <Link 
                  href="/servicios/pavimentos"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm transition-colors duration-200"
                >
                  Pavimentos
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default NotFoundPage;