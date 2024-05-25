import { FaUser, FaHammer } from "react-icons/fa6";


export function SignupOptions() {
  return (
    <>
      <div className="radiogroup mt-8  flex gap-x-3.5 justify-center">
        <input type="radio" name="radio-group" className="hidden" id="radio1" />

        <label
          className=" myrads border-gray-400 border-solid border-2 pt-4 w-48 h-48 rounded
      text-white flex after:h-7 after:flex after:gap-y-4 after:w-7
      after:border-gray-400 after:border-solid after:border-4 after:rounded-full
      after:-ml-8 after:-mt-2 cursor-pointer"
          htmlFor="radio1"
        >
          <pre className="mt-6 ml-2 text-lg">
            <FaHammer className="mb-3" />
            I’m a{"\n"}professional,{"\n"}looking for work.
          </pre>
        </label>
        <input type="radio" name="radio-group" className="hidden" id="radio2" />

        <label
          className=" myrads border-gray-400 border-solid border-2 pt-4 w-48 h-48 rounded
      text-white flex after:h-7 after:flex after:gap-y-4 after:w-7
      after:border-gray-400 after:border-solid after:border-4 after:rounded-full
      after:ml-2 after:-mt-2 cursor-pointer"
          htmlFor="radio2"
        >
          <pre className="mt-6 ml-2 text-lg">
            <FaUser className="mb-3" />
            I’m a client {"\n"}Looking to{"\n"}hire.
          </pre>
        </label>
      </div>
    </>
  );
}
