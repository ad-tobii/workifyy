import { FaStar } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

function MoreSection() {
  return (
    <div>
      <main>
        <section className="flex justify-center self-center content-center mx-auto mt-28 laptop:flex-col">
          <div className="bg-[url('/assets/Section2.jpg')] bg-center bg-cover bg-no-repeat w-[40rem] h-[90vh] rounded-sm laptop:mx-auto miniTablet:w-[23rem]"></div>

          <div className="bg-[#f7faf7] w-[40rem] h-[90vh] rounded-sm pl-10 pt-14 laptop:mx-auto miniTablet:w-[23rem]  miniTablet:h-[110vh]  miniTablet:pl-5">
            <h1 className=" font-bold text-5xl text-black mxa-w-[50rem] pb-10 leading-relaxed miniTablet:text-3xl">
              Why businesses turn to Workifyy
            </h1>
            <div className="flex gap-10 text-black  pb-8 ">
              <div>
                <FaStar />
              </div>
              <ul>
                <h2 className="font-bold text-xl ">Proof of quality</h2>
                <li className="font-light ">
                  Check any pro’s work samples, client reviews, and identity
                  verification.
                </li>
              </ul>
            </div>

            <div className="flex gap-10  text-black pb-8">
              <div>
                <FaDollarSign />
              </div>
              <ul>
                <h2 className="font-bold text-xl">No cost until you hire</h2>
                <li className="font-light text-base max-w-[30rem]">
                  Interview potential fits for your job, negotiate rates, and
                  only pay for work you approve.
                </li>
              </ul>
            </div>

            <div className="flex gap-10  text-black">
              <div>
                <FaCheck />
              </div>
              <ul>
                <h2 className="font-bold text-xl">Safe and secure</h2>
                <li className="font-light text-base max-w-[30rem] miniTablet:max-w-[18rem]">
                  Focus on your work knowing we help protect your data and
                  privacy. We’re here with 24/7 support if you need it.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MoreSection;
