/*import { FaUser, FaHammer } from "react-icons/fa6";*/
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
    <div className="radiogroup mt-10  flex gap-x-3.5 justify-center">
      <input type="radio" name="radio-group" className="hidden" id="radio1" />
      <label
        className="border-white border-solid border-2   w-48 h-48 rounded text-white flex  after:h-8 after:w-8 after:border-white after:border-solid after:border-4 after:rounded-full after:ml-24 after:mt-1 after:mr-1 "
        htmlFor="radio1"
      >
        option 1
      </label>
      <input type="radio" name="radio-group" className="hidden" id="radio2" />
      <label
        className="border-white border-solid border-2 pt-4 w-48 h-48 rounded
      text-white flex after:h-8 after:flex after:gap-y-4 after:w-8
      after:border-white after:border-solid after:border-4 after:rounded-full
      after:ml-24 after:mt-1 after:mr-1"
        htmlFor="radio2"
      >
        Option2
      </label>
    </div>
  );
}
export default Signup;
