# Tienda Virtual - Proyecto Final

Este proyecto es una tienda en línea desarrollada con React, Vite y TailwindCSS. El objetivo principal es ofrecer una experiencia moderna, ágil y visualmente atractiva para la consulta de productos, inspirada en comercios como Liverpool, y pensada para ser fácilmente extensible y personalizable.

## Características principales

- **Catálogo de productos:** Presentación de productos en tarjetas visuales con imagen, nombre, descripción y acciones rápidas como "Ver producto", "Agregar al carrito" y "Comprar ahora".
- **Navegación intuitiva:** Menú superior con acceso directo a las secciones principales: Inicio, Catálogo, Sucursales, Contacto y Nosotros.
- **Página principal destacada:** Hero section con un llamado visual a descubrir las últimas tendencias.
- **Sección "Nosotros":** Presentación de la propuesta de valor, enfoque en calidad, estilo y marcas exclusivas.
- **Sucursales:** Página dedicada para mostrar la presencia física de la tienda (estructura lista para integrar ubicaciones o mapas).
- **Página de contacto:** Espacio para que los usuarios puedan comunicarse con la tienda.
- **Página de error 404 personalizada:** Experiencia de usuario mejorada en caso de rutas no encontradas.
- **Diseño responsive:** Adaptado para dispositivos móviles y de escritorio usando TailwindCSS.
- **Componentización:** Uso de componentes reutilizables como `Nav`, `Footer`, `Card`, y `Hero` para facilitar el mantenimiento y la expansión.

## Tecnologías utilizadas

- **React:** Biblioteca principal para la construcción de interfaces de usuario.
- **Vite:** Herramienta de bundling y desarrollo ultrarrápida.
- **TailwindCSS:** Framework de estilos utilitario para un diseño moderno y flexible.
- **React Router:** Manejo de rutas y navegación entre páginas.
- **Estructura modular:** Separación clara entre vistas, componentes y estilos.

## Estructura del proyecto

```
src/
├── About.jsx           # Sección Nosotros
├── App.css             # Estilos globales (Tailwind)
├── App.jsx             # Definición de rutas principales
├── BranchesInMexico.jsx# Sucursales
├── Card.css            # Estilos de las tarjetas de producto
├── Card.jsx            # Componente de tarjeta de producto
├── Catalogo.jsx        # Vista de catálogo de productos
├── ContactUs.jsx       # Página de contacto
├── Footer.jsx          # Pie de página
├── Hero.jsx            # Hero visual de la portada
├── Home.jsx            # Página de inicio
├── Nav.jsx             # Barra de navegación
├── NotFound.jsx        # Página 404 personalizada
├── ProductDescription.jsx # Detalle de producto
├── assets/             # Recursos multimedia
└── main.jsx            # Punto de entrada de la app
```

## ¿Cómo empezar?

1. Clona el repositorio:
   ```bash
   git clone https://github.com/DnaXruz/ProyectoFinal.git
   cd ProyectoFinal
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Ejecuta la aplicación en desarrollo:
   ```bash
   npm run dev
   ```

## Personalización y expansión

Puedes adaptar el catálogo, integrar un backend, añadir autenticación, métodos de pago o expandir las sucursales según tus necesidades. Este proyecto sirve como base sólida y moderna para una tienda en línea o catálogo digital.

---

Desarrollado como proyecto final con fines educativos y demostrativos.
