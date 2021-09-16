import React from "react";
import { useParams } from "react-router-dom";

function ProfilePage() {
  const { username } = useParams();
  //The useParams hook, allows to access to all route params (they could be more than one) and recovery them to our project and render them.
  return (
    <div>
      <h1>Profile Page: {username} </h1>
    </div>
  );
}

export default ProfilePage;
