import React from "react";
import Link from "next/link";
import Image from "next/image";
import blogsData from "@/app/data/blogs.json";
import { Blog } from "@/app/types/blog";
import Navbar from "@/app/navbar";
import Footer from "@/app/footer";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: BlogPostProps) {
  // Esperar a que los parámetros se resuelvan
  const resolvedParams = await params;
  
  // Encontrar el blog que coincide con el 'slug' de la URL
  const blog = blogsData.find((b: Blog) => b.slug === resolvedParams.slug);

  // Si el blog no se encuentra, mostrar un mensaje de error
  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-xl text-gray-600">Blog no encontrado.</p>
      </div>
    );
  }

  // Filtrar los blogs relacionados basándose en el array de 'relacionados' del blog actual
  const relatedBlogs = blogsData.filter((b: Blog) =>
    blog.relacionados.includes(b.slug)
  );

  return (
    <>
      <Navbar /> 
      <div className="min-h-screen bg-gray-50 pt-28">
        <main className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contenido Principal del Blog */}
            <article className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8">
              <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
                <Image
                  src={blog.imagen}
                  alt={blog.titulo}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <p className="text-gray-500 text-sm mb-2">
                {blog.categoria} -{" "}
                {new Date(blog.fecha).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <h1 className="text-4xl font-bold mb-4 text-gray-900">
                {blog.titulo}
              </h1>
              <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap">
                {blog.contenido}
              </p>
            </article>

            {/* Barra lateral de Noticias Relacionadas */}
            <aside className="lg:col-span-1 space-y-8">
              {relatedBlogs.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    Noticias relacionadas
                  </h2>
                  <div className="space-y-4">
                    {relatedBlogs.map((relatedBlog: Blog) => (
                      <Link
                        key={relatedBlog.slug}
                        href={`/blog/${relatedBlog.slug}`}
                        passHref
                      >
                        <div className="flex items-center space-x-4 p-4 rounded-lg transition-colors hover:bg-gray-100 cursor-pointer">
                          <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                            <Image
                              src={relatedBlog.imagen}
                              alt={relatedBlog.titulo}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold text-gray-800">
                              {relatedBlog.titulo}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {relatedBlog.categoria}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}