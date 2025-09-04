export interface Blog {
  esPopular?: boolean; // ahora es opcional
  slug: string;
  titulo: string;
  categoria: string;
  imagen: string;
  fecha: string;
  contenido: string;
  relacionados: string[];
}

export interface Category {
  id: string;
  nombre: string;
  color: string;
}