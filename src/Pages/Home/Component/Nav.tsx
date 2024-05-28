import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Sign Up", href: "signup" },
  { name: "Log In", href: "#" },
  { name: "Explore", href: "signup" },
];

type NavProps = {
  children: React.ReactNode;
};

export default function Nav({ children }: NavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative h-[100vh] w-auto bg-[url('/assets/ClientSection.jpg')] bg-cover bg-center bg-no-repeat miniMobile:bg-center miniLaptop:h-[120vh]">
      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-black bg-opacity-50" />

      <header className="absolute inset-x-0 top-0 z-30 border-b">
        <nav className="flex items-center justify-between p-6" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 text-white">
              <span className="font-logoFonts text-3xl text-[#32CD32]">WORKIFYY</span>
            </a>
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
              <a
                key={item.name}
                href={item.href}
                className="relative text-xl font-semibold leading-6 text-white duration-500 ease-in-out after:absolute after:bottom-[-2rem] after:left-0 after:h-[3px] after:w-0 after:bg-[#32cd32] after:transition-all after:duration-300 hover:text-[#32cd32] hover:transition-all hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="fixed inset-0 z-50 bg-white"
        >
          {/* Dialog Overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-50" />
          {/* Dialog Panel */}
          <Dialog.Panel className="fixed inset-y-0 right-0 w-full overflow-y-auto bg-black px-6 py-6 miniLaptop:max-w-sm miniLaptop:ring-1 miniLaptop:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5 text-white">
                <span className="font-logoFonts text-3xl text-[#32CD32]">WORKIFYY</span>
              </a>
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
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
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
