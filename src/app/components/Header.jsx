import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="pb-6 bg-white lg:pb-0">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* lg+ */}
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <a href="#" title="News Portal" className="flex">
              <img
                className="w-auto h-8 lg:h-10"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                alt="News Portal Logo"
              />
            </a>
          </div>

          <button
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
          >
            <svg
              className="block w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              />
            </svg>
          </button>

          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            <a
              href="#"
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600"
            >
              Home
            </a>
            <a
              href="#"
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600"
            >
              World
            </a>
            <a
              href="#"
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600"
            >
              Politics
            </a>
            <a
              href="#"
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600"
            >
              Business
            </a>
            <a
              href="#"
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600"
            >
              Technology
            </a>
            <a
              href="#"
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600"
            >
              Sports
            </a>
            <a
              href="#"
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600"
            >
              Entertainment
            </a>
            <button className="text-black">
              <FaSearch className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
