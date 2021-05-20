import React from "react";
import { Link } from "react-router-dom";
import ghidorahList from "../../lists/ghidorahList";

const GhidorahListDisplay = () => {
  return (
    <>
      <div className="kaiju-header">
        <h2>Ghidorah</h2>
      </div>

      <div className="kaiju-list">
        <ul>
          {ghidorahList.map((ghidorah) => {
            return (
              <li className="kaiju-link">
                <Link to={"/ghidorah-list" + ghidorah.link}>
                  {ghidorah.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default GhidorahListDisplay;
