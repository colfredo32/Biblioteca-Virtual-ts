import { MaterialBiblioteca } from "./MaterialBiblioteca";

export class Libro extends MaterialBiblioteca {
  private autor: string;
  private genero: string;

  constructor(id: number, titulo: string, autor: string, genero: string) {
    super(id, titulo);
    this.autor = autor;
    this.genero = genero;
  }

  public getAutor(): string {
    return this.autor;
  }

  public getGenero(): string {
    return this.genero;
  }

  public getDescripcion(): string {
    return `Libro: ${this.getTitulo()} - Autor: ${this.autor} - Género: ${this.genero}`;
  }
}