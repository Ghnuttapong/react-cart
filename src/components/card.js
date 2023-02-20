import React from "react";

function Card({ product, onClick }) {
  return (
    <div className="max-w-xs md:max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full object-cover" src={product.image} alt={product.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
        <p className="font-bold text-xl mt-2">${product.price}</p>
        <button
          className={`bg-blue-500 mt-2 hover:bg-blue-600 text-white py-2 px-3 shadow-md rounded`}
          onClick={onClick}
        >
          Choose
        </button>
      </div>
    </div>
  );
}

export default Card;
