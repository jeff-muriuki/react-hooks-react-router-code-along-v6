import { Link } from "react-router-dom";
import React from "react";

function UserCard({user}) {
  return (
    <article>
        <h2>{user.name}</h2>
        <Link to={`/profile/${user.id}`}>View profile</Link>
    </article>
  );
};

export default UserCard;