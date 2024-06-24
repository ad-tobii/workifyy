import React from "react";
import { Link } from "react-router-dom";
import Notification from "./Notification";
import Bids from "./Bid";
import Jobs from "./Jobs";
import ProfileDropdown from "./Profile";

const Navbar: React.FC = () => {
  return (
    <nav className=" p-4 text-white">
      <div className="flex items-center justify-between">
        <div className="ml-12 font-logoFonts text-3xl text-[#32CD32]">
          Workifyy
        </div>
        <div className="flex items-center mr-4 space-x-3">
          <Bids />
          <Jobs />
          <Link to="/wallet" className="px-4 py-2 text-lg hover:underline hover:text-[#32cd32]">
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
