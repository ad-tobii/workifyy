import Logo from "./Component/Logo";
import Header from "./Component/Header";
import SignupOptions from "./Component/SignupOptions";
function Signup() {
  return (
    <div >
      <Logo />
      <Header />
      <SignupOptions />
    </div>
  );
}

/*function Ball() {
  return (
    <div className="border-[#32cd32] rounded-full bg-[#32cd32] h-8 w-8 animate-bounce -mt-10 ml-3 mobile:ml-1 miniTablet:mt-12 miniTablet:ml-5 miniTablet:h-12 miniTablet:w-12"></div>
  );
}*/
export default Signup;
