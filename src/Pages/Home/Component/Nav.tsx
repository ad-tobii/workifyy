import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Sign Up", to: "/signup" },
  { name: "Log In", to: "/signin" },
  { name: "Explore", to: "" },
];

type NavProps = {
  children: React.ReactNode;
};

export default function Nav({ children }: NavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className=" relative  w-full bg-[url('/assets/ClientSection2.jpg')] bg-cover bg-center  bg-no-repeat ">
      <div className="pointer-events-none absolute inset-0 z-10 bg-black bg-opacity-50" />

      <header className="absolute inset-x-0 top-0 z-30 border-b p-3">
        <nav
          className=" container flex items-center justify-between pt-1"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5  text-white">
              <span className="font-logoFonts text-3xl text-[#32CD32]">
                WORKIFYY
              </span>
            </Link>
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
          <div className="hidden text-white lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                to={item.to}
                key={item.name}
                className="relative text-xl font-semibold leading-6 text-white duration-500 ease-in-out after:absolute after:bottom-[-1rem] after:left-0 after:h-[3px] after:w-0 after:bg-[#32cd32] after:transition-all after:duration-300 hover:text-[#32cd32] hover:transition-all hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="fixed inset-0 z-50 bg-white"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />

          <Dialog.Panel className="fixed inset-y-0 right-0 w-full overflow-y-auto bg-black px-6 py-6 miniLaptop:max-w-sm miniLaptop:ring-1 miniLaptop:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5 text-white">
                <span className="font-logoFonts text-3xl text-[#32CD32]">
                  WORKIFYY
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
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-900"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    to=""
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative z-20">{children}</div>
    </div>
  );
}
