# Tuki - Agencia de Marketing
## Inicialización del Proyecto
### Pasos para Inicializar el Proyecto
1. **Clonar el Repositorio**

2. **Cambia al directorio del proyecto clonado:**

**cd tukiWeb**

3. **Crea una nueva rama a partir de develop:**

**git checkout develop**

**git pull origin develop**

**git checkout -b feature/nueva-funcionalidad**

4. **Iniciar el Servidor de Desarrollo**

*npm run dev*

## Tecnologías Utilizadas
- **Frontend**: React, GSAP para animaciones
- **Backend**: Node.js, Express
- **Base de Datos**: MongoDB
- **Despliegue**: Hostinger
- **Control de Versiones**: Git, GitHub

## Paleta de colores
- **#235AE2**
- **#E84855**
- **#FF6494**
- **#FBB91C**
- **#FFFFFF**


## Tipografias
- **Quicksand - Poppins (opcion de "TT Rounds Neue")**
- **Monserrat**
- **Comfortaa**

# Estrategia de Ramas

## Ramas Principales

### master
- Rama principal de producción.
- Todo el código aquí debe estar listo para despliegue.

### develop
- Rama de desarrollo donde se integran las nuevas características y correcciones antes de ser lanzadas a producción.

### preview
- Rama temporal donde se desarrollara la pagina en contrucción.

## Ramas de Trabajo

### feature/nueva-funcionalidad
- Ramas creadas desde `develop`.
- Utilizadas para desarrollar nuevas características.
- Ejemplo:
  git checkout develop
  git pull origin develop
  git checkout -b feature/nueva-funcionalidad
