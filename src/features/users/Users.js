import React from "react";
import { useSelector } from "react-redux";

function Users() {

  const users = useSelector((state) => {return state.users});
  const userCount = useSelector((state) => {return state.users.length});

  return (
    <div>
      <ul>
        Users!
        {users.map((user) => {return user.username})}
        Total Users: {userCount}
      </ul>
    </div>
  );
}

export default Users;
