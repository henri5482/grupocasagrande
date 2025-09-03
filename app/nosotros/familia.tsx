"use client"
import React from 'react';
import { motion } from 'framer-motion';

const imageSrc = "/sobrenosotros.png";

// Definir transiciones por separado para TypeScript
const containerTransition = {
  staggerChildren: 0.2,
  delayChildren: 0.3
} as const;

const itemTransition = {
  duration: 0.6,
  ease: "easeOut" as const
};

const imageTransition = {
  duration: 0.8,
  ease: "easeOut" as const
};

const buttonTransition = {
  duration: 0.5,
  ease: "easeOut" as const
};

const buttonHoverTransition = {
  duration: 0.2,
  ease: "easeInOut" as const
};

// Animaciones
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: containerTransition
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: itemTransition
  }
};

const imageVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: imageTransition
  }
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: buttonTransition
  },
  hover: {
    scale: 1.05,
    transition: buttonHoverTransition
  }
};

const Familia = () => {
  return (
    <div className="bg-white md:py-16 pt-16 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          
          {/* Sección de la imagen (lado izquierdo) */}
          <motion.div 
            className="relative w-full lg:w-1/2"
            variants={imageVariants}
          >
            <motion.div 
              className="rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={imageSrc}
                alt="Equipo de Geofal S.A.C."
                className="object-cover w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
            
            {/* Elemento decorativo sutil con animación */}
            
          </motion.div>

          {/* Sección de texto y contenido (lado derecho) */}
          <motion.div 
            className="w-full lg:w-1/2"
            variants={containerVariants}
          >
            <motion.div 
              className="mb-8"
              variants={itemVariants}
            >
              <motion.span 
                className="inline-block bg-[#e74c3c] text-white text-sm font-semibold px-4 py-1 rounded-full mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Nuestra Familia
              </motion.span>
              <motion.h2 
                className="text-4xl font-extrabold text-[#2c3e50] tracking-tight mb-4"
                variants={itemVariants}
              >
                Somos La Familia Casagrande
              </motion.h2>
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
            >
              <motion.p 
                className="text-gray-600 leading-relaxed text-lg"
                variants={itemVariants}
              >
                En <span className="font-semibold text-[#2c3e50]">Geofal S.A.C.</span>, desde nuestra fundación en 2012, trabajamos con firmeza para posicionarnos como un referente en el campo de la ingeniería Civil, especializados en Geotecnia y Laboratorio de Materiales.
              </motion.p>

              <motion.p 
                className="text-gray-600 leading-relaxed text-lg"
                variants={itemVariants}
              >
                Con más de <span className="font-semibold text-[#2c3e50]">12 años de experiencia</span>, brindamos soluciones efectivas y de alta calidad, adaptadas a las necesidades específicas de nuestros clientes.
              </motion.p>

              <motion.p 
                className="text-gray-600 leading-relaxed text-lg"
                variants={itemVariants}
              >
                Contamos con un equipo de profesionales altamente capacitados y técnicos especializados, quienes nos permiten ofrecer un servicio preciso, veraz y confiable.
              </motion.p>
            </motion.div>

            {/* Botón de acción con animaciones */}
            <motion.button 
              className='group mt-8 px-4 py-4 md:px-8 md:py-4 bg-[#e74c3c] text-white font-semibold rounded-lg shadow-lg transition-all duration-300'
              variants={buttonVariants}
              whileHover="hover"
            >
              Descargar nuestro brochure
              <motion.span 
                className="ml-2 inline-block"
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Familia;