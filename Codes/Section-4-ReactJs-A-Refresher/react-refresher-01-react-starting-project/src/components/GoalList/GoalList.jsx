import "./GoalList.css";

const GoalList = ({ goals }) => {
  return (
    <div>
      {goals.map((goal) => (
        <ul key={goal.id} className="goal-list">
          <li>{goal.text}</li>
        </ul>
      ))}
    </div>
  );
};

export default GoalList;
