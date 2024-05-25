export function SignupBtns() {
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
