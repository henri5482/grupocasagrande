'use client';

import React from 'react';
import { FaXTwitter, FaInstagram, FaFacebook, FaYoutube, FaUsers } from 'react-icons/fa6';

const SocialStats: React.FC = () => {
  const stats = [
    { platform: 'X', followers: '157K', color: 'bg-zinc-800', icon: <FaXTwitter /> },
    { platform: 'Instagram', followers: '153K', color: 'bg-purple-600', icon: <FaInstagram /> },
    { platform: 'Facebook', followers: '68K', color: 'bg-blue-600', icon: <FaFacebook /> },
    { platform: 'YouTube', followers: '42K', color: 'bg-red-600', icon: <FaYoutube /> },
  ];

  return (
    <div className="bg-white rounded-3xl p-2 shadow-2xl max-w-sm mx-auto transform transition-shadow duration-500 hover:shadow-3xl border border-gray-100">
      
      {/* Sección superior con título e invitación */}
      <div className="flex flex-col items-center mb-6 text-center">
        <FaUsers className="text-4xl text-blue-500 mb-2" />
        <h3 className="text-2xl font-extrabold text-gray-800 mb-2 leading-tight">
          ¡Únete a nuestra <span className="text-blue-600">comunidad!</span>
        </h3>
        <p className="text-sm text-gray-600 font-medium">
          Síguenos y accede a un <span className="font-bold text-green-600">curso gratis</span>
        </p>
      </div>

      {/* Grid de estadísticas de redes sociales */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.platform}
            className={`${stat.color} rounded-xl p-4 text-white text-center flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300 cursor-pointer shadow-md`}
          >
            <div className="text-2xl ">{stat.icon}</div>
            {/* <div className="text-lg font-bold">{stat.followers}</div>
            <div className="text-xs opacity-90">{stat.platform}</div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialStats;