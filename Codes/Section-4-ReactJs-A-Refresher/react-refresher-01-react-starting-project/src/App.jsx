import { useState } from "react";
import "./App.css";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

function App() {
  const [courseGoals, setCourseGoals] = useState([
    {
      id: "cg1",
      text: "Finish the course",
    },
    {
      id: "cg2",
      text: "Learn all about the course main topic",
    },
    {
      id: "cg3",
      text: "Help other students in the course Q&A",
    },
  ]);

  // const addCourseGoalHandler = (newGoal) => {
  //   // setCourseGoals(courseGoals.concat(newGoal));
  //   setCourseGoals((prevGoals) => {
  //     return prevGoals.concat(newGoal);
  //   });
  // };

  function addCourseGoalHandler(newGoal) {
    setCourseGoals((prevGoals) => {
      return [...prevGoals, newGoal];
    });
  }

  console.log(courseGoals);

  return (
    <div>
      <h2>Course Goals</h2>
      <NewGoal addCourse={addCourseGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
}

export default App;
