import React from "react";
import { Link } from "react-router-dom";
import mechagodzillaList from "../../lists/mechagodzillaList";

const MechagodzillaListDisplay = () => {
  return (
    <>
      <div className="kaiju-header">
        <h2>Mechagodzilla</h2>
      </div>

      <div className="kaiju-list">
        <ul>
          {mechagodzillaList.map((mechagodzilla) => {
            return (
              <li className="kaiju-link">
                <Link to={"/mechagodzilla-list" + mechagodzilla.link}>
                  {mechagodzilla.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MechagodzillaListDisplay;
