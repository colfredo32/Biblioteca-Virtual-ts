import { MaterialBiblioteca } from "../modelos/MaterialBiblioteca";
import { Usuario } from "../modelos/Usuarios";
import { Prestamo } from "../modelos/Prestamo";

export class Biblioteca {
  private materiales: MaterialBiblioteca[];
  private usuarios: Usuario[];
  private prestamos: Prestamo[];

  constructor() {
    this.materiales = [];
    this.usuarios = [];
    this.prestamos = [];
  }

  public agregarMaterial(material: MaterialBiblioteca): void {
    this.materiales.push(material);
  }

  public registrarUsuario(usuario: Usuario): void {
    this.usuarios.push(usuario);
  }

  public listarMateriales(): MaterialBiblioteca[] {
    return this.materiales;
  }

  public listarDisponibles(): MaterialBiblioteca[] {
    return this.materiales.filter((material) => material.estaDisponible());
  }

  public buscarMaterial(titulo: string): MaterialBiblioteca | undefined;
  public buscarMaterial(titulo: string, autor: string): MaterialBiblioteca | undefined;
  public buscarMaterial(titulo: string, autor?: string): MaterialBiblioteca | undefined {
    if (autor) {
      return this.materiales.find((material) => {
        const tieneAutor =
          "getAutor" in material &&
          typeof (material as any).getAutor === "function";

        return (
          material.getTitulo() === titulo &&
          tieneAutor &&
          (material as any).getAutor() === autor
        );
      });
    }

    return this.materiales.find((material) => material.getTitulo() === titulo);
  }

  public prestarMaterial(titulo: string, usuarioId: number, fecha: string): string {
    const material = this.buscarMaterial(titulo);
    const usuario = this.usuarios.find((u) => u.getId() === usuarioId);

    if (!material) {
      return "El material no existe.";
    }

    if (!usuario) {
      return "El usuario no existe.";
    }

    if (!material.estaDisponible()) {
      return "El material ya está prestado.";
    }

    material.prestar();
    const prestamo = new Prestamo(usuario, material, fecha);
    this.prestamos.push(prestamo);

    return "Préstamo realizado correctamente.";
  }

  public devolverMaterial(titulo: string): string {
    const material = this.buscarMaterial(titulo);

    if (!material) {
      return "El material no existe.";
    }

    if (material.estaDisponible()) {
      return "El material ya estaba disponible.";
    }

    material.devolver();
    return "Material devuelto correctamente.";
  }

  public listarPrestamos(): Prestamo[] {
    return this.prestamos;
  }

  public listarUsuarios(): Usuario[] {
  return this.usuarios;
}

}