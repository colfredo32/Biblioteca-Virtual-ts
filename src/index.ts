import { Biblioteca } from "./servicios/Biblioteca";
import { Libro } from "./modelos/Libros";
import { Revista } from "./modelos/Revista";
import { Usuario } from "./modelos/Usuarios";

const biblioteca = new Biblioteca();

const libro1 = new Libro(1, "El Quijote", "Miguel de Cervantes", "Novela");
const libro2 = new Libro(2, "1984", "George Orwell", "Distopía");
const revista1 = new Revista(3, "National Geographic", 120, "Marzo");

const usuario1 = new Usuario(1, "Santino", "colo@gmail.com");

biblioteca.agregarMaterial(libro1);
biblioteca.agregarMaterial(libro2);
biblioteca.agregarMaterial(revista1);

biblioteca.registrarUsuario(usuario1);

console.log("=== Materiales cargados ===");
console.log(biblioteca.listarMateriales().map((m) => m.getDescripcion()));

console.log("=== Materiales disponibles ===");
console.log(biblioteca.listarDisponibles().map((m) => m.getDescripcion()));

console.log("=== Préstamo ===");
console.log(biblioteca.prestarMaterial("1984", 1, "2026-03-19"));

console.log("=== Disponibles después del préstamo ===");
console.log(biblioteca.listarDisponibles().map((m) => m.getDescripcion()));

console.log("=== Devolución ===");
console.log(biblioteca.devolverMaterial("1984"));

console.log("=== Préstamos registrados ===");
console.log(
  biblioteca.listarPrestamos().map((p) => ({
    usuario: p.getUsuario().getNombre(),
    material: p.getMaterial().getTitulo(),
    fecha: p.getFecha(),
  }))
);