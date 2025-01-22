import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "../components/ui/button";
import parisImage from '../assets/images/paris.jpg';
import canyonImage from '../assets/images/grand-canyon.jpg';
import safariImage from '../assets/images/safari.jpg';

export default function Tours() {
  const navigate = useNavigate();

  const tours = [
    { id: 1, name: 'Paris Getaway', price: '1200', description: 'Explore the beauty of Paris.', image: parisImage },
    { id: 2, name: 'Grand Canyon Adventure', price: '1500', description: 'Experience the breathtaking Grand Canyon.', image: canyonImage },
    { id: 3, name: 'Safari in Africa', price: '2000', description: 'Witness the wildlife in its natural habitat.', image: safariImage },
  ];

  const handleViewDetails = (id) => {
    navigate(`/tour/${id}`); // Navigate to the TourDetails page with tour ID
  };

  return (
    <div className="min-h-screen bg-gray-50 px-8 py-16">
      <h1 className="text-4xl font-bold text-center">Our Tours</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {tours.map((tour) => (
          <div key={tour.id} className="border rounded-lg shadow-md bg-white overflow-hidden">
            <img
              src={tour.image}
              alt={tour.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{tour.name}</h2>
              <p className="text-gray-600">{tour.description}</p>
              <p className="text-blue-500 font-semibold mt-2">${tour.price}</p>
              <Button
                className="mt-4 bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 ease-in-out"
                onClick={() => handleViewDetails(tour.id)}
              >
                View Details
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
