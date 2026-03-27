# Biblioteca Virtual en TypeScript

Este proyecto consiste en un sistema simple de biblioteca virtual desarrollado en TypeScript.  
Fue pensado como una aplicación de consola orientada a objetos, con una estructura clara, lógica modular, tests unitarios e integración continua con GitHub Actions.

## Objetivo del proyecto

El objetivo principal es simular el funcionamiento básico de una biblioteca, permitiendo:

- registrar libros
- registrar usuarios
- listar libros
- listar libros disponibles
- prestar libros
- devolver libros

Además, el proyecto incluye pruebas unitarias para validar el comportamiento del sistema y una configuración de integración continua para ejecutar los tests automáticamente en GitHub.

---

## Tecnologías utilizadas

- TypeScript
- Node.js
- Vitest
- Git
- GitHub
- GitHub Actions

---

## Estructura del proyecto

```text
BibliotecaVirtual/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── dist/
│
├── src/
│   ├── modelos/
│   │   ├── Libros.ts
│   │   └── Usuarios.ts
│   │
│   ├── servicios/
│   │   └── Biblioteca.ts
│   │
│   ├── tests/
│   │   └── Biblioteca.test.ts
│   │
│   └── index.ts
│
├── .gitignore
├── package.json
├── package-lock.json
└── tsconfig.json
