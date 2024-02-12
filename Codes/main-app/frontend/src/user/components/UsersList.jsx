import React from "react";
import "./UsersList.css";

import UserItem from "./UserItem";

const UsersList = ({ items }) => {
  //! Can also use normal JS and then return the JSX
  // if (items.length === 0) {
  //   return (
  //     <div className="center">
  //       <h2>No users found.</h2>
  //     </div>
  //   );
  // }

  console.log(items);

  return (
    <div>
      {items.length > 0 ? (
        <ul className="users-list">
          {items.map((user) => (
            <UserItem
              key={user.id}
              id={user.id}
              image={user.image}
              name={user.name}
              placeCount={user.places}
            />
          ))}
        </ul>
      ) : (
        <div className="center">
          <h2>No users found.</h2>
        </div>
      )}
    </div>
  );
};

export default UsersList;
