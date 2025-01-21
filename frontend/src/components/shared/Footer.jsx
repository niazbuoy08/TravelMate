import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} TravelMate. All rights reserved.
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition flex items-center"
            >
              <i className="fab fa-facebook-f mr-2"></i> Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition flex items-center"
            >
              <i className="fab fa-twitter mr-2"></i> Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition flex items-center"
            >
              <i className="fab fa-instagram mr-2"></i> Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
