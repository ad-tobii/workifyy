import { FaMapPin } from "react-icons/fa6";
import { FaSignInAlt } from "react-icons/fa";
import { FaShield } from "react-icons/fa6";

function Section() {
  return (
    <div className=" mt-28 flex content-center justify-between  self-center align-middle laptop:flex-col laptop:gap-[4rem]">
      <div className="mx-auto">
        <img
          src="/assets/worker2.jpg"
          className="w-[28rem]  rounded-lg mt-4 mobile:w-[16rem] miniTablet:w-[18rem]"
          alt=""
        />
      </div>

      <div className="mx-auto">
        <h1 className="ml-12 content-center self-center pb-3 text-left text-3xl font-bold leading-relaxed text-white miniMobile:pr-3  tablet:text-xl">
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
            <li className="font-extralight text-[#32CD32] miniMobile:text-sm miniTablet:pr-10 miniTablet:text-base desktop:max-w-[28rem]">
              Register and browse professionals, explore projects, or even book
              a consultation.
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
            <li className="font-extralight text-[#32CD32]  miniMobile:text-sm  miniTablet:pr-10 miniTablet:text-sm desktop:max-w-[23rem]">
              Finding professionals doesn’t have to be a chore. Post a job or we can
              search for you!
            </li>
          </ul>
        </div>

        <div className="flex gap-6  text-white  miniTablet:gap-4">
          <div>
            <FaShield className="pt-2 text-[1.8rem]" />
          </div>
          <ul>
            <h2 className="text-xl font-bold miniTablet:text-lg">
              Work with the best—without breaking the bank
            </h2>
            <li className="font-extralight text-[#32CD32] miniMobile:text-sm miniTablet:pr-10  miniTablet:text-sm desktop:max-w-[28rem]">
              Workifyy makes it affordable to up your work and take advantage of
              low transaction rates.
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
  );
}

export default Section;
