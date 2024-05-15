import { FaMapPin } from "react-icons/fa6";
import { FaSignInAlt } from "react-icons/fa";
import { FaShield } from "react-icons/fa6";

function Section() {
  return (
    <div className="flex justify-center align-middle self-center content-center gap-20 mt-28">
      <div>
        <img
          src="/assets/Workifyy-illustration.png"
          className="w-[30rem] rounded"
          alt=""
        />
      </div>

      <div>
        <h1 className="text-3xl font-bold text-white leading-relaxed content-center self-center text-center pb-3 ">
          Workifyy your work game, it’s easy
        </h1>
        <div className="flex gap-10  text-white pb-8">
          <div>
            <FaSignInAlt />
          </div>
          <ul>
            <h2 className="font-bold text-xl">No cost to join</h2>
            <li className="font-extralight text-primaryColor">
              Register and browse professionals, explore projects, or even book
              a consultation.
            </li>
          </ul>
        </div>

        <div className="flex gap-10  text-white pb-8">
          <div>
            <FaMapPin />
          </div>
          <ul>
            <h2 className="font-bold text-xl">
              Post a job and hire top talent
            </h2>
            <li className="font-extralight text-primaryColor">
              Finding talent doesn’t have to be a chore. Post a job or we can
              search for you!
            </li>
          </ul>
        </div>

        <div className="flex gap-10  text-white">
          <div>
            <FaShield />
          </div>
          <ul>
            <h2 className="font-bold text-xl">
              Work with the best—without breaking the bank
            </h2>
            <li className="font-extralight text-primaryColor">
              Workifyy makes it affordable to up your work and take advantage of
              low transaction rates.
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
  );
}

export default Section;
