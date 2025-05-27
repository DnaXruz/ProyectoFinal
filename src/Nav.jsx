import { useState } from 'react';
import reactLogo from './assets/react.svg';

const navigation = [
  { title: "Nosotros", href: "/About", ComponentName: false },
  { title: "Catalogo", href: "/Catalogo", ComponentName: false },
  { title: "Sucursales", href: "/Sucursales", ComponentName: false },
  { title: "Contacto", href: "/Contact", ComponentName: false }
];

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white py-5 px-6 flex items-center justify-between relative">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <img src={reactLogo} alt="Logo" className="h-8 w-8" />
        <a href="/" className="text-2xl hover:text-amber-400 hidden lg:inline">Inicio</a>
      </div>

      {/* Menú de escritorio */}
      <div className="hidden lg:flex space-x-8 text-xl">
        {navigation.map((e) => (
          <a key={e.title} href={e.href} className="hover:text-amber-400">
            {e.title}
          </a>
        ))}
      </div>

      {/* Botón menú hamburguesa (móvil) */}
      <button
        className="lg:hidden text-white text-3xl"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Menú móvil */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-black flex flex-col items-center space-y-4 py-6 lg:hidden z-50">
          <a href="/" className="hover:text-amber-400 text-lg" onClick={() => setOpen(false)}>Inicio</a>
          {navigation.map((e) => (
            <a
              key={e.title}
              href={e.href}
              className="hover:text-amber-400 text-lg"
              onClick={() => setOpen(false)}
            >
              {e.title}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Nav;
