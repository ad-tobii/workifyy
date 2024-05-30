import { FieldErrors, useForm } from "react-hook-form";
import { useEffect } from "react";
import "../../styles/Signup.css";

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

export const Signup = () => {
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
    <div>
      <nav className="navbar">
        <div className="logo">
          <p>Workifyy</p>
        </div>
        <ul className="nav-links">
          <li>
            <p>Here to hire talent?</p>
          </li>
          <li>
            <p>
              <a href="#" className="client-btn">
                Joint as a client
              </a>
            </p>
          </li>
        </ul>
      </nav>
      <div className="form-container">
        <div className="form-wrapper">
          <h1 className="form-title">Sign up to find work you love</h1>
          <div className="btn-wrapper">
            <button type="button" className="apple-btn">
              Continue with Apple
            </button>
            <button type="button" className="google-btn">
              Continue with Google
            </button>
          </div>
          <div className="or-divider">
            <hr />
            <span>or</span>
            <hr />
          </div>
          <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  id="firstname"
                  placeholder="First Name"
                  {...register("firstname", {
                    required: "First Name is required",
                  })}
                  aria-invalid={errors.firstname ? "true" : "false"}
                  aria-live="assertive"
                />
                <p className="error">{errors.firstname?.message}</p>
              </div>
              <div className="form-group">
                <label htmlFor="lastname">Last Name</label>
                <input
                  type="text"
                  id="lastname"
                  placeholder="Last Name"
                  {...register("lastname", {
                    required: "Last Name is required",
                  })}
                  aria-invalid={errors.lastname ? "true" : "false"}
                  aria-live="assertive"
                />
                <p className="error">{errors.lastname?.message}</p>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
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
              <label htmlFor="password">Password</label>
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
            <div className="form-group">
              <label htmlFor="nin">NIN</label>
              <input
                type="text"
                id="nin"
                placeholder="NIN"
                {...register("nin", {
                  required: "NIN is required",
                  minLength: {
                    value: 11,
                    message:
                      "National Identification Number must be at least 11 Numbers",
                  },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "NIN must be a number",
                  },
                })}
                aria-invalid={errors.nin ? "true" : "false"}
                aria-live="assertive"
              />
              <p className="error">{errors.nin?.message}</p>
            </div>
            <div className="form-group checkbox-group">
              <label htmlFor="tipsCheckbox">
                <input
                  type="checkbox"
                  id="tipsCheckbox"
                  {...register("tipsCheckbox")}
                />
                Send me helpful emails to find rewarding work and job leads.
              </label>
            </div>
            <div className="form-group checkbox-group">
              <label htmlFor="termsCheckbox">
                <input
                  type="checkbox"
                  id="termsCheckbox"
                  {...register("termsCheckbox", { required: true })}
                />
                Yes, I understand and agree to the
                <a href="#"> Workifyy Terms of Service</a>, including the
                <a href="#"> User Agreement</a> and{" "}
                <a href="#"> Privacy Policy</a>.
              </label>
              {errors.termsCheckbox && (
                <p className="error">This field is required</p>
              )}
            </div>
            <button type="submit" className="submit-btn">
              Create my account
            </button>
            <p className="toggle-text">
              Already have an account? <a href="#">Log In</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
