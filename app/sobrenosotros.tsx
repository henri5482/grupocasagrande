/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FaAward } from 'react-icons/fa';
import { LuMapPin } from "react-icons/lu";

const imageSrc = "/sobrenosotros.png";

const Sobrenosotros = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Sección de la imagen (aparece primero en el código) */}
          <div className="relative w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={imageSrc}
              alt="Equipo de Ingeotecon Contratistas y Ejecutores EIRL"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Sección de texto y contenido (aparece segundo en el código) */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-extrabold text-[#2c3e50] tracking-tight mb-4">
              Sobre nosotros
            </h2>
            <h3 className="text-3xl font-bold text-[#2c3e50] mb-6">
              Ingeotecon Contratistas y Ejecutores EIRL
            </h3>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              Somos una empresa peruana que ofrece servicios de consultoría y
              ensayos en laboratorio al más alto nivel profesional y de
              experiencia, en el campo de la ingeniería geotécnica, geofísica,
              sondeos, diamantinos, concreto, pavimentos, ensayos de
              laboratorio, ensayos de campo, medio ambiente, entre otros.
            </p>

            {/* Certificaciones */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <FaAward className="text-[#e74c3c] text-2xl flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  <span className="font-semibold text-gray-800">Empresa Certificada con la Norma ISO 9001 - 2015</span>{" "}
                  Gestión de la Calidad.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <LuMapPin className="text-[#e74c3c] text-2xl flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  <span className="font-semibold text-gray-800">LABORATORIO DE ENSAYO ACREDITADO</span>{" "}
                  ante el NTP-ISO/IEC 17025:2017 por el INACAL
                </p>
              </div>
              <div className="flex items-start gap-3">
                <FaAward className="text-[#e74c3c] text-2xl flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  <span className="font-semibold text-gray-800">Empresa Certificada con la Norma ISO 45001 - 2018</span>{" "}
                  Gestión de la Salud y Seguridad en el Trabajo.
                </p>
              </div>
            </div>

            {/* Botón de acción */}
            <button className='px-6 py-3 bg-[#e74c3c] text-white font-semibold rounded-lg shadow-md hover:bg-[#c0392b] transition duration-200'>
              Descargar nuestro brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobrenosotros;