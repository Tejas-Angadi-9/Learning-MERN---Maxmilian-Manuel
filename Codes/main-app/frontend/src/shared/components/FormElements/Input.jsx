import { useReducer } from "react";

import Button from "./Button";
import "./Input.css";

function reducer(state, action) {
  switch (action.type) {
    case "TITLE":
      return {
        ...state,
        title: action.val,
      };
    case "DESC":
      return {
        ...state,
        desc: action.val,
      };
    case "ADDRESS":
      return {
        ...state,
        address: action.val,
      };
  }
}

const Input = (props) => {
  const [inputState, dispatch] = useReducer(reducer, {
    title: "",
    desc: "",
    address: "",
  });

  return (
    <form className={`form-control`}>
      <label htmlFor={props.id}>Name</label>
      <input
        id={props.id}
        type={props.type}
        placeholder="Enter the place name"
        className="inp"
        onChange={(e) => dispatch({ val: e.target.value, type: "TITLE" })}
        value={inputState.title}
      />
      <label htmlFor={props.id}>Description</label>
      <textarea
        id={props.id}
        rows={props.rows || 5} // this || defines rows to 3 if props.rows is not available
        type={props.type}
        placeholder="Enter the description...."
        value={inputState.desc}
        onChange={(e) => dispatch({ val: e.target.value, type: "DESC" })}
      />
      <label htmlFor={props.id}>Address</label>
      <textarea
        id={props.id}
        rows={props.rows || 5} // this || defines rows to 3 if props.rows is not available
        type={props.type}
        placeholder="Enter the address"
        value={inputState.address}
        onChange={(e) => dispatch({ val: e.target.value, type: "ADDRESS" })}
      />

      <button
        style={{ marginTop: "20px" }}
        className={`button button--${props.size || "default"} ${
          props.inverse && "button--inverse"
        } ${props.danger && "button--danger"}`}
        onClick={(e) => {
          console.log(inputState);
          e.preventDefault();
        }}>
        Add place
      </button>
    </form>
  );
};

export default Input;
