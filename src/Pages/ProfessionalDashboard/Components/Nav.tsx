import { useState, Fragment } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

// Type definitions for the FormLink and FormProps
type FormLink = {
  name: string;
  to?: string;
  dropdown?: string[] | { Title: string; to: string }[];
  icon?: React.ComponentType<{ className?: string }>;
};

type FormProps = {
  Formnavigation?: FormLink[];
};

// Utility function to combine class names
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

// Main navigation component
export default function Nav({ Formnavigation = [] }: FormProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 z-10 bg-black bg-opacity-50" />

      <header className="absolute inset-x-0 top-0 z-30 p-3">
        <nav
          className="container flex items-center justify-between"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5 text-white">
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
          <div className="hidden text-white lg:flex lg:gap-x-6">
            {Formnavigation.map((item) =>
              item.dropdown ? (
                <Menu
                  as="div"
                  className="relative inline-block text-left"
                  key={item.name}
                >
                  <Menu.Button className="flex content-center items-center justify-center gap-1 self-center px-3 py-2 text-base font-semibold leading-7 text-white duration-500 ease-in-out after:absolute after:bottom-[-.1rem] after:left-0 after:h-[3px] after:w-0 after:bg-[#32cd32] after:transition-all after:duration-300 hover:text-[#32cd32] hover:transition-all hover:after:w-full">
                    {item.name}
                    <ChevronDownIcon
                      className="-mr-1 h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {item.dropdown.map((dropdownItem) =>
                          typeof dropdownItem === "string" ? (
                            <Menu.Item key={dropdownItem}>
                              {({ active }: { active: boolean }) => (
                                <Link
                                  to={`/${dropdownItem
                                    .toLowerCase()
                                    .replace(" ", "-")}`}
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm",
                                  )}
                                >
                                  {dropdownItem}
                                </Link>
                              )}
                            </Menu.Item>
                          ) : (
                            <Menu.Item key={dropdownItem.Title}>
                              {({ active }: { active: boolean }) => (
                                <Link
                                  to={dropdownItem.to}
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm",
                                  )}
                                >
                                  {dropdownItem.Title}
                                </Link>
                              )}
                            </Menu.Item>
                          ),
                        )}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              ) : (
                <Link
                  key={item.name}
                  to={item.to ?? "#"}
                  className="relative mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white duration-500 ease-in-out after:absolute after:bottom-[-.1rem] after:left-0 after:h-[3px] after:w-0 after:bg-[#32cd32] after:transition-all after:duration-300 hover:text-[#32cd32] hover:transition-all hover:after:w-full"
                >
                  {item.icon ? (
                    <item.icon
                      className="h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  ) : (
                    item.name
                  )}
                </Link>
              ),
            )}
          </div>
        </nav>

        <Dialog
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
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
                  {Formnavigation.map((item) =>
                    item.dropdown ? (
                      <div key={item.name} className="mx-3">
                        <button
                          onClick={() => handleDropdownToggle(item.name)}
                          className="flex w-full justify-between rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-900"
                        >
                          {item.name}
                          <ChevronDownIcon
                            className={`h-5 w-5 transform text-white ${
                              openDropdown === item.name
                                ? "rotate-180"
                                : "rotate-0"
                            } transition-transform`}
                            aria-hidden="true"
                          />
                        </button>
                        {openDropdown === item.name && (
                          <div className="ml-4 space-y-2">
                            {item.dropdown.map((dropdownItem) =>
                              typeof dropdownItem === "string" ? (
                                <Link
                                  key={dropdownItem}
                                  to={`/${dropdownItem
                                    .toLowerCase()
                                    .replace(" ", "-")}`}
                                  className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-900"
                                >
                                  {dropdownItem}
                                </Link>
                              ) : (
                                <Link
                                  key={dropdownItem.Title}
                                  to={dropdownItem.to}
                                  className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-900"
                                >
                                  {dropdownItem.Title}
                                </Link>
                              ),
                            )}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        key={item.name}
                        to={item.to ?? "#"}
                        className="mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-900"
                      >
                        {item.icon ? (
                          <item.icon
                            className="h-5 w-5 text-white"
                            aria-hidden="true"
                          />
                        ) : (
                          item.name
                        )}
                      </Link>
                    ),
                  )}
                </div>
                <div className="py-6">
                  <Link
                    to="#"
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
    </div>
  );
}
