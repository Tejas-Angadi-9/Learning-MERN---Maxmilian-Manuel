import { useForm } from "react-hook-form";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import { useState } from "react";

const Auth = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    // defaultValues: { email: "test@test.com", password: "test123@" },
  });

  // console.log("Watching: ", watch());
  const password = watch("password");
  const email = watch("email");

  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <div className="place-form">
        <h2 className="center"> {isLogin ? "login" : "Sign up"} Required</h2>
        <hr />

        <form
          className={`form-control`}
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}>
          {!isLogin && (
            <div>
              <label htmlFor="email">Full Name</label>
              <input
                type="text"
                id="name"
                className="inp"
                placeholder="Enter your full name"
                {...register("name", { required: "This required" })}
              />
            </div>
          )}
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            className="inp"
            placeholder="Enter your email address"
            {...register("email", { required: "This required" })}
          />
          <p>{errors.email?.message}</p>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="inp"
            placeholder="Enter your password"
            {...register("password", {
              required: true,
              minLength: {
                value: 5,
                message: "Password should be more than 5 characters",
              },
            })}
          />
          <p>{errors.password?.message}</p>
          {email?.includes("@") && password?.length > 5 ? (
            <button
              className={`button button--${props.size || "default"} ${
                props.inverse && "button--inverse"
              } ${props.danger && "button--danger"}`}>
              Login
            </button>
          ) : (
            <button
              className={`button button--${props.size || "default"} ${
                props.inverse && "button--inverse"
              } ${props.danger && "button--danger"}`}
              disabled>
              Login
            </button>
          )}
          <button
            className={`button button--${props.size || "default"} ${
              props.inverse && "button--inverse"
            } ${props.danger && "button--danger"}`}
            onClick={() => setIsLogin((prev) => !prev)}>
            Switch to {isLogin ? "Sign up" : "login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
