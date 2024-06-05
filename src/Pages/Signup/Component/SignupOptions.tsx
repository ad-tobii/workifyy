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
      <div className=" tabs:mt-[7%]  mt-12  flex justify-center gap-x-5 ">
        <input
          type="radio"
          name="radio-group"
          className="hidden"
          id="radio1"
          onChange={handleRadioChange}
        />
        <label
          className=" Lmobile:w-[80%]  Lmobile:after:-mt-[10rem] Lmobile:after:ml-[90%] pads:after:-mt-[11.5rem] pads:w-[20rem] tabs:w-[90%] tabs:h-[8rem] tabs:after:-mt-[16%] tabs:after:ml-[90%] h-56 w-[20%] cursor-pointer rounded
      border-2  border-solid border-gray-400 pt-4 text-white  after:-mt-[10rem]
      after:ml-[83%]  after:flex after:h-7
      after:w-7 after:rounded-full after:border-4   after:border-solid after:border-gray-400 hover:border-[#32cd32] mobile:h-[10rem] mobile:w-[80%] mobile:after:-mt-[40%] mobile:after:ml-[87%]"
          htmlFor="radio1"
        >
          <pre className=" pads:text-[175%] Lmobile:hidden tabs:hidden ml-[5%] mt-6 text-[140%] mobile:hidden miniTablet:hidden">
            <FaHammer className="mb-3" />
            I’m a{"\n"}professional,{"\n"}looking for work.
          </pre>
          <pre className="Lmobile:mt-[2.5rem] Lmobile:inline-block Lmobile:text-[170%] ml-[5%] mt-[8%] hidden text-[135%] mobile:inline-block ">
            <FaHammer className="mb-3" />
            I’m a professional,{"\n"}looking for work.
          </pre>
          <pre className="tabs:inline-block  ml-[4%]  mt-[4%] hidden text-[135%] font-semibold ">
            <FaHammer className="mb-3" />
            I’m a professional, looking for work.
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
          className="Lmobile:w-[80%] Lmobile:-ml-[84%] Lmobile:after:-mt-[10rem] Lmobile:after:ml-[90%]  Lmobile:mt-[16rem] pads:after:-mt-[11.5rem] pads:w-[20rem] tabs:w-[90%] tabs:h-[8rem] tabs:after:-mt-[16%] tabs:after:ml-[90%] tabs:mt-[28%] tabs:-ml-[93.2%] h-56 w-[20%] cursor-pointer rounded
      border-2 border-solid border-gray-400 pt-4 text-white after:-mt-[10rem]
      after:ml-[83%]  after:flex after:h-7
      after:w-7 after:rounded-full after:border-4 after:border-solid after:border-gray-400 hover:border-[#32cd32] mobile:-ml-[85%] mobile:mt-[50%] mobile:h-[10rem] mobile:w-[80%] mobile:after:-mt-[40%] mobile:after:ml-[87%]"
          htmlFor="radio2"
        >
          <pre className="tabs:hidden Lmobile:hidden pads:text-[175%]  ml-[5%] mt-6 text-[140%] mobile:hidden miniTablet:hidden">
            <FaUser className="mb-3" />
            I’m a client {"\n"}Looking to{"\n"}hire.
          </pre>

          <pre className="Lmobile:mt-[2.5rem] Lmobile:inline-block Lmobile:text-[170%] ml-[5%] mt-[8%] hidden text-[135%]  mobile:inline-block ">
            <FaUser className="mb-3" />
            I'm a client looking{"\n"}to hire.
          </pre>
          <pre className="tabs:inline-block  ml-[4%] mt-[4%] hidden text-[135%] font-semibold ">
            <FaUser className="mb-3" />
            I'm a client looking to hire.
          </pre>
        </label>
      </div>
      <SignupBtns selectedRadio={selectedRadio} />
    </>
  );
}

export default SignupOtions;
