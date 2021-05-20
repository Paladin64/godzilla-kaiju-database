import React from "react";
import giganList from "../../lists/giganList";

const GiganPath = (props) => {
  const currentPath = props.location.pathname;
  const currentGiganFind = giganList.find((gigan) => {
    return "/gigan-list" + gigan.link === currentPath;
  });
  const giganName = currentGiganFind.name;
  const giganAppearances = currentGiganFind.appearances;
  const giganAbilities = currentGiganFind.abilities;
  const giganSizeMetric = currentGiganFind.height.meters;
  const giganSizeImperial = currentGiganFind.height.feet;
  let giganImage;

  if (currentGiganFind.image !== undefined) {
    giganImage = currentGiganFind.image;
  }

  const GiganImageDisplay = () => {
    if (currentGiganFind.image !== undefined) {
      return <img src={giganImage} alt={giganName} />;
    } else {
      return null;
    }
  };

  const GiganAppearancesDisplay = () => {
    return (
      <>
        <h4>Appearances</h4>
        <ul className="kaiju-list">
          {giganAppearances.map((appearance) => {
            return <li>{appearance}</li>;
          })}
        </ul>
      </>
    );
  };

  const GiganAbilitiesDisplay = () => {
    return (
      <>
        <h4>Abilities</h4>
        <ul className="kaiju-list">
          {giganAbilities.map((ability) => {
            return <li>{ability}</li>;
          })}
        </ul>
      </>
    );
  };

  return (
    <>
      <div className="kaiju-header">
        <h2>Gigan</h2>
        <h3 className="kaiju-name">{giganName}</h3>
        <GiganImageDisplay />
      </div>

      <div className="kaiju-information">
        <GiganAppearancesDisplay />
      </div>

      <div className="kaiju-information">
        <GiganAbilitiesDisplay />
      </div>

      <div className="kaiju-information">
        <h4>Height</h4>
        <ul className="kaiju-size">
          <li>Meters: {giganSizeMetric}</li>
          <li>Feet: {giganSizeImperial}</li>
        </ul>
      </div>
    </>
  );
};

export default GiganPath;
