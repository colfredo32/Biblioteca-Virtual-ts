class Libro {
  titulo: string;
  autor: string;
  disponible: boolean;

  constructor(titulo: string, autor: string) {
    this.titulo = titulo;
    this.autor = autor;
    this.disponible = true;
  }
}

const libro = new Libro("El Quijote", "Cervantes");

console.log(libro);