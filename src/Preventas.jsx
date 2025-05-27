import React, { useEffect, useState } from "react";

function Preventas() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">Productos en Tendencia</h1>
      </div>

      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {products.slice(0, 6).map((e) => (
          <ProductCard
            key={e.id}
            id={e.id}
            name={e.title}
            image={e.image}
            price={e.price}
          />
        ))}
      </section>
    </>
  );
}

function ProductCard({ id, image, name, price }) {
  return (
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a href="#">
        <img src={image} alt="Product" className="h-80 w-72 object-contain rounded-t-xl" />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">{id}</span>
          <p className="text-lg font-bold text-black truncate block capitalize">
            {name}
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              ${price}
            </p>
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
            </del>
            <div className="ml-auto">

            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Preventas;
