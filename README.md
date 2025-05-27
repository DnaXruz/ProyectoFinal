# Tienda Virtual - Proyecto Final

Este proyecto es una tienda en línea desarrollada con React, Vite y TailwindCSS, que permite a los usuarios explorar un catálogo de productos, consultar información de sucursales y ponerse en contacto con la tienda. Está pensado como un punto de partida moderno y escalable para comercios digitales, inspirado en tiendas departamentales reconocidas y adaptado para brindar una experiencia óptima en cualquier dispositivo.

---

## Descripción General

La aplicación simula el flujo de una tienda real, desde la exploración de productos hasta el contacto con la empresa. Utiliza una arquitectura basada en componentes reutilizables y navegación dinámica, lo que facilita su mantenimiento y expansión. Aunque actualmente funciona como un prototipo, su estructura permite integrar funcionalidades avanzadas como carritos de compra, autenticación de usuarios, integración de pagos y conexión con bases de datos o APIs externas.

---

## Características principales

- **Página de inicio llamativa:** Incluye un “Hero” visual que destaca promociones, tendencias y la propuesta de valor de la tienda.
- **Catálogo de productos dinámico:** Los productos se presentan en tarjetas interactivas, cada una con imagen, descripción, y acciones directas (“Ver producto”, “Agregar al carrito”, “Comprar ahora”). Está listo para integrarse con un backend, aunque actualmente utiliza datos simulados.
- **Navegación moderna y accesible:** El menú principal permite acceder fácilmente a las secciones: Inicio, Catálogo, Sucursales, Contacto y Nosotros, mejorando la experiencia de usuario.
- **Detalle de producto:** Cada producto puede tener su propia página de detalle, lista para mostrar información ampliada, reseñas o imágenes adicionales.
- **Página “Nosotros”:** Comunica la misión, visión y valores de la tienda, resaltando la calidad, variedad y exclusividad de los productos ofrecidos.
- **Módulo de sucursales:** Estructura preparada para mostrar ubicaciones físicas, horarios y detalles de contacto de cada sucursal (se puede expandir con mapas interactivos).
- **Formulario de contacto:** Permite a los visitantes enviar consultas, comentarios o solicitudes a través de un formulario (puede integrarse con servicios de correo o CRMs).
- **Página 404 personalizada:** Ofrece una experiencia cuidada incluso cuando el usuario accede a rutas inexistentes.
- **Diseño responsive y accesible:** Gracias a TailwindCSS, el sitio se adapta automáticamente a dispositivos móviles, tablets y escritorios.
- **Arquitectura escalable:** Fácil de ampliar con nuevas páginas o funcionalidades por el uso de React Router y componentes independientes.

---

## Tecnologías y dependencias

- **React 18+:** Para la construcción de la interfaz y manejo del estado.
- **Vite:** Para desarrollo y compilación ultrarrápida.
- **TailwindCSS:** Framework de utilidades CSS para estilos modernos y adaptables.
- **React Router DOM:** Para la navegación entre páginas.
- **ESLint:** Para mantener la calidad y consistencia del código.
- **JavaScript (ES6+):** Lenguaje base del proyecto.

---

## Estructura del proyecto

```
src/
├── About.jsx                # Sección “Nosotros”
├── App.css                  # Estilos globales (Tailwind)
├── App.jsx                  # Configuración de rutas principales
├── BranchesInMexico.jsx     # Sucursales físicas (listado/mapa)
├── Card.css                 # Estilos de tarjetas de producto
├── Card.jsx                 # Componente de tarjeta de producto
├── Catalogo.jsx             # Vista principal del catálogo
├── ContactUs.jsx            # Página de contacto
├── Footer.jsx               # Pie de página
├── Hero.jsx                 # Componente destacado de portada
├── Home.jsx                 # Página de inicio
├── Nav.jsx                  # Barra de navegación superior
├── NotFound.jsx             # Página de error personalizada
├── ProductDescription.jsx   # Detalle ampliado del producto
├── assets/                  # Recursos gráficos y multimedia
└── main.jsx                 # Punto de entrada principal
```

Cada archivo corresponde a un componente funcional de React, lo que permite su reutilización y fácil modificación.

---

## Ejemplo de flujo de usuario

1. **Inicio:** El usuario ingresa y visualiza el “Hero” con promociones destacadas.
2. **Explora el Catálogo:** Puede navegar por el listado de productos, filtrando o buscando artículos de su interés.
3. **Consulta Detalles:** Al hacer clic en un producto, accede a una página con información ampliada.
4. **Contacta o Visita:** Puede encontrar información sobre sucursales físicas o enviar una consulta desde la sección de contacto.
5. **Navegación sin errores:** Si accede a una URL no existente, se le muestra una página 404 personalizada.

---

## Instalación y ejecución

1. Clona el repositorio:
   ```bash
   git clone https://github.com/DnaXruz/ProyectoFinal.git
   cd ProyectoFinal
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Ejecuta la aplicación en modo desarrollo:
   ```bash
   npm run dev
   ```
4. Abre `http://localhost:5173` en tu navegador.

---

## Posibilidades de expansión

- **Carrito de compras y checkout:** Integra una lógica completa de e-commerce con pagos reales (Stripe, PayPal, MercadoPago, etc.).
- **Autenticación de usuarios:** Registros, perfiles, historial de compras.
- **Integración con bases de datos:** Agrega un backend (Node, Firebase, Supabase, etc.) para productos, stock y usuarios en tiempo real.
- **Panel de administración:** Permite a los empleados gestionar productos, pedidos y usuarios.
- **Internacionalización:** Traducción a varios idiomas y soporte multimoneda.
- **Accesibilidad avanzada:** Cumplimiento de normativas WCAG y ARIA.

---

## Créditos y propósito

Este proyecto se desarrolló como entrega final para la materia de Desarrollo Web, con fines educativos y demostrativos. Es una base sólida y moderna para quienes deseen crear una tienda virtual o catálogo digital, con la flexibilidad para expandirse según las necesidades reales del comercio.

---

¡Explora, adapta y crea tu propia tienda online con este proyecto!
