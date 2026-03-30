import { describe, it, expect, beforeEach } from "vitest";
import { Biblioteca } from "../servicios/Biblioteca";
import { Libro } from "../modelos/Libros";
import { Usuario } from "../modelos/Usuarios";

describe("Biblioteca", () => {
  let biblioteca: Biblioteca;

  beforeEach(() => {
    biblioteca = new Biblioteca();
  });

  it("agrega un material correctamente", () => {
    const libro = new Libro(1, "El Quijote", "Cervantes", "Novela");

    biblioteca.agregarMaterial(libro);

    expect(biblioteca.listarMateriales().length).toBe(1);
  });

  it("registra un usuario correctamente", () => {
    const usuario = new Usuario(1, "Santino", "colo@gmail.com");

    biblioteca.registrarUsuario(usuario);

    expect(biblioteca.listarUsuarios().length).toBe(1);
  });

  it("presta un material disponible", () => {
    const libro = new Libro(1, "1984", "Orwell", "Distopía");
    const usuario = new Usuario(1, "Santino", "colo@gmail.com");

    biblioteca.agregarMaterial(libro);
    biblioteca.registrarUsuario(usuario);

    const resultado = biblioteca.prestarMaterial("1984", 1, "2026-03-19");

    expect(resultado).toBe("Préstamo realizado correctamente.");
    expect(libro.estaDisponible()).toBe(false);
  });

  it("no presta un material ya prestado", () => {
    const libro = new Libro(1, "1984", "Orwell", "Distopía");
    const usuario = new Usuario(1, "Santino", "colo@gmail.com");

    biblioteca.agregarMaterial(libro);
    biblioteca.registrarUsuario(usuario);

    biblioteca.prestarMaterial("1984", 1, "2026-03-19");
    const resultado = biblioteca.prestarMaterial("1984", 1, "2026-03-20");

    expect(resultado).toBe("El material ya está prestado.");
  });

  it("devuelve un material correctamente", () => {
    const libro = new Libro(1, "Clean Code", "Martin", "Programación");
    const usuario = new Usuario(1, "Santino", "colo@gmail.com");

    biblioteca.agregarMaterial(libro);
    biblioteca.registrarUsuario(usuario);

    biblioteca.prestarMaterial("Clean Code", 1, "2026-03-19");
    const resultado = biblioteca.devolverMaterial("Clean Code");

    expect(resultado).toBe("Material devuelto correctamente.");
    expect(libro.estaDisponible()).toBe(true);
  });
});