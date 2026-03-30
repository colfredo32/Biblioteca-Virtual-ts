import { Persona } from "./Persona";

export class Bibliotecario extends Persona {
  private legajo: string;

  constructor(id: number, nombre: string, legajo: string) {
    super(id, nombre);
    this.legajo = legajo;
  }

  public getLegajo(): string {
    return this.legajo;
  }
}