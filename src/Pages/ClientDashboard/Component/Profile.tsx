import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaUserAlt,
  // FaSun,
  FaUserPlus,
  FaSignOutAlt,
  FaCog,
} from "react-icons/fa";

const ProfileDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="focus:outline-none">
        <FaUserAlt
          className="cursor-pointer text-white hover:text-gray-400"
          size={24}
        />
      </button>
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-64 origin-top-right transform overflow-hidden rounded-md border border-gray-300 bg-white shadow-lg transition duration-300 ease-in-out">
          <div className="flex flex-col items-center border-b p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-300">
              <FaUserAlt size={24} className="text-gray-600" />
            </div>
            <div className="mt-2 text-center">
              <p className="font-semibold text-gray-800">
                Ibrahim Bamariwu Muhammad
              </p>
              <p className="text-green-600">Client</p>
            </div>
          </div>
          <Link
            to="/settings"
            className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            <FaCog className="mr-2" />
            Settings
          </Link>
          {/*
          <button
            className="flex w-full items-center px-4 py-2 text-left text-gray-800 hover:bg-gray-100"
            onClick={() => {
              // Toggle theme logic
            }}
          >
            <FaSun className="mr-2" />
            Theme: Light mode
          </button>
          
          <Link
            to="/invite"
            className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            <FaUserPlus className="mr-2" />
            Invite a Coworker
          </Link>
          */}
          <Link
            to="/logout"
            className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
