import React from "react";
import Footer from "./Footer";
import Navbar from "../../Navbar/Navbar";
import one from "../../Assets/product_35.png";
import two from "../../Assets/product_36.png";
import p1 from "../../Assets/product_16.png";
import p2 from "../../Assets/product_17.png";
import p3 from "../../Assets/product_18.png";

const products = [
  { id: 1, name: "Product 1", price: 29.99, image: p1 },
  { id: 2, name: "Product 2", price: 49.99, image: p2 },
  { id: 3, name: "Product 3", price: 19.99, image: p3 },
];

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Introduction Section */}
      <section className="bg-gradient-to-r from-teal-600 via-teal-700 to-teal-800 text-white py-16 px-4">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left md:pr-8">
            <h1 className="text-5xl font-extrabold mb-4 leading-tight">
              Welcome to Glancy
            </h1>
            <p className="text-lg mb-8 leading-relaxed">
              Discover the perfect blend of style and functionality with Glancy.
              We bring you innovative solutions and premium products designed
              with precision and elegance. Our commitment to quality ensures
              that every product meets the highest standards.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
            <div className="relative w-full max-w-md">
              <img
                src={one}
                alt="Glancy"
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
              />
              <img
                src={two}
                alt="Glancy"
                className="relative w-full h-full object-cover rounded-lg shadow-lg mt-8 md:mt-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg mb-8">
            At Glancy, we are dedicated to creating exceptional products that
            enhance the lives of our customers. With a team of skilled
            professionals, we focus on innovative designs, high-quality
            materials, and sustainable practices. Our goal is to deliver
            solutions that combine form and function in perfect harmony.
          </p>
          <img
            src={one}
            alt="About Glancy"
            className="w-80 mx-auto mb-8 rounded-lg shadow-lg"
          />
          <a
            href="#more-products"
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50" id="more-products">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="border border-gray-200 rounded-lg p-4 bg-white shadow-lg hover:shadow-xl transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">
                  ${product.price.toFixed(2)}
                </p>
                <a
                  href={`/product/${product.id}`}
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                >
                  View Details
                </a>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a
              href="/products"
              className="bg-blue-900 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition"
            >
              More Products
            </a>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default App;
