import { FaMapPin } from "react-icons/fa6";
import { FaSignInAlt } from "react-icons/fa";
import { FaShield } from "react-icons/fa6";

function Section() {
  return (
    <div className="container">
      <div className=" mt-28 flex justify-between items-center xsMobile:flex-col xsMobile:items-center miniMobile:flex-col mobile:flex-col miniTablet:flex-col tablet:flex-col miniLaptop:flex-col laptop:flex-col">
        <div>
          <img
            src="/assets/vecimg.png"
            className="vecimg xsMobile:w-[15rem] xsMobile:-mt-8 xsMobile:mb-6 miniMobile:w-[20rem] miniMobile:-mt-12 miniMobile:mb-8 mobile:w-[20rem] mobile:-mt-8 mobile:mb-8 miniTablet:w-[20rem] miniTablet:-mt-8 miniTablet:mb-8 tablet:w-[25rem] tablet:-mt-8 tablet:mb-8 miniLaptop:w-[27rem] miniLaptop:-mt-8 miniLaptop:mb-10 laptop:w-[32rem] laptop:-mt-8 laptop:mb-10  desktop:w-[50rem]"
            alt=""
          />
        </div>

        <div className="">
          <h1 className="ml-12 content-center self-center pb-3 text-left text-3xl font-bold leading-relaxed text-white xsMobile:text-lg miniMobile:text-lg mobile:text-2xl miniTablet:text-2xl">
            Workifyy your work game, it’s easy
          </h1>
          <div className="flex gap-6   pb-8 text-white  miniTablet:gap-4">
            <div>
              <FaSignInAlt className="pt-2 text-[1.8rem]" />
            </div>
            <ul>
              <h2 className="text-xl font-bold miniTablet:text-lg">
                No cost to join
              </h2>
              <li className="font-extralight text-[#32CD32] xsMobile:text-sm miniMobile:max-w-[14rem] miniMobile:text-sm miniLaptop:max-w-[30rem]">
                Register and browse professionals, explore projects, or even
                book a consultation.
              </li>
            </ul>
          </div>

          <div className="flex gap-6  pb-8 text-white miniTablet:gap-4">
            <div>
              <FaMapPin className="pt-2 text-[1.8rem]" />
            </div>
            <ul>
              <h2 className="text-xl font-bold miniTablet:text-lg">
                Post a job and hire top professionals.
              </h2>
              <li className="font-extralight text-[#32CD32]  xsMobile:text-sm miniMobile:max-w-[14rem] miniMobile:text-sm miniLaptop:max-w-[30rem]">
                Finding talent doesn’t have to be a chore. Post a job or we can
                search for you!
              </li>
            </ul>
          </div>

          <div className="flex gap-6  text-white  miniTablet:gap-4">
            <div>
              <FaShield className="pt-2 text-[1.8rem]" />
            </div>
            <ul>
              <h2 className="text-xl font-bold xsMobile:text-lg">
                Work with the best—without breaking the bank
              </h2>
              <li className="font-extralight text-[#32CD32]  xsMobile:max-w-[15rem] xsMobile:text-sm miniMobile:max-w-[14rem] miniMobile:text-sm miniLaptop:max-w-[30rem]">
                Workifyy makes it affordable to up your work and take advantage
                of low transaction rates.
              </li>
            </ul>
          </div>
          <div className="ml-14 flex gap-3 pt-10">
            <div>
              <button className=" rounded-sm border-2 border-[#32CD32] bg-[#32CD32] px-6 py-3 text-sm font-semibold text-white shadow-sm duration-500 ease-in-out  hover:bg-transparent hover:text-white hover:transition-all">
                Sign In
              </button>
            </div>

            <div>
              <button className="rounded border-2 border-[#32CD32] bg-transparent px-4 py-2.5 font-semibold text-[#32CD32] duration-500 ease-in-out hover:bg-[#32CD32] hover:text-white hover:transition-all">
                {" "}
                Hire A Pro
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
