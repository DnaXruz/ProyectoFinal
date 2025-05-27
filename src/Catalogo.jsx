import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

function Preventas() {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [itemsPerLoad] = useState(6);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetchProducts();
  }, [category]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const allProducts = response.data;
      const filteredProducts =
        category === "all"
          ? allProducts
          : allProducts.filter((product) => product.category === category);
      setProducts(filteredProducts);
      setDisplayedProducts(filteredProducts.slice(0, itemsPerLoad));
      setHasMore(filteredProducts.length > itemsPerLoad);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchMoreData = () => {
    const currentLength = displayedProducts.length;
    const nextProducts = products.slice(
      currentLength,
      currentLength + itemsPerLoad
    );
    setDisplayedProducts([...displayedProducts, ...nextProducts]);
    setHasMore(products.length > displayedProducts.length + itemsPerLoad);
  };

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <>
      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">Productos en Tendencia</h1>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => handleCategoryChange("all")}
            className={`px-4 py-2 rounded ${
              category === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => handleCategoryChange("men's clothing")}
            className={`px-4 py-2 rounded ${
              category === "men's clothing"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Ropa de Hombre
          </button>
          <button
            onClick={() => handleCategoryChange("women's clothing")}
            className={`px-4 py-2 rounded ${
              category === "women's clothing"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Ropa de Mujer
          </button>
          <button
            onClick={() => handleCategoryChange("jewelery")}
            className={`px-4 py-2 rounded ${
              category === "jewelery"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Joyería
          </button>
          <button
            onClick={() => handleCategoryChange("electronics")}
            className={`px-4 py-2 rounded ${
              category === "electronics"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Electrónica
          </button>
        </div>
      </div>

      <InfiniteScroll
        dataLength={displayedProducts.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4 className="text-center">Cargando más productos...</h4>}
        endMessage={
          <p className="text-center">
            <b>¡Has visto todos los productos!</b>
          </p>
        }
      >
        <section
          id="Projects"
          className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
        >
          {displayedProducts.map((e) => (
            <ProductCard
              key={e.id}
              id={e.id}
              name={e.title}
              image={e.image}
              price={e.price}
            />
          ))}
        </section>
      </InfiniteScroll>
    </>
  );
}

function ProductCard({ id, image, name, price }) {
  return (
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a href="#">
        <img
          src={image}
          alt="Product"
          className="h-80 w-72 object-contain rounded-t-xl"
        />
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
            <div className="ml-auto"></div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Preventas;
