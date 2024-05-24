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
      <a href="#">
        <span className="nav__logo ">WORKIFYY</span>
      </a>
    </div>
  );
}
function Header() {
  return (
    <div className="mt-3">
      <h1 className="text-white text-3xl flex justify-center ">
        Join as a client or freelancer
      </h1>
      <Choice />
    </div>
  );
}
function Choice() {
  return (
    <>
      <div className="radiogroup mt-8  flex gap-x-3.5 justify-center">
        <input type="radio" name="radio-group" className="hidden" id="radio1" />

        <label
          className=" myrads border-gray-400 border-solid border-2 pt-4 w-48 h-48 rounded
      text-white flex after:h-7 after:flex after:gap-y-4 after:w-7
      after:border-gray-400 after:border-solid after:border-4 after:rounded-full
      after:-ml-8 after:-mt-2"
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
      after:ml-2 after:-mt-2"
          htmlFor="radio2"
        >
          <pre className="mt-6 ml-2 text-lg">
            <FaUser className="mb-3" />
            I’m a client {"\n"}Looking to{"\n"}hire.
          </pre>
        </label>
      </div>
      <Foot />
    </>
  );
}

function Foot() {
  return (
    <>
      <div className="flex justify-center mt-9">
        <button className=" bg-zinc-300 text-white font-bold py-2 px-4  rounded-3xl opacity-50 cursor-not-allowed">
          Create Account
        </button>
      </div>
      <p className="text-white text-center mt-3">
        Already have an account?{" "}
        <a href="#" className="mylink">
          Log In
        </a>
      </p>
    </>
  );
}
export default Signup;
