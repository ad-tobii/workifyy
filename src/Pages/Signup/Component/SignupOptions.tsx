import { FaUser, FaHammer } from "react-icons/fa6";

export function SignupOptions() {
  return (
    <>
      <div className="radiogroup mt-8  flex justify-center gap-x-3.5">
        <input type="radio" name="radio-group" className="hidden" id="radio1" />

        <label
          className=" myrads flex h-48 w-48 cursor-pointer rounded border-2 border-solid
      border-gray-400 pt-4 text-white after:-ml-8 after:-mt-2 after:flex
      after:h-7 after:w-7 after:gap-y-4 after:rounded-full
      after:border-4 after:border-solid after:border-gray-400"
          htmlFor="radio1"
        >
          <pre className="ml-2 mt-6 text-lg">
            <FaHammer className="mb-3" />
            I’m a{"\n"}professional,{"\n"}looking for work.
          </pre>
        </label>
        <input type="radio" name="radio-group" className="hidden" id="radio2" />

        <label
          className=" myrads flex h-48 w-48 cursor-pointer rounded border-2 border-solid
      border-gray-400 pt-4 text-white after:-mt-2 after:ml-2 after:flex
      after:h-7 after:w-7 after:gap-y-4 after:rounded-full
      after:border-4 after:border-solid after:border-gray-400"
          htmlFor="radio2"
        >
          <pre className="ml-2 mt-6 text-lg">
            <FaUser className="mb-3" />
            I’m a client {"\n"}Looking to{"\n"}hire.
          </pre>
        </label>
      </div>
    </>
  );
}
