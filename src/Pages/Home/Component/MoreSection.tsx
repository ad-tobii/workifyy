import { FaStar } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

function MoreSection() {
  return (
    <div>
      <main>
        <section className="flex justify-center self-center content-center mx-auto mt-28">
          <div className="bg-[url('/assets/Section2.jpg')] bg-center bg-cover bg-no-repeat w-[40rem] h-[90vh] rounded-sm"></div>

          <div className="bg-[#32CD32] w-heroWidth h-[90vh] rounded-sm pl-10 pt-14">
            <h1 className=" font-bold text-5xl text-black mxa-w-[50rem] pb-10 leading-relaxed">
              Why businesses turn to Workifyy
            </h1>
            <div className="flex gap-10 text-black  pb-8">
              <div>
                <FaStar />
              </div>
              <ul>
                <h2 className="font-bold text-xl ">Proof of quality</h2>
                <li className="font-extralight ">
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
                <li className="font-extralight text-base max-w-[30rem]">
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
                <li className="font-extralight text-base max-w-[30rem]">
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
