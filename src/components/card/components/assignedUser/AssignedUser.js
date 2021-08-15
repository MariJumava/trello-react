import React from "react";

const AssignedUser = ({ user }) => {
  return (
    <div>
      <image src={user.avatar} />
    </div>
  );
};

export default AssignedUser;
