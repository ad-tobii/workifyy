import { useForm } from "react-hook-form";
import { useEffect } from "react";

type FormValues = {
  email: string;
  password: string;
};

export const Signin = () => {
  const { register, handleSubmit, formState, reset } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
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
    <div className=" bg-black text-white">
      {/* <nav className="flex items-center justify-between p-4">
        <div className="text-3xl font-logoFonts text-[#32cd32]">Workifyy</div>
        <div className="flex space-x-4">
          <p className="text-lg mt-1 mobile:hidden miniTablet:hidden">Here to hire talent?</p>
          <a
            href="#"
            className="rounded bg-[#32cd32] px-4 py-2 text-white hover:bg-green-600"
          >
            Join as a client
          </a>
        </div>
      </nav> */}

      
    
          <h2 className="mb-6 text-center text-2xl font-bold">
            Log in to Workifyy
          </h2>
      <div className="flex items-center justify-center">
        <div className="w-full mobile:w-80 max-w-md rounded-lg bg-zinc-800 p-8">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                className="w-full rounded bg-white px-4 py-2 text-black focus:outline-none focus:ring focus:ring-green-600"
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
                aria-live="assertive"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="password"
                className="w-full rounded bg-white px-4 py-2 text-black focus:outline-none focus:ring focus:ring-green-600"
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
                aria-live="assertive"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="mb-4 w-full rounded bg-[#32cd32] py-2 font-bold text-white hover:bg-green-700"
            >
              Continue
            </button>
            <div className="mb-4 flex items-center justify-between">
              <hr className="w-full border-gray-600" />
              <span className="mx-2 text-gray-400">or</span>
              <hr className="w-full border-gray-600" />
            </div>
            <button
              type="button"
              className="mb-4 w-full rounded bg-black py-2 font-bold text-white hover:bg-gray-700"
            >
              Continue with Google
            </button>
            <button
              type="button"
              className="w-full rounded bg-[#32cd32] py-2 font-bold text-white hover:bg-gray-900"
            >
              Continue with Apple
            </button>
            <div className="my-6 flex gap-2 content-center items-center justify-center ">
              <hr className="w-[5rem] border-gray-600" />
              <p className=" text-gray-400 text-[.8rem]">
                Don't have a Workifyy account?
              </p>
              <hr className="w-[5rem] border-gray-600" />
            </div>
            <button
              type="button"
              className="w-full rounded bg-[#32cd32] py-2 font-bold text-white hover:bg-green-700"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
     
    </div>
  );
};
