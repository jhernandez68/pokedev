# 🌟 PokeDev Portfolio

¡Bienvenido al **portafolio de PokeDev**!  
Este proyecto está construido con **Next.js** y muestra una landing page responsiva con páginas de **Inicio**, **Servicios** y **Contacto**, además de un **menú hamburguesa** que despliega una **barra lateral** en móvil.

---

## 🚀 Tecnologías

- **Framework**: Next.js (App Router)
- **Lenguaje**: TypeScript / JavaScript
- **UI**: CSS Variables, Grid y Flexbox
- **Iconografía**: [react-icons](https://react-icons.github.io/react-icons/)
- **Optimización**: Sticky footer, diseño mobile-first

---

## 📁 Estructura del proyecto

```text
pokedev-portfolio/
├── public/
│   └── icon.png           # Logo de PokeDev
├── src/
│   ├── app/
│   │   ├── globals.css    # Estilos globales
│   │   ├── layout.tsx     # Layout principal (header, main, footer)
│   │   ├── page.tsx       # Página Home (hero)
│   │   ├── services/
│   │   │   └── page.tsx   # Página Servicios
│   │   └── contact/
│   │       └── page.tsx   # Página Contacto
│   └── components/
│       └── Header.tsx     # Header con menú hamburguesa y sidebar
├── package.json
└── README.md
