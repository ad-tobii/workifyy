import BaseFooter from "./BaseFooter";
function Footer() {
  return (
    <footer className="mt-[12.8rem]">
      <div className="relative w-full bg-[#000000] py-8 mx-auto">
        <div className=" flex justify-between px-10 pb-8 tablet:flex-col">
          <div className="nav__logo mt-[12rem]">
            <a href="#" className="">
              <span className="text-[3rem] text-[#32CD32]">WORKIFYY</span>
            </a>
          </div>
          <div>
            <h6 className="pb-10 pt-24 text-[1.5rem] uppercase text-white tablet:pt-12">
              Company
            </h6>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#" className="text-[1.3rem] text-[#32CD32]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-[1.3rem] text-[#32CD32]">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="text-[1.3rem] text-[#32CD32]">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-[1.3rem] text-[#32CD32]">
                  Timeline,Policies & Prices
                </a>
              </li>
              <li>
                <a href="#" className="text-[1.3rem] text-[#32CD32]">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-[1.3rem] text-[#32CD32]">
                  Investors
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="pb-10 pt-24 text-[1.5rem] uppercase text-white tablet:pt-12">
              Support
            </h6>

            <ul className="flex flex-col gap-4">
              <li>
                <a href="#" className="text-[1.3rem] text-[#32CD32]">
                  FAQ
                </a>
              </li>

              <li>
                <a href="#" className="text-[1.3rem] text-[#32CD32]">
                  Contact Us
                </a>
              </li>

              <li>
                <a href="#" className="text-[1.3rem] text-[#32CD32]">
                  Online Chat
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="pb-10 pt-24 text-[1.5rem] uppercase text-white tablet:pt-12">
              Legals
            </h6>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#" className="text-[1.3rem] text-[#32CD32]">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-[1.3rem] text-[#32CD32]">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-[1.3rem] text-[#32CD32]">
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
