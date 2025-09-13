import React, { useEffect, useState } from "react";

export default function Favourites() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("favouriteRestaurants");
    setFavourites(stored ? JSON.parse(stored) : []);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Favourite Restaurants</h1>
      {favourites.length === 0 ? (
        <p className="text-center text-gray-500">No favourites yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favourites.map((res) => (
            <div key={res.id} className="bg-white shadow-md rounded-xl overflow-hidden">
              <img
                src={res.image}
                alt={res.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h3 className="text-lg font-semibold text-gray-800">{res.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{res.description}</p>
                <p className="text-sm text-gray-700 mt-2 font-medium">{res.priceRange}</p>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-500 text-lg">⭐</span>
                  <span className="ml-1 text-gray-700">{res.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
