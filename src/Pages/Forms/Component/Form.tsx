import { FieldErrors, useForm } from "react-hook-form";
import { useEffect } from "react";

type FormValues = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  nin: string;
  tipsCheckbox: boolean;
  termsCheckbox: boolean;
};

const onError = (errors: FieldErrors<FormValues>) => {
  console.log("Form errors", errors);
};

const Clientsignup = () => {
  const { register, handleSubmit, formState, reset } = useForm<FormValues>({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      nin: "",
      tipsCheckbox: false,
      termsCheckbox: false,
    },
    mode: "onTouched",
  });

  const { errors, isSubmitSuccessful } = formState;

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted", data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);
  return (
    <div className="flex min-h-screen flex-col  bg-black p-4 text-white">
    

      <div className="mt-[10rem] flex flex-col items-center">
        <div className=" w-full max-w-[40rem] rounded-lg bg-zinc-800 p-6">
          <h1 className=" pb-10 text-center  text-2xl font-bold">
            Sign up to find work you love
          </h1>
          <div className="mb-4 flex flex-col space-y-2">
            <button
              type="button"
              className="rounded bg-black px-4 py-2 text-white hover:bg-gray-700"
            >
              Continue with Apple
            </button>
            <button
              type="button"
              className="rounded bg-[#32cd32] px-4 py-2 text-white hover:bg-green-500"
            >
              Continue with Google
            </button>
          </div>
          <div className="mb-4 flex items-center">
            <hr className="flex-grow border-gray-600" />
            <span className="mx-2 text-gray-400">or</span>
            <hr className="flex-grow border-gray-600" />
          </div>
          <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
            <div className="mb-4 flex space-x-4">
              <div className="flex w-1/2 flex-col">
                <label htmlFor="firstname" className="mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstname"
                  className="rounded border border-gray-600 bg-white p-2 text-black focus:outline-none focus:outline-[#32cd32]"
                  placeholder="First Name"
                  {...register("firstname", {
                    required: "First Name is required",
                  })}
                  aria-invalid={errors.firstname ? "true" : "false"}
                />
                <p className="mt-1 text-sm text-red-500">
                  {errors.firstname?.message}
                </p>
              </div>
              <div className="flex w-1/2 flex-col">
                <label htmlFor="lastname" className="mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastname"
                  className="rounded border border-gray-600 bg-white p-2 text-black focus:outline-none focus:outline-[#32cd32]"
                  placeholder="Last Name"
                  {...register("lastname", {
                    required: "Last Name is required",
                  })}
                  aria-invalid={errors.lastname ? "true" : "false"}
                />
                <p className="mt-1 text-sm text-red-500">
                  {errors.lastname?.message}
                </p>
              </div>
            </div>
            <div className="mb-4 flex flex-col">
              <label htmlFor="email" className="mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="rounded border border-gray-600 bg-white p-2 text-black focus:outline-none focus:outline-[#32cd32]"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Invalid email format",
                  },
                })}
                aria-invalid={errors.email ? "true" : "false"}
              />
              <p className="mt-1 text-sm text-red-500">
                {errors.email?.message}
              </p>
            </div>
            <div className="mb-4 flex flex-col">
              <label htmlFor="password" className="mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="rounded border border-gray-600 bg-white p-2 text-black focus:outline-none focus:outline-[#32cd32]"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
                  },
                })}
                aria-invalid={errors.password ? "true" : "false"}
              />
              <p className="mt-1 text-sm text-red-500">
                {errors.password?.message}
              </p>
            </div>

            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="tipsCheckbox"
                className="mr-2 accent-[#32cd32]"
                {...register("tipsCheckbox")}
              />
              <label htmlFor="tipsCheckbox" className="text-gray-400">
                Send me helpful emails to find rewarding work and job leads.
              </label>
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="termsCheckbox"
                className="mr-2 accent-[#32cd32]"
                {...register("termsCheckbox", { required: true })}
              />
              <label htmlFor="termsCheckbox" className="text-gray-400">
                Yes, I understand and agree to the
                <a href="#" className="text-green-500">
                  {" "}
                  Workifyy Terms of Service
                </a>
                , including the
                <a href="#" className="text-green-500">
                  {" "}
                  User Agreement
                </a>{" "}
                and
                <a href="#" className="text-green-500">
                  {" "}
                  Privacy Policy
                </a>
                .
              </label>
              {errors.termsCheckbox && (
                <p className="ml-2 text-sm text-red-500">
                  This field is required
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full rounded bg-[#32cd32] py-2 text-white hover:bg-green-600"
            >
              Create my account
            </button>
            <p className="mt-4 text-center text-gray-400">
              Already have an account?{" "}
              <a href="#" className="text-green-500">
                Log In
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Clientsignup;
