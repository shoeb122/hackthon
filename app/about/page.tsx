import React from "react";
import { FaShippingFast, FaTags } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { TbPlant } from "react-icons/tb";

const Home: React.FC = () => {
  return (
    <div className="font-sans">
      {/* About Section */}
      <section className="flex flex-wrap justify-center items-center bg-white text-white py-12 px-6 md:px-12 gap-4">
        {/* Text Box */}
        <div className="flex items-center justify-center w-96 h-64 bg-teal-700 rounded-lg shadow-lg text-center p-4">
          <div>
            <h2 className="text-2xl font-semibold mb-2">About Us - Comforty</h2>
            <p className="text-sm mb-4 text-white">
              At Comforty, we believe that the right chair can transform your
              space and elevate your comfort. Specializing in ergonomic design,
              premium materials, and modern aesthetics, we craft chairs that
              seamlessly blend style with functionality.
            </p>
            <button className="bg-teal-600 text-white px-4 py-2 font-medium rounded-md hover:bg-teal-500 transition">
              View collection
            </button>
          </div>
        </div>
        {/* Image Box */}
        <div className="w-96 h-64 bg-white rounded-lg shadow-lg flex items-center justify-center">
          <img
            src="/chair.png"
            alt="Chair"
            className="w-48 h-48 object-contain"
          />
        </div>
      </section>

      {/* Brand Differentiators */}
      <section className="py-12 px-6 md:px-12 text-center">
        <h3 className="text-2xl font-semibold mb-8">
          What Makes Our Brand Different
        </h3>
        <div className="flex flex-wrap justify-center gap-6 text-teal-600">
          {[
            {
              icon: <FaShippingFast className="text-4xl mx-auto mb-4" />,
              title: "Next day as standard",
              description: "Order before 3pm and get your order the next day!",
            },
            {
              icon: <CiCircleCheck className="text-4xl mx-auto mb-4" />,
              title: "Made by true artisans",
              description: "Handcrafted goods made with passion and skill.",
            },
            {
              icon: <FaTags className="text-4xl mx-auto mb-4" />,
              title: "Unbeatable prices",
              description:
                "For our quality materials, you won’t find better prices.",
            },
            {
              icon: <TbPlant className="text-4xl mx-auto mb-4" />,
              title: "Recycled packaging",
              description:
                "We use 100% recycled materials to reduce our footprint.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex-1 bg-gray-100 rounded-lg p-4 max-w-[200px] shadow-md hover:shadow-lg transition"
            >
              {item.icon}
              <h4 className="font-medium text-lg">{item.title}</h4>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-12 px-6 md:px-12">
        <h3 className="text-2xl font-semibold mb-8 text-center">
          Our Popular Products
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            {
              imgSrc: "/Large.jpg",
              title: "The Poplar suede sofa",
              price: "$99.00",
              size: "w-96 h-72",
            },
            {
              imgSrc: "/about.png",
              title: "The Dandy chair",
              price: "$99.00",
              size: "w-52 h-36",
            },
            {
              imgSrc: "/about2.png",
              title: "The Dandy chair",
              price: "$99.00",
              size: "w-52 h-36",
            },
          ].map((product, index) => (
            <div
              key={index}
              className={`${product.size} text-center flex flex-col items-center`}
            >
              <img
                src={product.imgSrc}
                alt={product.title}
                className="rounded-lg shadow-lg mb-4 object-cover"
              />
              <h4 className="font-medium text-lg">{product.title}</h4>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
