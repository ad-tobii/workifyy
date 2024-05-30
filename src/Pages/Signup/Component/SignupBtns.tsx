
type FootProps = {
  selectedRadio: string | null;
};

function SignupBtns({ selectedRadio }: FootProps) {
  return (
    <>
      <div className="mt-8 flex justify-center ">
        <button
          className={`rounded-3xl bg-zinc-300 px-4 py-2 font-bold text-white mobile:mt-4 mobile:w-[19rem] mobile:text-xl miniTablet:mt-4 miniTablet:w-96 miniTablet:text-2xl ${
            selectedRadio
              ? "myb cursor-pointer"
              : "cursor-not-allowed opacity-50"
          }`}
          disabled={!selectedRadio}
        >
          Create Account
        </button>
      </div>
      <div className="mt-2 flex justify-center">
        {" "}
        <p className="mt-3 text-center text-white  mobile:mt-4 mobile:text-xl miniTablet:mt-6  miniTablet:text-2xl">
          Already have an account?{" "}
          <a href="#" className="mylink">
            Log In
          </a>
        </p>
      </div>
    </>
  );
}

export default SignupBtns