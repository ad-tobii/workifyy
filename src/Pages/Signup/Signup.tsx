import React, { useState } from "react";
import { FaUser, FaHammer } from "react-icons/fa6";
function Signup() {
  return (
    <div>
      <Logo />
      <Header />
    </div>
  );
}

function Logo() {
  return (
    <div className=" ml-4 mt-3 ">
      <a href="/">
        <span className="nav__logo mobile:text-3xl">WORKIFYY</span>
      </a>
    </div>
  );
}
function Header() {
  return (
    <div className="mt-3">
      <h1 className="text-white text-3xl flex justify-center mobile:hidden miniTablet:hidden">
        Join as a client or professional
      </h1>
      <pre className="text-white text-3xl mobile:flex justify-center hidden miniTablet:flex mt-12 miniTablet:mt-10 miniTablet:text-4xl">
        Join as a client or
      </pre>
      <pre className="text-white text-3xl mobile:flex miniTablet:flex justify-center hidden  mt-2 miniTablet:mt-2 miniTablet:text-4xl">
        professional
      </pre>

      <Choice />
    </div>
  );
}
function Choice() {
  const [selectedRadio, setSelectedRadio] = useState<string | null>(null);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(event.target.id);
  };

  return (
    <>
      <div className="radiogroup mt-8  flex gap-x-3.5 justify-center mobile:gap-0  mobile:inline miniTablet:inline ">
        <div className="mobile:flex mobile:justify-center miniTablet:flex miniTablet:justify-center mobile:mt-12 miniTablet:mt-12">
          <input
            type="radio"
            name="radio-group"
            className="hidden"
            id="radio1"
            onChange={handleRadioChange}
          />

          <label
            className=" myrads border-gray-400 border-solid border-2 pt-4 w-48 h-48 rounded
      text-white  flex after:h-7 after:flex after:gap-y-4 after:w-7
      after:border-gray-400 after:border-solid after:border-4 after:rounded-full
      after:-ml-8 after:-mt-2 hover:border-[#32cd32] mobile:h-32 mobile:w-[19rem]  mobile:after:ml-5 miniTablet:w-[20rem] miniTablet:after:-ml-[2.4rem] miniTablet:after:h-10 miniTablet:after:w-10 miniTablet:rounded"
            htmlFor="radio1"
          >
            <pre className="mt-6 ml-2 text-lg mobile:hidden miniTablet:hidden">
              <FaHammer className="mb-3" />
              I’m a{"\n"}professional,{"\n"}looking for work.
            </pre>
            <pre className="hidden mobile:inline text-[1.44rem]  ml-4 miniTablet:inline miniTablet:text-[1.8rem] miniTablet:mt-4">
              <FaHammer className="mb-3" />
              I'm a Professional{"\n"}looking for work.
            </pre>
          </label>
        </div>
        <div className="mobile:flex mobile:justify-center miniTablet:flex miniTablet:justify-center miniTablet:mt-8 mobile:mt-10">
          {" "}
          <input
            type="radio"
            name="radio-group"
            className="hidden"
            id="radio2"
            onChange={handleRadioChange}
          />
          <label
            className=" myrads border-gray-400 border-solid border-2 pt-4 w-48 h-48 rounded
      text-white flex after:h-7 after:flex after:gap-y-4 after:w-7
      after:border-gray-400 after:border-solid after:border-4 after:rounded-full
      after:ml-2 mobile:after:-ml-1 after:-mt-2 hover:border-[#32cd32]   mobile:w-[19rem] mobile:h-32 miniTablet:w-[20rem] miniTablet:after:-ml-[0.4rem] miniTablet:after:h-10 miniTablet:after:w-10 miniTablet:rounded"
            htmlFor="radio2"
          >
            <pre className="mt-6 ml-2 text-lg mobile:hidden miniTablet:hidden">
              <FaUser className="mb-3" />
              I’m a client {"\n"}Looking to{"\n"}hire.
            </pre>

            <pre className="hidden mobile:inline text-[1.44rem]  ml-4 ">
              <FaUser className="mb-3" />
              I'm a client looking{"\n"}to hire.
            </pre>
            <pre className="hidden  text-[1.44rem]  ml-4 miniTablet:inline miniTablet:text-[1.8rem] miniTablet:mt-4">
              <FaUser className="mb-3" />
              I'm a client{"\n"}looking{""} to hire.
            </pre>
          </label>
        </div>
      </div>
      <Foot selectedRadio={selectedRadio} />
    </>
  );
}
type FootProps = {
  selectedRadio: string | null;
};
function Foot({ selectedRadio }: FootProps) {
  return (
    <>
      <div className="flex justify-center mt-8 ">
        <button
          className={`bg-zinc-300 text-white font-bold py-2 px-4 rounded-3xl mobile:text-xl mobile:w-[19rem] miniTablet:w-96 miniTablet:text-2xl mobile:mt-4 miniTablet:mt-4 ${
            selectedRadio
              ? "cursor-pointer myb"
              : "opacity-50 cursor-not-allowed"
          }`}
          disabled={!selectedRadio}
        >
          Create Account
        </button>
      </div>
      <div className="flex justify-center mt-2">
        {" "}
        <p className="text-white text-center mt-3  mobile:mt-4 miniTablet:text-2xl miniTablet:mt-6  mobile:text-xl">
          Already have an account?{" "}
          <a href="#" className="mylink">
            Log In
          </a>
        </p>
      </div>
    </>
  );
}
/*function Ball() {
  return (
    <div className="border-[#32cd32] rounded-full bg-[#32cd32] h-8 w-8 animate-bounce -mt-10 ml-3 mobile:ml-1 miniTablet:mt-12 miniTablet:ml-5 miniTablet:h-12 miniTablet:w-12"></div>
  );
}*/
export default Signup;
