import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 px-8 py-16">
      <h1 className="text-4xl font-bold text-center">About Us</h1>
      <p className="mt-8 text-lg text-gray-700 text-center max-w-2xl mx-auto">
        Welcome to TravelMate! We are a passionate team of travel enthusiasts dedicated to helping you
        explore the world. Our mission is to provide unforgettable travel experiences while ensuring
        the highest level of comfort and convenience.
      </p>

      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Example Team Members */}
          {[1, 2, 3].map((id) => (
            <div key={id} className="text-center">
              <img
                src={`https://via.placeholder.com/150?text=Team+Member+${id}`}
                alt={`Team Member ${id}`}
                className="w-32 h-32 mx-auto rounded-full object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold">Team Member #{id}</h3>
              <p className="text-gray-600">Role or Position</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
