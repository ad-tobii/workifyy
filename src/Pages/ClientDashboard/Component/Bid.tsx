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
      <button className="flex items-center bg-zinc-950 px-4 py-2 text-lg text-white hover:text-[#32cd32] ">
        Bids
        <FaChevronDown className="ml-2" />
      </button>
      {isHovered && (
        <div className="absolute right-0 z-10 mt-2 w-80 origin-top-right transform overflow-hidden rounded-md border border-black bg-[#1e1e23] shadow-lg transition duration-300 ease-in-out">
          <div className="p-4">
            <div className="mb-2">
              <Link
                to="#"
                className="block px-4 py-2 text-white hover:bg-gray-100"
              >
                Dashboard
              </Link>
              <Link
                to="#"
                className="block px-4 py-2 text-white hover:bg-gray-100"
              >
                Jobs Available
              </Link>
              <Link
                to="#"
                className="block px-4 py-2 text-white hover:bg-gray-100"
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
