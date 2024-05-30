import { FaUser, FaHammer } from "react-icons/fa6";
import { useState } from "react";
import SignupBtns from "./SignupBtns";
function SignupOtions() {
  const [selectedRadio, setSelectedRadio] = useState<string | null>(null);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(event.target.id);
  };

  return (
    <>
      <div className="radiogroup mt-8  flex justify-center gap-x-3.5 mobile:inline  mobile:gap-0 miniTablet:inline ">
        <div className="mobile:mt-12 mobile:flex mobile:justify-center miniTablet:mt-12 miniTablet:flex miniTablet:justify-center">
          <input
            type="radio"
            name="radio-group"
            className="hidden"
            id="radio1"
            onChange={handleRadioChange}
          />

          <label
            className=" myrads flex h-48 w-48 rounded border-2 border-solid border-gray-400
      pt-4  text-white after:-ml-8 after:-mt-2 after:flex after:h-7
      after:w-7 after:gap-y-4 after:rounded-full after:border-4
      after:border-solid after:border-gray-400 hover:border-[#32cd32] mobile:h-32 mobile:w-[19rem]  mobile:after:ml-5 miniTablet:w-[20rem] miniTablet:rounded miniTablet:after:-ml-[2.4rem] miniTablet:after:h-10 miniTablet:after:w-10"
            htmlFor="radio1"
          >
            <pre className="ml-2 mt-6 text-lg mobile:hidden miniTablet:hidden">
              <FaHammer className="mb-3" />
              I’m a{"\n"}professional,{"\n"}looking for work.
            </pre>
            <pre className="ml-4 hidden text-[1.44rem]  mobile:inline miniTablet:mt-4 miniTablet:inline miniTablet:text-[1.8rem]">
              <FaHammer className="mb-3" />
              I'm a Professional{"\n"}looking for work.
            </pre>
          </label>
        </div>
        <div className="mobile:mt-10 mobile:flex mobile:justify-center miniTablet:mt-8 miniTablet:flex miniTablet:justify-center">
          {" "}
          <input
            type="radio"
            name="radio-group"
            className="hidden"
            id="radio2"
            onChange={handleRadioChange}
          />
          <label
            className=" myrads flex h-48 w-48 rounded border-2 border-solid border-gray-400
      pt-4 text-white after:-mt-2 after:ml-2 after:flex after:h-7
      after:w-7 after:gap-y-4 after:rounded-full after:border-4
      after:border-solid after:border-gray-400 hover:border-[#32cd32] mobile:h-32   mobile:w-[19rem] mobile:after:-ml-1 miniTablet:w-[20rem] miniTablet:rounded miniTablet:after:-ml-[0.4rem] miniTablet:after:h-10 miniTablet:after:w-10"
            htmlFor="radio2"
          >
            <pre className="ml-2 mt-6 text-lg mobile:hidden miniTablet:hidden">
              <FaUser className="mb-3" />
              I’m a client {"\n"}Looking to{"\n"}hire.
            </pre>

            <pre className="ml-4 hidden text-[1.44rem]  mobile:inline ">
              <FaUser className="mb-3" />
              I'm a client looking{"\n"}to hire.
            </pre>
            <pre className="ml-4  hidden  text-[1.44rem] miniTablet:mt-4 miniTablet:inline miniTablet:text-[1.8rem]">
              <FaUser className="mb-3" />
              I'm a client{"\n"}looking{""} to hire.
            </pre>
          </label>
        </div>
      </div>
      <SignupBtns selectedRadio={selectedRadio} />
    </>
  );
}

export default SignupOtions