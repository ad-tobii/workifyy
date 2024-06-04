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
      <div className="  mt-12  flex  justify-center gap-x-5 ">
        <input
          type="radio"
          name="radio-group"
          className="hidden"
          id="radio1"
          onChange={handleRadioChange}
        />
        <label
          className="   h-56 w-56 cursor-pointer rounded border-2 border-solid border-gray-400
      pt-4  text-white after:-mt-[75%] after:ml-[83%] after:flex  after:h-7
      after:w-7  after:rounded-full after:border-4
      after:border-solid after:border-gray-400 hover:border-[#32cd32]   mobile:h-[10rem] mobile:w-[80%] mobile:after:-mt-[40%] mobile:after:ml-[87%] laptop:w-[38%] laptop:after:-mt-[65%]"
          htmlFor="radio1"
        >
          <pre className="ml-2 mt-6 text-[1.4rem] mobile:hidden miniTablet:hidden laptop:text-[135%]">
            <FaHammer className="mb-3" />
            I’m a{"\n"}professional,{"\n"}looking for work.
          </pre>
          <pre className="ml-[5%] mt-[5%] hidden text-[1.5rem] mobile:inline-block ">
            <FaHammer className="mb-3" />
            I’m a professional,{"\n"}looking for work.
          </pre>
        </label>{" "}
        <input
          type="radio"
          name="radio-group"
          className="hidden"
          id="radio2"
          onChange={handleRadioChange}
        />
        <label
          className=" h-56 w-56 cursor-pointer rounded border-2 border-solid
      border-gray-400 pt-4 text-white after:-mt-[75%] after:ml-[83%] after:flex
      after:h-7  after:w-7 after:rounded-full
      after:border-4 after:border-solid after:border-gray-400 hover:border-[#32cd32] mobile:-ml-[85%] mobile:mt-[50%] mobile:h-[10rem] mobile:w-[80%] mobile:after:-mt-[40%] mobile:after:ml-[87%] laptop:w-[38%] laptop:after:-mt-[65%]"
          htmlFor="radio2"
        >
          <pre className=" ml-2  mt-6 text-[1.4rem] mobile:hidden miniTablet:hidden laptop:text-[135%]">
            <FaUser className="mb-3" />
            I’m a client {"\n"}Looking to{"\n"}hire.
          </pre>

          <pre className="ml-[5%] mt-[8%] hidden text-[1.5rem]  mobile:inline-block ">
            <FaUser className="" />
            I'm a client looking{"\n"}to hire.
          </pre>
        </label>
      </div>
      <SignupBtns selectedRadio={selectedRadio} />
    </>
  );
}

export default SignupOtions;
