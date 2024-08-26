import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <p className="mb-4 text-center md:text-left text-lg font-semibold">
            &copy; 2024 Glancy. All rights reserved.
          </p>
          <div className="flex justify-center md:justify-start space-x-6 mb-4">
            <a
              href="/about"
              className="hover:text-yellow-400 transition-colors"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="hover:text-yellow-400 transition-colors"
            >
              Contact
            </a>
            <a
              href="/privacy"
              className="hover:text-yellow-400 transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="w-full border-t border-gray-500 my-4 md:hidden"></div>

        <div className="text-sm text-center md:text-right">
          <p className="mb-2 text-lg font-semibold">Follow us on:</p>
          <div className="flex justify-center md:justify-end space-x-6 mt-2">
            <a
              href="#"
              className="text-blue-400 hover:text-blue-500 transition-colors"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="text-blue-300 hover:text-blue-400 transition-colors"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-red-500 hover:text-red-600 transition-colors"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
