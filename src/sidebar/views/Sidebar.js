import React from "react";

import "./style.css";

const Sidebar = () => {
  return (
    <ul className="side-nav">
      <li className="side-nav_item">
        <a href="#" className="side-nav_link">
          <span>History</span>
        </a>
      </li>
      <li className="side-nav_item">
        <a href="#" className="side-nav_link">
          <span>Locations</span>
        </a>
      </li>
      <li className="side-nav_item side-nav_item-active">
        <a href="#" className="side-nav_link">
          <span>Contact</span>
        </a>
      </li>
      <li className="side-nav_item">
        <a href="#" className="side-nav_link">
          <span>Statistic</span>
        </a>
      </li>
    </ul>
  );
};

export default Sidebar;
