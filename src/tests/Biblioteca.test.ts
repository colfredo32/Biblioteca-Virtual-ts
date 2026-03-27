import { describe, it, expect, beforeEach } from "vitest";
import { Biblioteca } from "../servicios/Biblioteca";
import { Libro } from "../modelos/Libros";

describe("Biblioteca", () => {
  let biblioteca: Biblioteca;

  beforeEach(() => {
    biblioteca = new Biblioteca();
  });

  it("agrega un libro correctamente", () => {
    const libro = new Libro("El Quijote", "Cervantes");

    biblioteca.agregarLibro(libro);

    expect(biblioteca.listarLibros().length).toBe(1);
  });

  it("presta un libro disponible", () => {
    const libro = new Libro("1984", "Orwell");
    biblioteca.agregarLibro(libro);

    const resultado = biblioteca.prestarLibro("1984");

    expect(resultado).toBe("Libro prestado correctamente.");
  });

  it("no presta un libro ya prestado", () => {
    const libro = new Libro("1984", "Orwell");
    biblioteca.agregarLibro(libro);

    biblioteca.prestarLibro("1984");
    const resultado = biblioteca.prestarLibro("1984");

    expect(resultado).toBe("El libro ya está prestado.");
  });

  it("devuelve un libro correctamente", () => {
    const libro = new Libro("Clean Code", "Martin");
    biblioteca.agregarLibro(libro);

    biblioteca.prestarLibro("Clean Code");
    const resultado = biblioteca.devolverLibro("Clean Code");

    expect(resultado).toBe("Libro devuelto correctamente.");
  });
});