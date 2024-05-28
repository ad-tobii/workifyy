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
    <div>
      <nav className="navbar">
        <div className="logo">
          <p>Workifyy</p>
        </div>
      </nav>
      <div className="form-container">
        <div className="form-wrapper">
          <h2 className="form-title">Log in to Workifyy</h2>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="form-group">
              <input
                type="email"
                id="email"
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
              <p className="error">{errors.email?.message}</p>
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
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
              <p className="error">{errors.password?.message}</p>
            </div>
            <button type="submit" className="submit-btn">
              Continue
            </button>
            <div className="or-divider">
              <hr />
              <span>or</span>
              <hr />
            </div>
            <div className="btn-wrapper">
              <button type="button" className="google-btn">
                Continue with Google
              </button>
              <button type="button" className="apple-btn">
                Continue with Apple
              </button>
            </div>
            <br />
            <br />
            <br />
            <div className="dont-divider">
              <hr />
              <p>
                <span>Don't have an Workifyy account?</span>
              </p>
              <hr />
            </div>
            <button type="button" className="signup-btn">
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <footer>
        <p>© 2024 Workifyy® • Privacy Policy</p>
      </footer>
    </div>
  );
};
