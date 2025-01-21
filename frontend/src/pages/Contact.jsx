import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 px-8 py-16">
      <h1 className="text-4xl font-bold text-center">Contact Us</h1>
      <form className="mt-8 max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 border rounded-lg"
            rows="4"
          ></textarea>
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          Send Message
        </button>
      </form>
    </div>
  );
}
