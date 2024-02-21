import { useForm } from "react-hook-form";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";

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

  return (
    <div>
      <div className="place-form">
        <h2 className="center">Login Required</h2>
        <hr />
        <form
          className={`form-control`}
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}>
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            className="inp"
            {...register("email", { required: "This required" })}
          />
          <p>{errors.email?.message}</p>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="inp"
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

          {/* <Button to=" ">Login</Button> */}
        </form>
      </div>
    </div>
  );
};

export default Auth;
