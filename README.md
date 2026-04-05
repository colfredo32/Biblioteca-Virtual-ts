# Biblioteca Virtual en TypeScript


Sistema de gestión de biblioteca desarrollado en TypeScript aplicando programación orientada a objetos, tests unitarios e integración continua.

---

##  Funcionalidades

El sistema permite:

* Registrar usuarios
* Agregar materiales (libros y revistas)
* Listar todos los materiales
* Listar materiales disponibles
* Prestar materiales
* Evitar préstamos duplicados
* Devolver materiales
* Registrar y consultar préstamos

---

## Conceptos de programación aplicados

En el proyecto se implementaron los siguientes conceptos:

* **Encapsulamiento:**
  Los atributos son privados y se accede a ellos mediante métodos.

* **Herencia:**

  * `Usuario` y `Bibliotecario` heredan de `Persona`
  * `Libro` y `Revista` heredan de `MaterialBiblioteca`

* **Polimorfismo:**
  La biblioteca trabaja con `MaterialBiblioteca`, permitiendo manejar distintos tipos de materiales.

* **Composición:**
  La clase `Biblioteca` contiene materiales, usuarios y préstamos.

* **Doble encapsulamiento:**
  `Biblioteca` encapsula `Prestamo`, y `Prestamo` encapsula `Usuario` y `Material`.

* **Sobrecarga:**
  Método `buscarMaterial` con distintas formas de uso.

---

##  Estructura del proyecto

```text
src/
 ├── modelos/
 │    ├── Persona.ts
 │    ├── Usuarios.ts
 │    ├── Bibliotecario.ts
 │    ├── MaterialBiblioteca.ts
 │    ├── Libros.ts
 │    ├── Revista.ts
 │    └── Prestamo.ts
 │
 ├── servicios/
 │    └── Biblioteca.ts
 │
 ├── tests/
 │    └── Biblioteca.test.ts
 │
 └── index.ts
```

---

##  Tecnologías utilizadas

* TypeScript
* Node.js
* Vitest (tests unitarios)
* Git / GitHub
* GitHub Actions (CI)

---

##  Instalación

Clonar el repositorio:

```bash
git clone <TU_REPO>
cd BibliotecaVirtual
```

Instalar dependencias:

```bash
npm install
```

---

##  Ejecutar el proyecto

Compilar:

```bash
npx tsc
```

Ejecutar:

```bash
node dist/index.js
```

---

## 🧪 Ejecutar tests

```bash
npm test
```

Los tests verifican:

* agregado de materiales
* registro de usuarios
* préstamos
* control de disponibilidad
* devolución de materiales

---

##  Integración Continua

El proyecto utiliza GitHub Actions para ejecutar automáticamente los tests en cada push.

Para verificarlo:

* Ir al repositorio en GitHub
* Entrar en la pestaña **Actions**
* Verificar que la ejecución esté en verde

---


---

##  Autor

Santino Mortola

---

##  Herramientas utilizadas

Se utilizó ChatGPT como apoyo durante el desarrollo para resolver dudas, corregir errores y mejorar la estructura del código.
