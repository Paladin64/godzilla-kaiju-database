import React from "react";
import ghidorahList from "../../lists/ghidorahList";

const GhidorahPath = (props) => {
  const currentPath = props.location.pathname;
  const currentGhidorahFind = ghidorahList.find((ghidorah) => {
    return "/ghidorah-list" + ghidorah.link === currentPath;
  });
  const ghidorahName = currentGhidorahFind.name;
  const ghidorahAppearances = currentGhidorahFind.appearances;
  const ghidorahAbilities = currentGhidorahFind.abilities;

  let ghidorahSizeMetric;
  let ghidorahSizeImperial;

  if (currentGhidorahFind.height !== undefined) {
    ghidorahSizeMetric = currentGhidorahFind.height.meters;
    ghidorahSizeImperial = currentGhidorahFind.height.feet;
  } else {
    ghidorahSizeMetric = currentGhidorahFind.length.kilometers;
    ghidorahSizeImperial = currentGhidorahFind.length.miles;
  }
  let ghidorahImage;

  if (currentGhidorahFind.image !== undefined) {
    ghidorahImage = currentGhidorahFind.image;
  }

  const GhidorahImageDisplay = () => {
    if (currentGhidorahFind.image !== undefined) {
      return <img src={ghidorahImage} alt={ghidorahName} />;
    } else {
      return null;
    }
  };

  const GhidorahAppearancesDisplay = () => {
    return (
      <>
        <h4>Appearances</h4>
        <ul className="kaiju-list">
          {ghidorahAppearances.map((appearance) => {
            return <li>{appearance}</li>;
          })}
        </ul>
      </>
    );
  };

  const GhidorahAbilitiesDisplay = () => {
    return (
      <>
        <h4>Abilities</h4>
        <ul className="kaiju-list">
          {ghidorahAbilities.map((ability) => {
            return <li>{ability}</li>;
          })}
        </ul>
      </>
    );
  };

  const GhidorahSizeDisplay = () => {
    if (currentGhidorahFind.height !== undefined) {
      return (
        <>
          <h4>Height</h4>
          <ul className="kaiju-size">
            <li>Meters: {ghidorahSizeMetric}</li>
            <li>Feet: {ghidorahSizeImperial}</li>
          </ul>
        </>
      );
    } else {
      return (
        <>
          <h4>Length</h4>
          <ul className="kaiju-size">
            <li>Kilometers: {ghidorahSizeMetric}</li>
            <li>Miles: {ghidorahSizeImperial}</li>
          </ul>
        </>
      );
    }
  };

  return (
    <>
      <div className="kaiju-header">
        <h2>Ghidorah</h2>
        <h3 className="kaiju-name">{ghidorahName}</h3>
        <GhidorahImageDisplay />
      </div>

      <div className="kaiju-information">
        <GhidorahAppearancesDisplay />
      </div>

      <div className="kaiju-information">
        <GhidorahAbilitiesDisplay />
      </div>

      <div className="kaiju-information">
        <GhidorahSizeDisplay />
      </div>
    </>
  );
};

export default GhidorahPath;
