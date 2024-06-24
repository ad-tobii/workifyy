import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { Dialog,  Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  
} from "@heroicons/react/24/outline";
import Notification from "./Notification";
import Bids from "./Bid";
import Jobs from "./Jobs";
import ProfileDropdown from "./Profile";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative">
      <nav className="bg-zinc-950 p-4 text-white">
        <div className="flex items-center justify-between">
          <div className="ml-12 miniLaptop:ml-4 tablet:ml-4 tablet:text-4xl xsMobile:ml-1 miniTablet:ml-4 miniMobile:ml-3 mobile:ml-3 font-logoFonts text-3xl text-[#32CD32]">
            Workifyy
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="mr-4 hidden items-center space-x-3 lg:flex">
            <Bids />
            <Jobs />
            <Link
              to="/wallet"
              className="px-4 py-2 text-lg hover:text-[#32cd32] hover:underline"
            >
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

      <Transition show={mobileMenuOpen} as={Fragment}>
        <Dialog
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 w-full bg-zinc-950 p-6 sm:max-w-md">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5 text-white">
                <span className="font-logoFonts text-3xl text-[#32CD32]">
                  Workifyy
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white">
                <div className="flex flex-col items-start space-y-2 py-6">
                  <Bids />
                  <Jobs />
                  <Link
                    to="/wallet"
                    className="block rounded-lg px-4 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-900"
                  >
                    Wallet
                  </Link>
                  <div className="">
                    <Notification />
                  </div>
                  
                  <div className="relative px-4 py-2">
                    <ProfileDropdown />
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Navbar;
