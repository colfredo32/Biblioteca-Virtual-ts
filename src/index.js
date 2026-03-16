"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Libro {
    titulo;
    autor;
    disponible;
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponible = true;
    }
}
const libro = new Libro("El Quijote", "Cervantes");
console.log(libro);
//# sourceMappingURL=index.js.map