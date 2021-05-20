import React from "react";
import { Link } from "react-router-dom";
import giganList from "../../lists/giganList";

const GiganListDisplay = () => {
  return (
    <>
      <div className="kaiju-header">
        <h2>Gigan</h2>
      </div>

      <div className="kaiju-list">
        <ul>
          {giganList.map((gigan) => {
            return (
              <li className="kaiju-link">
                <Link to={"/gigan-list" + gigan.link}>{gigan.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default GiganListDisplay;
