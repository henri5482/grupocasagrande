'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import blogsData from '@/app/data/blogs.json';
import { Blog } from '@/app/types/blog';
import { IoArrowForward } from 'react-icons/io5'; // Importamos un icono para el botón

interface RelatedNewsProps {
  currentPostSlug: string;
}

const RelatedNews: React.FC<RelatedNewsProps> = ({ currentPostSlug }) => {
  const currentPost = blogsData.find((blog: Blog) => blog.slug === currentPostSlug);
  
  if (!currentPost || !currentPost.relacionados?.length) return null;

  const relatedPosts = blogsData.filter((blog: Blog) => 
    currentPost.relacionados.includes(blog.slug)
  );

  return (
    <section className="mt-16 bg-gray-50 py-12 rounded-2xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Más noticias que te pueden interesar</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedPosts.map((post: Blog) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} passHref className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                
                {/* Contenedor de la imagen */}
                <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                  <Image 
                    src={post.imagen} 
                    alt={post.titulo} 
                    fill 
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                
                {/* Contenido de la tarjeta */}
                <div className="p-5 flex flex-col flex-grow">
                  <span className="text-xs text-gray-500 mb-2">
                    {new Date(post.fecha).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors duration-300">
                    {post.titulo}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {post.contenido.substring(0, 150)}...
                  </p>
                  
                  <div className="mt-auto">
                    <button className="flex items-center text-blue-600 text-sm font-bold group-hover:underline">
                      Leer más <IoArrowForward className="ml-1 text-base transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedNews;