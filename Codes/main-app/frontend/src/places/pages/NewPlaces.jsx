import { useReducer } from "react";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";

import "./NewPlaces.css";

const NewPlaces = () => {
  return (
    <>
      <h1
        className="center"
        style={{
          color: "white",
          boxShadow: "",
        }}>
        Add a new place
      </h1>
      <div className="place-form">
        {/* <label htmlFor=""></label> */}
        <Input type="text" label="Name" placeholder="Enter the place name..." />
      </div>
    </>
  );
};

export default NewPlaces;
