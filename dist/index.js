"use strict";
class Libro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponible = true;
    }
}
const libro = new Libro("El Quijote", "Cervantes");
console.log(libro);
