import React from "react";
import { Link } from "react-router-dom";
import Notification from "./Notification";
import Bids from "./Bid";
import Jobs from "./Jobs";
import ProfileDropdown from "./Profile";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="flex items-center justify-between">
        <div className="ml-12 font-logoFonts text-3xl text-[#32CD32]">
          Workifyy
        </div>
        <div className="flex items-center space-x-2">
          <Bids />
          <Jobs />
          <Link to="/wallet" className="px-4 py-2 text-lg hover:underline">
            Wallet
          </Link>
          <div className="relative">
            <Notification />
          </div>
          <div className="relative">
            <ProfileDropdown />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
