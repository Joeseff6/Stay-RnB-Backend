import React from "react";
import { Link } from "react-router-dom";
import API from '../utils/API';

export const MainNavTabs = () => {
  const handleLogout = async () => {
    try {
      await API.logout();
      window.location.pathname = '/';
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className="navTabs row m-auto">
      <div className="col tab">
        <li className="tabList fs-2">
          <Link className="tabLink" to="/listing">Listings</Link>
        </li>
      </div>
      <div className="col tab">
        <li className="tabList fs-2">
          <Link className="tabLink" to="/profile">Profile</Link>
        </li>
      </div>
      <div className="col tab">
        <li className="tabList fs-2">
          <a className="tabLink" href="#" onClick={handleLogout}>Logout</a>
        </li>
      </div>
    </div>
  );
};
