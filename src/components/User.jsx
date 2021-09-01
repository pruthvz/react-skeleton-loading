import React, { useState, useEffect } from "react";
import SkeletonProfile from "../skeletons/SkeletonProfile.jsx";

const User = (props) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await res.json();
      setProfile(data);
    }, 4000);
  });
  return (
    <div>
      <div className="user">
        <h3>User Details</h3>
      </div>
      {profile && (
        <div className="profile">
          <h4
            style={{
              color: "#9a0fff",
              fontSize: "25px",
              fontWeight: "bold",
              marginBottom: "0px",
            }}
          >
            {profile.username}
          </h4>
          <p>{profile.email}</p>
          <a href={profile.website}>{profile.website}</a>
        </div>
      )}
      {!profile && <SkeletonProfile theme={props.theme} />}
    </div>
  );
};

export default User;
