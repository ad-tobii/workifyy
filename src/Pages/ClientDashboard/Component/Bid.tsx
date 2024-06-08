import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const Bids = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setTimeout(() => setIsHovered(false), 300)}
    >
      <button className="flex items-center bg-gray-800 px-4 py-2 text-lg text-white hover:bg-gray-700">
        Bid
        <FaChevronDown className="ml-2" />
      </button>
      {isHovered && (
        <div className="absolute right-0 z-10 mt-2 w-80 origin-top-right transform overflow-hidden rounded-md border border-gray-300 bg-white shadow-lg transition duration-300 ease-in-out">
          <div className="p-4">
            <div className="mb-2">
              <Link
                to="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Dashboard
              </Link>
              <Link
                to="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Jobs Available
              </Link>
              <Link
                to="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Selected Jobs
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bids;
