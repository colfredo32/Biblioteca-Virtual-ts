export abstract class MaterialBiblioteca {
  private id: number;
  private titulo: string;
  private disponible: boolean;

  constructor(id: number, titulo: string) {
    this.id = id;
    this.titulo = titulo;
    this.disponible = true;
  }

  public getId(): number {
    return this.id;
  }

  public getTitulo(): string {
    return this.titulo;
  }

  public estaDisponible(): boolean {
    return this.disponible;
  }

  public prestar(): void {
    this.disponible = false;
  }

  public devolver(): void {
    this.disponible = true;
  }

  public abstract getDescripcion(): string;
}