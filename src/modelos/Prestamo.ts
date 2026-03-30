import { Usuario } from "./Usuarios";
import { MaterialBiblioteca } from "./MaterialBiblioteca";

export class Prestamo {
  private usuario: Usuario;
  private material: MaterialBiblioteca;
  private fecha: string;

  constructor(usuario: Usuario, material: MaterialBiblioteca, fecha: string) {
    this.usuario = usuario;
    this.material = material;
    this.fecha = fecha;
  }

  public getUsuario(): Usuario {
    return this.usuario;
  }

  public getMaterial(): MaterialBiblioteca {
    return this.material;
  }

  public getFecha(): string {
    return this.fecha;
  }
}