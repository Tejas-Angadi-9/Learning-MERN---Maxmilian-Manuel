import React from "react";
import { Link } from "react-router-dom";
import "./UserItem.css";

import Avatar from "../../shared/components/UIElements/Avatar";

const UserItem = ({ ...item }) => {
  return (
    <li className="user-item">
      <div className="user-item__content">
        <Link to={`/${item.id}/places`}>
          <div className="user-item__image">
            <Avatar {...item} />
          </div>
          <div className="user-item__info">
            <h2>{item.name}</h2>
            <h3>
              {item.placeCount} {item.placeCount === 1 ? "Place" : "Places    "}
            </h3>
          </div>
        </Link>
      </div>
    </li>
  );
};

export default UserItem;
