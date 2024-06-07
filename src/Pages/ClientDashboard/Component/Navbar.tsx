import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="flex items-center justify-between">
        <div className="ml-12 font-logoFonts text-3xl text-[#32CD32]">
          Workifyy
        </div>
        <div className="flex items-center space-x-4">
          <a href="#bid" className="hover:underline">
            Bid
          </a>
          <a href="#jobs" className="hover:underline">
            Jobs
          </a>
          <a href="#wallet" className="hover:underline">
            Wallet
          </a>
          <a href="#notification" className="hover:underline">
            Notifications
          </a>
          <a href="#profile" className="flex items-center hover:text-gray-400">
            <FaUserAlt size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
