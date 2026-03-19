import { Libro } from "../modelos/Libros";
import { Usuario } from "../modelos/Usuarios";

export class Biblioteca {
  libros: Libro[];
  usuarios: Usuario[];

  constructor() {
    this.libros = [];
    this.usuarios = [];
  }

  agregarLibro(libro: Libro): void {
    this.libros.push(libro);
  }

  registrarUsuario(usuario: Usuario): void {
    this.usuarios.push(usuario);
  }

  listarLibros(): Libro[] {
    return this.libros;
  }

  listarLibrosDisponibles(): Libro[] {
    return this.libros.filter((libro) => libro.disponible);
  }

  prestarLibro(titulo: string): string {
    const libro = this.libros.find((libro) => libro.titulo === titulo);

    if (!libro) {
      return "El libro no existe en la biblioteca.";
    }

    if (!libro.disponible) {
      return "El libro ya está prestado.";
    }

    libro.disponible = false;
    return "Libro prestado correctamente.";
  }

  devolverLibro(titulo: string): string {
    const libro = this.libros.find((libro) => libro.titulo === titulo);

    if (!libro) {
      return "El libro no existe en la biblioteca.";
    }

    if (libro.disponible) {
      return "El libro ya estaba disponible.";
    }

    libro.disponible = true;
    return "Libro devuelto correctamente.";
  }
}