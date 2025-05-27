import React, { useState } from "react";

// Datos simulados (puedes conectarlo a un backend después)
const branches = [
  {
    id: 1,
    city: "CDMX",
    name: "Sucursal Reforma",
    address: "Av. Paseo de la Reforma 123, Cuauhtémoc, CDMX",
    phone: "(55) 1234 5678",
    hours: "Lun - Vie: 9:00 - 18:00",
    image: "https://source.unsplash.com/400x300/?building,mexico",
    mapUrl: "https://www.google.com/maps/embed?pb=..."
  },
  {
    id: 2,
    city: "Guadalajara",
    name: "Sucursal Centro",
    address: "Av. Juárez 456, Zona Centro, Guadalajara, Jalisco",
    phone: "(33) 9876 5432",
    hours: "Lun - Sáb: 10:00 - 19:00",
    image: "https://source.unsplash.com/400x300/?office,guadalajara",
    mapUrl: "https://www.google.com/maps/embed?pb=..."
  },
  {
    id: 3,
    city: "Monterrey",
    name: "Sucursal San Pedro",
    address: "Calzada del Valle 789, San Pedro Garza García, NL",
    phone: "(81) 1122 3344",
    hours: "Lun - Vie: 9:00 - 18:00",
    image: "https://source.unsplash.com/400x300/?store,monterrey",
    mapUrl: "https://www.google.com/maps/embed?pb=..."
  },
  {
    id: 4,
    city: "CDMX",
    name: "Sucursal Polanco",
    address: "Av. Homero 1900, Polanco, Miguel Hidalgo, CDMX",
    phone: "(55) 8765 4321",
    hours: "Lun - Sáb: 10:00 - 20:00",
    image: "https://source.unsplash.com/400x300/?business,cdmx",
    mapUrl: "https://www.google.com/maps/embed?pb=..."
  }
];

const uniqueCities = ["Todas", ...new Set(branches.map(b => b.city))];

function BranchesInMexico() {
  const [selectedCity, setSelectedCity] = useState("Todas");

  const filteredBranches =
    selectedCity === "Todas"
      ? branches
      : branches.filter(branch => branch.city === selectedCity);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Encabezado */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800">Sucursales en México</h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Conoce nuestras ubicaciones en todo el país. Encuentra la sucursal más cercana,
          consulta horarios y contáctanos fácilmente.
        </p>
      </div>

      {/* Filtro por ciudad */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {uniqueCities.map(city => (
          <button
            key={city}
            onClick={() => setSelectedCity(city)}
            className={`px-4 py-2 rounded-full text-sm font-medium border ${
              selectedCity === city
                ? "bg-amber-500 text-white border-amber-500"
                : "text-amber-600 border-amber-400 hover:bg-amber-100"
            } transition`}
          >
            {city}
          </button>
        ))}
      </div>

      {/* Sucursales */}
      <div className="grid md:grid-cols-2 gap-10">
        {filteredBranches.map(branch => (
          <div
            key={branch.id}
            className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200"
          >
            <img
              src={branch.image}
              alt={`Sucursal ${branch.name}`}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800">{branch.name}</h2>
              <p className="text-gray-500 mb-1">{branch.address}</p>
              <p className="text-gray-700 font-semibold">Tel: {branch.phone}</p>
              <p className="text-sm text-gray-600 mt-1">{branch.hours}</p>
              <div className="mt-4 aspect-video">
                <iframe
                  src={branch.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa ${branch.name}`}
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center text-gray-500 text-sm mt-16">
        © {new Date().getFullYear()} Tu Empresa — Todas las sucursales verificados.
      </div>
    </div>
  );
}

export default BranchesInMexico;
