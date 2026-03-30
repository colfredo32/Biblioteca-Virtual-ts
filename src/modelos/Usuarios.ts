
import { Persona } from "./Persona";

export class Usuario extends Persona {
  private email: string;

  constructor(id: number, nombre: string, email: string) {
    super(id, nombre);
    this.email = email;
  }

  public getEmail(): string {
    return this.email;
  }
}