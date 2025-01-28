import React from "react";
import Image from "next/image";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaBuilding, 
  FaNewspaper, 
  FaBullhorn, 
  FaBriefcase, 
  FaEnvelope, 
  FaShieldAlt, 
  FaFileContract, 
  FaQuestionCircle 
} from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="py-8 md:py-10 bg-black text-gray-200 sm:pt-12 lg:pt-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        
        {/* ==================== Main Grid Section ==================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 sm:gap-8 md:gap-12 lg:gap-16">
          
          {/* About Section */}
          <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8 mb-8 sm:mb-0">
            <Image
              className="w-auto h-8 md:h-10"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logo-alt.svg"
              alt="Logo"
              width={120}
              height={40}
            />

            <p className="text-sm mt-4 md:mt-5 leading-relaxed">
              Delivering the latest news, analysis, and in-depth reporting on global stories. Stay informed with our reliable news platform.
            </p>

            <ul className="flex items-center space-x-3 md:space-x-4 mt-5 md:mt-6">
              {/* Social Icons */}
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center bg-gray-700 text-white w-7 h-7 md:w-8 md:h-8 rounded-full hover:bg-gray-600 transition-colors"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center bg-gray-700 text-white w-7 h-7 md:w-8 md:h-8 rounded-full hover:bg-gray-600 transition-colors"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center bg-gray-700 text-white w-7 h-7 md:w-8 md:h-8 rounded-full hover:bg-gray-600 transition-colors"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center bg-gray-700 text-white w-7 h-7 md:w-8 md:h-8 rounded-full hover:bg-gray-600 transition-colors"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links Section */}
          <div className="col-span-1 mb-8 sm:mb-0">
            <h3 className="text-base md:text-lg font-semibold mb-4 border-b-2 border-red-600 inline-block pb-1">
              Company
            </h3>

            <ul className="space-y-3 md:space-y-4">
              {[
                { text: "About Us", icon: <FaBuilding /> },
                { text: "Editorial Standards", icon: <FaNewspaper /> },
                { text: "Advertise", icon: <FaBullhorn /> },
                { text: "Careers", icon: <FaBriefcase /> }
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-gray-200 flex items-center group">
                    <span className="mr-3 text-gray-400">
                      {item.icon}
                    </span>
                    <span className="hover:underline">
                      {item.text}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div className="col-span-1 mb-8 sm:mb-0">
            <h3 className="text-base md:text-lg font-semibold mb-4 border-b-2 border-red-600 inline-block pb-1">
              Resources
            </h3>

            <ul className="space-y-3 md:space-y-4">
              {[
                { text: "Contact Us", icon: <FaEnvelope /> },
                { text: "Privacy Policy", icon: <FaShieldAlt /> },
                { text: "Terms of Service", icon: <FaFileContract /> },
                { text: "FAQ", icon: <FaQuestionCircle /> }
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-gray-200 flex items-center group">
                    <span className="mr-3 text-gray-400">
                      {item.icon}
                    </span>
                    <span className="hover:underline">
                      {item.text}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-2 mb-4 sm:mb-0">
            <h3 className="text-base md:text-lg font-semibold mb-4 border-b-2 border-red-600 inline-block pb-1">
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
                className="w-full mt-3 md:mt-4 bg-red-600 text-white p-2.5 md:p-3 rounded-md hover:bg-red-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* ==================== Footer Bottom Section ==================== */}
        <hr className="my-8 md:my-10 border-gray-700" />

        <p className="text-xs md:text-sm text-center text-gray-400">
          &copy; {new Date().getFullYear()} Your News Platform. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};


export default Footer;
