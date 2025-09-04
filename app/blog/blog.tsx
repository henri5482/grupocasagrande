'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import blogsData from "@/app/data/blogs.json";
import categoriesData from "@/app/data/categories.json";
import { Blog, Category } from "@/app/types/blog";
import SocialStats from "@/app/blog/SocialStats";
import Newsletter from "@/app/blog/Newsletter";
import TrendingPosts from "@/app/blog/TrendingPosts";

const allBlogs: Blog[] = blogsData.map((blog) => ({
  ...blog,
  esPopular: blog.esPopular !== undefined ? blog.esPopular : false,
}));
const categories: Category[] = categoriesData;

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("todas");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Filtrar blogs según categoría y búsqueda
  const filteredBlogs = allBlogs.filter(blog => {
    const matchesCategory = selectedCategory === "todas" || 
      blog.categoria.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = blog.titulo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.contenido.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Artículos populares (con esPopular: true)
  const popularPosts = allBlogs.filter(blog => blog.esPopular);

  // Artículo destacado (el más reciente)
  const featuredBlog = filteredBlogs.length > 0 ? filteredBlogs[0] : null;
  const otherBlogs = filteredBlogs.slice(1);

  // Evitar renderizado hasta que el componente esté montado en el cliente
  if (!mounted) {
    return (
      <div className="min-h-screen bg-slate-50 pt-28">
        <div className="animate-pulse">
          <div className="h-96 bg-gradient-to-br from-slate-800 to-slate-900"></div>
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3 space-y-8">
                <div className="h-96 bg-slate-200 rounded-2xl"></div>
                <div className="grid md:grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="h-64 bg-slate-200 rounded-2xl"></div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div className="h-48 bg-slate-200 rounded-2xl"></div>
                <div className="h-64 bg-slate-200 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-28">
      {/* Modern Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto">
            {/* Trending Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm font-medium mb-8 backdrop-blur-sm">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
              </svg>
              Explorando el futuro del diseño
            </div>
            
            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Arquitectura &<br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Diseño
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Explorando las últimas tendencias en arquitectura, diseño sostenible y proyectos que están redefiniendo nuestro mundo construido.
            </p>
            
            {/* Enhanced Search Bar */}
            <div className="max-w-2xl mx-auto relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar artículos, tendencias, proyectos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-16">
        {/* Modern Category Filters */}
        <div className="mb-16">
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <button
              onClick={() => setSelectedCategory("todas")}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === "todas"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 hover:border-slate-300"
              }`}
            >
              Todas las categorías
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.nombre)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.nombre
                    ? `${category.color} text-white shadow-lg transform scale-105`
                    : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 hover:border-slate-300"
                }`}
              >
                {category.nombre}
              </button>
            ))}
          </div>

          {/* Results Count with better styling */}
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-600 text-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {filteredBlogs.length} artículo{filteredBlogs.length !== 1 ? 's' : ''} encontrado{filteredBlogs.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>

        {filteredBlogs.length === 0 ? (
          <div className="text-center py-24">
            <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">No se encontraron artículos</h2>
            <p className="text-slate-600 mb-8 max-w-md mx-auto">
              Intenta con otros términos de búsqueda o selecciona una categoría diferente.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("todas");
              }}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Enhanced Featured Article */}
              {featuredBlog && (
                <article className="mb-16 group">
                  <Link href={`/blog/${featuredBlog.slug}`}>
                    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-slate-300 hover:-translate-y-1">
                      <div className="relative h-96 w-full overflow-hidden">
                        <Image
                          src={featuredBlog.imagen}
                          alt={featuredBlog.titulo}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        <div className="absolute top-6 left-6">
                          <span className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium backdrop-blur-sm">
                            {featuredBlog.categoria}
                          </span>
                        </div>
                        <div className="absolute top-6 right-6">
                          <div className="bg-white/10 backdrop-blur-sm rounded-xl px-3 py-1">
                            <span className="text-white text-xs font-medium">Destacado</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-8">
                        <div className="flex items-center text-slate-500 text-sm mb-4">
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          {new Date(featuredBlog.fecha).toLocaleDateString("es-ES", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                        <h2 className="text-3xl font-bold text-slate-800 mb-4 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                          {featuredBlog.titulo}
                        </h2>
                        <p className="text-slate-600 line-clamp-3 leading-relaxed text-lg mb-6">
                          {featuredBlog.contenido}
                        </p>
                        <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                          <span className="mr-2">Leer artículo completo</span>
                          <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              )}

              {/* Enhanced Articles Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {otherBlogs.map((blog: Blog) => (
                  <article key={blog.slug} className="group">
                    <Link href={`/blog/${blog.slug}`}>
                      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden transition-all duration-500 hover:shadow-lg hover:border-slate-300 hover:-translate-y-1">
                        <div className="relative h-56 w-full overflow-hidden">
                          <Image
                            src={blog.imagen}
                            alt={blog.titulo}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                          <div className="absolute top-4 left-4">
                            <span className="bg-white/90 backdrop-blur-sm text-slate-800 px-3 py-1.5 rounded-lg text-xs font-medium">
                              {blog.categoria}
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center text-slate-500 text-xs mb-3">
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            {new Date(blog.fecha).toLocaleDateString("es-ES", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </div>
                          <h3 className="text-xl font-bold text-slate-800 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                            {blog.titulo}
                          </h3>
                          <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed mb-4">
                            {blog.contenido}
                          </p>
                          <div className="flex items-center text-blue-600 text-sm font-semibold group-hover:text-blue-700 transition-colors duration-300">
                            <span className="mr-1">Leer más</span>
                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>

              {/* Enhanced Pagination */}
              {filteredBlogs.length > 6 && (
                <div className="flex justify-center mt-16">
                  <div className="flex items-center space-x-2">
                    <button className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center font-medium text-sm hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 disabled:opacity-50">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    {[1, 2, 3].map(page => (
                      <button
                        key={page}
                        className={`w-12 h-12 rounded-xl flex items-center justify-center font-medium text-sm transition-all duration-200 ${
                          page === 1 
                            ? "bg-blue-600 text-white shadow-lg"
                            : "bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                    <span className="px-3 py-2 text-slate-400">...</span>
                    <button className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center font-medium text-sm hover:bg-slate-50 hover:border-slate-300 transition-all duration-200">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Enhanced Sidebar */}
            <aside className="space-y-8">
              {/* Social Stats */}
              <SocialStats />

              {/* Trending Posts - Solo mostrar si hay posts populares */}
              {popularPosts.length > 0 && (
                <TrendingPosts posts={popularPosts} />
              )}

              {/* Newsletter */}
              <Newsletter />

              {/* Enhanced Cultural Bonus */}
              <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 border border-slate-200 rounded-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative p-6">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mx-auto mb-4">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Bono Cultural 2025</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Disponible para compras y suscripciones de contenido cultural
                    </p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center border border-white/50">
                    <div className="flex items-center justify-center mb-2">
                      <svg className="w-4 h-4 text-slate-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0h6m0 0v12a2 2 0 01-2 2H10a2 2 0 01-2-2V7h6z" />
                      </svg>
                      <span className="font-medium text-slate-700 text-sm">04/09/2025</span>
                    </div>
                    <div className="font-bold text-blue-600">Casa B en Artemisa</div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        )}
      </main>
    </div>
  );
}