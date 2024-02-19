import Input from "../../shared/components/FormElements/Input";

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
      <form className="place-form">
        {/* <label htmlFor=""></label> */}
        <Input
          element="input"
          type="text"
          label="Name"
          placeholder="Enter the place name..."
        />
        <Input
          element="textbox"
          type="text"
          label="Description"
          placeholder="Add the description about this place..."
          validators={[]}
          errorText="Please enter a valid title"
        />
      </form>
    </>
  );
};

export default NewPlaces;
