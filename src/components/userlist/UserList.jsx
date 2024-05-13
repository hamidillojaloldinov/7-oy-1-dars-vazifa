import { useDispatch, useSelector } from "react-redux";
import "./UserList.css";

import React from "react";

export default function UserList({ users }) {
  const user = +users == [] ? users : users[0];
  return (
    <div className="userList">
      <div className="userList-container container">
        {user.map((user) => {
          return (
            <div className="card" key={user.id}>
              <div className="card-inner">
                <img
                  src={user.image}
                  alt={user.name}
                  width="150"
                  height="150"
                />
                <h3>
                  {user.firstName} {user.lastName}, {user.age} age.
                </h3>
                <p>From: {user.from}</p>
                <p>Job: {user.job}</p>
                <p>Gender: {user.gender}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
