import React from 'react';
import Hero from './Hero';
import Preventas from './Preventas';
import FeatureSection from './FeatureSection';

function Home() {
  return (
    <>
    <div className="lg:h-lvh h-500 flex flex-col justify-center items-center bg-cover bg-center px-6 py-16 sm:py-24 lg:px-8 bg-[url(./assets/img/portada3.jpg)] bg-fixed md: h-dvh">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-amber-100 sm:text-6xl text-shadow-lg">
          <span className="block">Descubre el placer de</span>
          <span className="block bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            comprar con estilo
          </span>
        </h1>
        <p className="mt-6 text-xl leading-8 text-amber-50">
          Encuentra lo mejor en moda, tecnología y hogar con nuestras exclusivas colecciones. 
          <span className="font-semibold text-red-600">¡Disfruta de promociones especiales!</span>
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="#" className="rounded-md bg-red-600 px-8 py-3.5 text-lg font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
            Ver colecciones
          </a>
          <a href="#" className="text-lg font-semibold leading-6 text-amber-200 hover:text-red-600">
            Conoce más <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
    <Hero/>
    <Preventas/>
    <FeatureSection/>
    </>
  );
}

export default Home;
