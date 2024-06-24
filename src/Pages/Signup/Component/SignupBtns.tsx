import { useNavigate, Link } from "react-router-dom";
type FootProps = {
  selectedRadio: string | null;
};

function SignupBtns({ selectedRadio }: FootProps) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (selectedRadio === "radio1") {
      navigate("/ProfessionalSignup");
    } else if (selectedRadio === "radio2") {
      navigate("/ClientSignup");
    }
  };

  return (
    <>
      <div className="tabs:mt-[5%] mt-12 flex justify-center ">
        <button
          className={`tabs:w-[90%] tabs:rounded-lg rounded-3xl bg-zinc-300 px-4 py-2 font-bold text-white mobile:mt-4 mobile:w-[19rem] mobile:text-xl miniTablet:mt-4 miniTablet:w-96 miniTablet:text-2xl ${
            selectedRadio
              ? "myb cursor-pointer"
              : "cursor-not-allowed opacity-50"
          }`}
          disabled={!selectedRadio}
          onClick={handleButtonClick}
        >
          Create Account
        </button>
      </div>
      <div className="mt-2 flex justify-center ">
        {" "}
        <p className="mt-5 text-center text-white  mobile:mt-4 mobile:text-[1.22rem] ">
          Already have an account?{" "}
          <Link to="/signin" className="mylink">
            Log In
          </Link>
        </p>
      </div>
    </>
  );
}
export default SignupBtns;
