import React from "react";
import { Link } from "react-router-dom";
import mothraList from "../../lists/mothraList";

const MothraListDisplay = () => {
  return (
    <>
      <div className="kaiju-header">
        <h2>Mothra</h2>
      </div>

      <div className="kaiju-list">
        <ul>
          {mothraList.map((mothra) => {
            return (
              <li className="kaiju-link">
                <Link to={"/mothra-list" + mothra.link}>{mothra.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MothraListDisplay;
