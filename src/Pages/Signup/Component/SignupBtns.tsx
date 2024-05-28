export function SignupBtns() {
  return (
    <>
      <div className="mt-9 flex justify-center">
        <button className=" cursor-not-allowed rounded-3xl bg-zinc-300 px-4 py-2  font-bold text-white opacity-50">
          Create Account
        </button>
      </div>
      <p className="mt-3 text-center text-white">
        Already have an account?{" "}
        <a href="#" className="mylink">
          Log In
        </a>
      </p>
    </>
  );
}
