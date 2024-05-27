import React, { useState } from "react";
import { FaUser, FaHammer } from "react-icons/fa6";
function Signup() {
  return (
    <div>
      <Logo />
      <Header />
      <Ball />
    </div>
  );
}

function Logo() {
  return (
    <div className=" ml-4 mt-3 ">
      <a href="/">
        <span className="nav__logo mobile:text-xl">WORKIFYY</span>
      </a>
    </div>
  );
}
function Header() {
  return (
    <div className="mt-3">
      <h1 className="text-white text-3xl flex justify-center mobile:hidden">
        Join as a client or professional
      </h1>
      <pre className="text-white text-3xl mobile:flex justify-center hidden  mt-8">
        Join as a client or
      </pre>
      <pre className="text-white text-3xl mobile:flex justify-center hidden  mt-2">
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
      <div className="radiogroup mt-8  flex gap-x-3.5 justify-center mobile:gap-0 mobile:-ml-7 mobile:inline ">
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
      after:-ml-8 after:-mt-2 hover:border-[#32cd32] mobile:h-32 mobile:w-[19rem]  mobile:after:ml-5 mobile:ml-8 mobile:mt-2"
          htmlFor="radio1"
        >
          <pre className="mt-6 ml-2 text-lg mobile:hidden">
            <FaHammer className="mb-3" />
            I’m a{"\n"}professional,{"\n"}looking for work.
          </pre>
          <pre className="hidden mobile:inline text-[1.44rem]  ml-4">
            <FaHammer className="mb-3" />
            I'm a Professional{"\n"}looking for work.
          </pre>
        </label>
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
      after:ml-2 mobile:after:-ml-1 after:-mt-2 hover:border-[#32cd32] mobile:mt-[1.4rem]  mobile:w-[19rem] mobile:h-32 mobile:ml-8"
          htmlFor="radio2"
        >
          <pre className="mt-6 ml-2 text-lg mobile:hidden">
            <FaUser className="mb-3" />
            I’m a client {"\n"}Looking to{"\n"}hire.
          </pre>

          <pre className="hidden mobile:inline text-[1.44rem]  ml-4">
            <FaUser className="mb-3" />
            I'm a client looking{"\n"}to hire.
          </pre>
        </label>
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
          className={`bg-zinc-300 text-white font-bold py-2 px-4 rounded-3xl ${
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
        <p className="text-white text-center mt-3 ">
          Already have an account?{" "}
          <a href="#" className="mylink">
            Log In
          </a>
        </p>
      </div>
    </>
  );
}
function Ball() {
  return (
    <div className="border-[#32cd32] rounded-full bg-[#32cd32] h-8 w-8 animate-bounce -mt-10 ml-3 mobile:ml-1"></div>
  );
}
export default Signup;
