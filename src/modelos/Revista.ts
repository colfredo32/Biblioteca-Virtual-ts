import { MaterialBiblioteca } from "./MaterialBiblioteca";

export class Revista extends MaterialBiblioteca {
  private numeroEdicion: number;
  private mesPublicacion: string;

  constructor(id: number, titulo: string, numeroEdicion: number, mesPublicacion: string) {
    super(id, titulo);
    this.numeroEdicion = numeroEdicion;
    this.mesPublicacion = mesPublicacion;
  }

  public getNumeroEdicion(): number {
    return this.numeroEdicion;
  }

  public getMesPublicacion(): string {
    return this.mesPublicacion;
  }

  public getDescripcion(): string {
    return `Revista: ${this.getTitulo()} - Edición: ${this.numeroEdicion} - Mes: ${this.mesPublicacion}`;
  }
}