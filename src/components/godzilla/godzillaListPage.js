import React from "react";
import { Link } from "react-router-dom";
import godzillaList from "../../lists/godzillaList";

const GodzillaListDisplay = () => {
  return (
    <>
      <div className="kaiju-header">
        <h2>Godzilla</h2>
      </div>

      <div className="kaiju-list">
        <ul>
          {godzillaList.map((godzilla) => {
            return (
              <li className="kaiju-link">
                <Link to={"/godzilla-list" + godzilla.link}>
                  {godzilla.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default GodzillaListDisplay;
