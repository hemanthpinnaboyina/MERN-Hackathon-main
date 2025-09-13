import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { restaurants } from "./data";
import { FaHeart } from "react-icons/fa";

export default function Restaurants() {
    const navigate = useNavigate();
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
      const stored = localStorage.getItem("favouriteRestaurants");
      setFavourites(stored ? JSON.parse(stored) : []);
    }, []);

    const toggleFavourite = (res) => {
      let updated;
      if (favourites.some(fav => fav.id === res.id)) {
        updated = favourites.filter(fav => fav.id !== res.id);
      } else {
        updated = [...favourites, res];
      }
      setFavourites(updated);
      localStorage.setItem("favouriteRestaurants", JSON.stringify(updated));
    };

    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Nearby Restaurants</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((res) => {
            const isFav = favourites.some(fav => fav.id === res.id);
            return (
              <div key={res.id} className="relative">
                <Link to={`/restaurant/${res.id}`}>
                  <div className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 hover:cursor-pointer">
                    <img
                      src={res.image}
                      alt={res.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-3">
                      <h3 className="text-lg font-semibold text-gray-800">{res.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{res.description}</p>
                      <p className="text-sm text-gray-700 mt-2 font-medium">
                        {res.priceRange}
                      </p>
                      <div className="flex items-center mt-2">
                        <span className="text-yellow-500 text-lg">⭐</span>
                        <span className="ml-1 text-gray-700">{res.rating}</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <button
                  className="absolute top-3 right-3 text-2xl focus:outline-none hover:cursor-pointer"
                  onClick={() => toggleFavourite(res)}
                  style={{ color: isFav ? "#e53e3e" : "#cbd5e1" }}
                  aria-label={isFav ? "Remove from favourites" : "Add to favourites"}
                >
                  <FaHeart />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
}
