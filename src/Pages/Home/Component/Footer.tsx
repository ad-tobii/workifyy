import { FaMessage } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

import BaseFooter from "./BaseFooter";
function Footer() {
  return (
    <footer className="container mt-[12.8rem]">
      <div className="relative w-full bg-[#454a52ac] py-8 mx-auto">
        <div className=" flex justify-between px-10 pb-8  miniLaptop:flex-col">
          <div className="mt-[6rem]">
            <a href="#" className="">
              <span className="text-[3rem] text-[#32CD32] nav__logo laptop:text-[1.5rem]">
                WORKIFYY
              </span>
            </a>

            <section className="flex gap-2 py-[2rem]">
              <main className="w-[3rem] h-[3rem] rounded-full border flex items-center justify-center">
                <FaMessage className="text-center text-[1.3rem] text-[#32CD32]" />
              </main>

              <div>
                <h3 className="text-[#32CD32] laptop:text-[1rem]">Email</h3>
                <p>
                  <a
                    href="mailto:Workifyy@gmail.com"
                    className="text-[#32CD32] laptop:text-[1rem]"
                  >
                    Workifyy@gmail.com
                  </a>
                </p>
              </div>
            </section>

            <section className="flex gap-2">
              <main className="w-[3rem] h-[3rem] rounded-full border flex items-center justify-center">
                <FaPhoneAlt className="text-center text-[1.3rem] text-[#32CD32]" />
              </main>

              <div>
                <h3 className="text-[#32CD32] laptop:text-[1rem]">
                  Contact Us
                </h3>
                <p>
                  <a
                    href="tel:+2349081715621"
                    className="text-[#32CD32] laptop:text-[1rem]"
                  >
                    +2349081715621
                  </a>
                </p>
              </div>
            </section>
          </div>

          <div>
            <h6 className="pb-10 pt-24 text-[1.5rem] uppercase text-white laptop:text-[1.2rem]">
              Company
            </h6>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#"
                  className="text-[1.3rem] text-[#32CD32] laptop:text-[1.1rem]"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[1.3rem] text-[#32CD32] laptop:text-[1.1rem]"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[1.3rem] text-[#32CD32] laptop:text-[1.1rem]"
                >
                  Community
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="pb-10 pt-24 text-[1.5rem] uppercase text-white laptop:text-[1.2rem]">
              Support
            </h6>

            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#"
                  className="text-[1.3rem] text-[#32CD32] laptop:text-[1.1rem]"
                >
                  FAQ
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[1.3rem] text-[#32CD32] laptop:text-[1.1rem]"
                >
                  Contact Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[1.3rem] text-[#32CD32] laptop:text-[1.1rem]"
                >
                  Online Chat
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="pb-10 pt-24 text-[1.5rem] uppercase text-white laptop:text-[1.2rem]">
              Legals
            </h6>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#"
                  className="text-[1.3rem] text-[#32CD32] laptop:text-[1.1rem]"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[1.3rem] text-[#32CD32] laptop:text-[1.1rem]"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[1.3rem] text-[#32CD32] laptop:text-[1.1rem]"
                >
                  Terms & Condition
                </a>
              </li>
            </ul>
          </div>
        </div>
        <BaseFooter />
      </div>
    </footer>
  );
}

export default Footer;
