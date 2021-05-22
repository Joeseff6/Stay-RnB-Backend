import React from "react";
import Man from "../../assets/Man.jpg";

export const UserProfile = ({ userInfo }) => {
  return (
    <>
      <div className="row profileContainer">
        <div className="col d-flex justify-content-center align-items-center">
          <img src={Man} className="img-fluid userImage" />
        </div>
        <div className="col">
          <p className="fs-5 text-capitalize">First Name: {userInfo.firstName}</p>
          <p className="fs-5 text-capitalize">Last Name: {userInfo.lastName}</p>
          <p className="fs-5">Email Address: {userInfo.email}</p>
        </div>
      </div>
    </>
  );
};
