import React from "react";
import mechagodzillaList from "../../lists/mechagodzillaList";

const MechagodzillaPath = (props) => {
  const currentPath = props.location.pathname;
  const currentMechagodzillaFind = mechagodzillaList.find((mechagodzilla) => {
    return "/mechagodzilla-list" + mechagodzilla.link === currentPath;
  });
  const mechagodzillaName = currentMechagodzillaFind.name;
  const mechagodzillaAppearances = currentMechagodzillaFind.appearances;
  const mechagodzillaAbilities = currentMechagodzillaFind.abilities;
  let mechagodzillaSizeMetric;
  let mechagodzillaSizeImperial;

  if (currentMechagodzillaFind.height !== undefined) {
    mechagodzillaSizeMetric = currentMechagodzillaFind.height.meters;
    mechagodzillaSizeImperial = currentMechagodzillaFind.height.feet;
  } else {
    mechagodzillaSizeMetric = currentMechagodzillaFind.diameter.kilometers;
    mechagodzillaSizeImperial = currentMechagodzillaFind.diameter.miles;
  }
  let mechagodzillaImage;

  if (currentMechagodzillaFind.image !== undefined) {
    mechagodzillaImage = currentMechagodzillaFind.image;
  }

  const MechagodzillaImageDisplay = () => {
    if (currentMechagodzillaFind.image !== undefined) {
      return <img src={mechagodzillaImage} alt={mechagodzillaName} />;
    } else {
      return null;
    }
  };

  const MechagodzillaAppearancesDisplay = () => {
    return (
      <>
        <h4>Appearances</h4>
        <ul className="kaiju-list">
          {mechagodzillaAppearances.map((appearance) => {
            return <li>{appearance}</li>;
          })}
        </ul>
      </>
    );
  };

  const MechagodzillaAbilitiesDisplay = () => {
    return (
      <>
        <h4>Abilities</h4>
        <ul className="kaiju-list">
          {mechagodzillaAbilities.map((ability) => {
            return <li>{ability}</li>;
          })}
        </ul>
      </>
    );
  };

  const MechagodzillaSizeDisplay = () => {
    if (currentMechagodzillaFind.height !== undefined) {
      return (
        <>
          <h4>Height</h4>
          <ul className="kaiju-size">
            <li>Meters: {mechagodzillaSizeMetric}</li>
            <li>Feet: {mechagodzillaSizeImperial}</li>
          </ul>
        </>
      );
    } else {
      return (
        <>
          <h4>Diameter</h4>
          <ul className="kaiju-size">
            <li>Kilometers: {mechagodzillaSizeMetric}</li>
            <li>Miles: {mechagodzillaSizeImperial}</li>
          </ul>
        </>
      );
    }
  };

  return (
    <>
      <div className="kaiju-header">
        <h2>Mechagodzilla</h2>
        <h3 className="kaiju-name">{mechagodzillaName}</h3>
        <MechagodzillaImageDisplay />
      </div>

      <div className="kaiju-information">
        <MechagodzillaAppearancesDisplay />
      </div>

      <div className="kaiju-information">
        <MechagodzillaAbilitiesDisplay />
      </div>

      <div className="kaiju-information">
        <MechagodzillaSizeDisplay />
      </div>
    </>
  );
};

export default MechagodzillaPath;
