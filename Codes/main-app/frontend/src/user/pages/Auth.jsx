import { useForm } from "react-hook-form";

import Button from "../../shared/components/FormElements/Button";

const Auth = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      Login Required
      <div className="place-form">
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
            {...register("email", { required: true })}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="inp"
            {...register("password", { required: true, minLength: 5 })}
          />
          <p style={{ fontSize: "14px", color: "red" }}>
            Minimum length of the password should be 5
          </p>
          <button>Login</button>
          {/* <Button to=" ">Login</Button> */}
        </form>
      </div>
    </div>
  );
};

export default Auth;
