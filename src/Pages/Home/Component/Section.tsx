import { FaMapPin } from "react-icons/fa6";
import { FaSignInAlt } from "react-icons/fa";
import { FaShield } from "react-icons/fa6";

function Section() {
  return (
    <div className="container">
      <div className="flex mx-auto justify-center align-middle self-center content-center gap-20 mt-28 laptop:flex-col">
        <div className="mx-auto">
          <img
            src="/assets/Workifyy-illustration.png"
            className="w-[30rem] rounded miniTablet:w-[20rem]"
            alt=""
          />
        </div>

        <div className="mx-auto">
          <h1 className="text-3xl font-bold text-white leading-relaxed content-center self-center text-left pb-3 ml-12 tablet:text-xl">
            Workifyy your work game, it’s easy
          </h1>
          <div className="flex gap-6   text-white pb-8  miniTablet:gap-4">
            <div>
              <FaSignInAlt className="text-[1.8rem] pt-2" />
            </div>
            <ul>
              <h2 className="font-bold text-xl miniTablet:text-lg">
                No cost to join
              </h2>
              <li className="font-extralight text-[#32CD32] desktop:max-w-[28rem] miniTablet:text-sm miniTablet:pr-10">
                Register and browse professionals, explore projects, or even
                book a consultation.
              </li>
            </ul>
          </div>

          <div className="flex gap-6  text-white pb-8 miniTablet:gap-4">
            <div>
              <FaMapPin className="text-[1.8rem] pt-2" />
            </div>
            <ul>
              <h2 className="font-bold text-xl miniTablet:text-lg">
                Post a job and hire top talent
              </h2>
              <li className="font-extralight text-[#32CD32] desktop:max-w-[25rem] miniTablet:text-sm miniTablet:pr-10">
                Finding talent doesn’t have to be a chore. Post a job or we can
                search for you!
              </li>
            </ul>
          </div>

          <div className="flex gap-6  text-white  miniTablet:gap-4">
            <div>
              <FaShield className="text-[1.8rem] pt-2" />
            </div>
            <ul>
              <h2 className="font-bold text-xl miniTablet:text-lg">
                Work with the best—without breaking the bank
              </h2>
              <li className="font-extralight text-[#32CD32] desktop:max-w-[28rem]  miniTablet:text-sm miniTablet:pr-10">
                Workifyy makes it affordable to up your work and take advantage
                of low transaction rates.
              </li>
            </ul>
          </div>
          <div className="flex gap-3 ml-14 pt-10">
            <div>
              <button className="PrimaryBtn">Sign In</button>
            </div>

            <div>
              <button className="PrimaryBtn"> Hire A Pro</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
