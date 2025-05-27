function About(){
return (
    <div class="relative isolate overflow-hidden bg-gray-50 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
  <div class="absolute inset-0 -z-10 overflow-hidden">
    <svg class="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200" aria-hidden="true">
      <defs>
        <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
          <path d="M100 200V.5M.5 .5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y="-1" class="overflow-visible fill-white">
        <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
      </svg>
      <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
    </svg>
  </div>
  <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
    <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div class="lg:pr-4">
        <div class="lg:max-w-lg">
          <p class="text-base/7 font-semibold text-red-600">Nueva Colección</p>
          <h1 class="mt-2 text-4xl font-bold tracking-tight text-pretty text-gray-900 sm:text-5xl">Descubre las últimas tendencias</h1>
          <p class="mt-6 text-xl/8 text-gray-700">Encuentra lo mejor en moda, electrónica, hogar y más. Calidad y estilo que solo Liverpool puede ofrecerte, con las mejores marcas y diseños exclusivos.</p>
        </div>
      </div>
    </div>
    <div class="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
      <img class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80" alt="Modelo con ropa de la nueva colección"/>
    </div>
    <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div class="lg:pr-4">
        <div class="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
          <p>En Liverpool nos enorgullece ofrecerte una experiencia de compra única, con productos seleccionados cuidadosamente para satisfacer todos tus gustos y necesidades. Desde lo último en moda hasta tecnología de vanguardia.</p>
          <ul role="list" class="mt-8 space-y-8 text-gray-600">
            <li class="flex gap-x-3">
              <svg class="mt-1 size-5 flex-none text-red-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
              </svg>
              <span><strong class="font-semibold text-gray-900">Envíos rápidos y seguros.</strong> Recibe tus compras en tiempo récord con nuestro servicio de entrega premium.</span>
            </li>
            <li class="flex gap-x-3">
              <svg class="mt-1 size-5 flex-none text-red-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
              </svg>
              <span><strong class="font-semibold text-gray-900">Asesoría personalizada.</strong> Nuestros expertos están listos para ayudarte a encontrar exactamente lo que buscas.</span>
            </li>
            <li class="flex gap-x-3">
              <svg class="mt-1 size-5 flex-none text-red-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
              </svg>
              <span><strong class="font-semibold text-gray-900">Garantía extendida.</strong> Disfruta de tu compra con la tranquilidad de nuestra garantía Liverpool.</span>
            </li>
          </ul>
          <p class="mt-8">Visita cualquiera de nuestras tiendas físicas o compra en línea con la misma confianza. Liverpool te ofrece múltiples formas de pago, promociones exclusivas y un programa de recompensas que hace que cada compra valga aún más.</p>
          <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">¿Por qué elegir Liverpool?</h2>
          <p class="mt-6">Con más de 180 años de experiencia, Liverpool es sinónimo de calidad y buen gusto. Nuestra selección de productos abarca desde las marcas más exclusivas hasta opciones accesibles, siempre manteniendo los más altos estándares de calidad.</p>
        </div>
      </div>
    </div>
  </div>
</div>

);
}

export default About;