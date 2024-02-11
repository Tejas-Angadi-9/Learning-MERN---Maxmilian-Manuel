import { useState } from "react";
import "./NewGoal.css";

const NewGoal = ({ addCourse }) => {
  const [text, setText] = useState("");

  const addGoalHandler = (event) => {
    event.preventDefault();

    const newGoal = {
      id: Math.random().toString(),
      text: text,
    };
    addCourse(newGoal);
  };

  function changeHandler(e) {
    setText(e.target.value);
  }

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" onChange={changeHandler} />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
