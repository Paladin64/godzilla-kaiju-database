import React from "react";
import godzillaList from "../../lists/godzillaList";

const GodzillaPath = (props) => {
  const currentPath = props.location.pathname;
  const currentGodzillaFind = godzillaList.find((godzilla) => {
    return "/godzilla-list" + godzilla.link === currentPath;
  });
  const godzillaName = currentGodzillaFind.name;
  const godzillaAppearances = currentGodzillaFind.appearances;
  const godzillaAbilities = currentGodzillaFind.abilities;
  const godzillaSizeMetric = currentGodzillaFind.height.meters;
  const godzillaSizeImperial = currentGodzillaFind.height.feet;
  let godzillaImage;

  if (currentGodzillaFind.image !== undefined) {
    godzillaImage = currentGodzillaFind.image;
  }

  const GodzillaImageDisplay = () => {
    if (currentGodzillaFind.image !== undefined) {
      return <img src={godzillaImage} alt={godzillaName} />;
    } else {
      return null;
    }
  };

  const GodzillaAppearancesDisplay = () => {
    return (
      <>
        <h4>Appearances</h4>
        <ul className="kaiju-list">
          {godzillaAppearances.map((appearance) => {
            return <li>{appearance}</li>;
          })}
        </ul>
      </>
    );
  };

  const GodzillaAbilitiesDisplay = () => {
    return (
      <>
        <h4>Abilities</h4>
        <ul className="kaiju-list">
          {godzillaAbilities.map((ability) => {
            return <li>{ability}</li>;
          })}
        </ul>
      </>
    );
  };

  return (
    <>
      <div className="kaiju-header">
        <h2>Godzilla</h2>
        <h3 className="kaiju-name">{godzillaName}</h3>
        <GodzillaImageDisplay />
      </div>

      <div className="kaiju-information">
        <GodzillaAppearancesDisplay />
      </div>

      <div className="kaiju-information">
        <GodzillaAbilitiesDisplay />
      </div>

      <div className="kaiju-information">
        <h4>Height</h4>
        <ul className="kaiju-size">
          <li>Meters: {godzillaSizeMetric}</li>
          <li>Feet: {godzillaSizeImperial}</li>
        </ul>
      </div>
    </>
  );
};

export default GodzillaPath;
