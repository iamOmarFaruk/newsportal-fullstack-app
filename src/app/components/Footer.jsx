import React from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10 bg-gray-900 text-gray-200 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          {/* About Section */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <Image
              className="w-auto h-10"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logo-alt.svg" // Replace with your logo path
              alt="Logo"
              width={120}
              height={40}
            />
            <p className="text-sm mt-5 leading-relaxed">
              Delivering the latest news, analysis, and in-depth reporting on global stories. Stay informed with our reliable news platform.
            </p>
            <ul className="flex items-center space-x-4 mt-6">
              {/* Social Icons */}
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center bg-gray-700 text-white w-8 h-8 rounded-full hover:bg-gray-600"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center bg-gray-700 text-white w-8 h-8 rounded-full hover:bg-gray-600"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center bg-gray-700 text-white w-8 h-8 rounded-full hover:bg-gray-600"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center bg-gray-700 text-white w-8 h-8 rounded-full hover:bg-gray-600"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-red-600 inline-block pb-1">Company</h3>
            <ul className="space-y-3">
              {["About Us", "Editorial Standards", "Advertise", "Careers"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-sm hover:text-red-600 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-red-600 inline-block pb-1">Resources</h3>
            <ul className="space-y-3">
              {["Contact Us", "Privacy Policy", "Terms of Service", "FAQ"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-sm hover:text-red-600 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-red-600 inline-block pb-1">
              Subscribe to Our Newsletter
            </h3>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full p-3 rounded-md border border-gray-600 bg-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button
                type="submit"
                className="w-full mt-4 bg-red-600 text-white p-3 rounded-md hover:bg-red-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="my-10 border-gray-700" />

        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} Your News Platform. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
