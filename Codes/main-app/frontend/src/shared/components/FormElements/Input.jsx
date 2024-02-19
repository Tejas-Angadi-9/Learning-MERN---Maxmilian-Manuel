import { useReducer } from "react";
import "./Input.css";

// We will define reducer function outside function as it doesn't depend on anything.
const inputReducer = (state, action) => {
  // Here we always have to return a new state
  // Now, this is not required but will be using simple switch statment
  switch (action.type) {
    case "CHANGE":
      // here it doesn't have to be an object. It can be anything
      return {
        // Now we will create a copy as we don't want to lose the previous
        ...state,
        value: action.val,
        isValid: true, // this will be replaced later. For now will set it to true
      };
    default:
      return state;
  }
};
const Input = (props) => {
  // const [enteredValue, setEnteredValue] = useState("");
  // const [isValid, setIsValid] = useState(false);
  //! Instead of useState we will use useReducer which handles the complex state

  // useReducer receives an action and dispatches it. With this we can send the second parameter with initialState
  // Just like useState, useReducer also returns an array with exactly 2 elements
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  });
  const changeHandler = (event) => {
    dispatch({ type: "CHANGE", val: event.target.value });
  };

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        className="inp"
        onChange={changeHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 5} // this || defines rows to 3 if props.rows is not available
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        value={inputState.value}
      />
    );

  return (
    <div
      className={`form-control ${
        !inputReducer.isValid && `form-control--invalid`
      }`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
