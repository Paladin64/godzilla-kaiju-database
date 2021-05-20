import React from "react";
import mothraList from "../../lists/mothraList";

const MothraPath = (props) => {
  const currentPath = props.location.pathname;
  const currentMothraFind = mothraList.find((mothra) => {
    return "/mothra-list" + mothra.link === currentPath;
  });
  const mothraName = currentMothraFind.name;
  const mothraAppearances = currentMothraFind.appearances;
  const mothraAbilities = currentMothraFind.abilities;

  let mothraSizeMetric;
  let mothraSizeImperial;

  if (currentMothraFind.wingspan !== undefined) {
    mothraSizeMetric = currentMothraFind.wingspan.meters;
    mothraSizeImperial = currentMothraFind.wingspan.feet;
  } else {
    mothraSizeMetric = currentMothraFind.length.meters;
    mothraSizeImperial = currentMothraFind.length.feet;
  }
  let mothraImage;

  if (currentMothraFind.image !== undefined) {
    mothraImage = currentMothraFind.image;
  }

  const MothraImageDisplay = () => {
    if (currentMothraFind.image !== undefined) {
      return <img src={mothraImage} alt={mothraName} />;
    } else {
      return null;
    }
  };

  const MothraAppearancesDisplay = () => {
    return (
      <>
        <h4>Appearances</h4>
        <ul className="kaiju-list">
          {mothraAppearances.map((appearance) => {
            return <li>{appearance}</li>;
          })}
        </ul>
      </>
    );
  };

  const MothraAbilitiesDisplay = () => {
    return (
      <>
        <h4>Abilities</h4>
        <ul className="kaiju-list">
          {mothraAbilities.map((ability) => {
            return <li>{ability}</li>;
          })}
        </ul>
      </>
    );
  };

  const MothraSizeDisplay = () => {
    if (currentMothraFind.wingspan !== undefined) {
      return (
        <>
          <h4>Wingspan</h4>
          <ul className="kaiju-size">
            <li>Meters: {mothraSizeMetric}</li>
            <li>Feet: {mothraSizeImperial}</li>
          </ul>
        </>
      );
    } else {
      return (
        <>
          <h4>Length</h4>
          <ul className="kaiju-size">
            <li>Meters: {mothraSizeMetric}</li>
            <li>Feet: {mothraSizeImperial}</li>
          </ul>
        </>
      );
    }
  };

  return (
    <>
      <div className="kaiju-header">
        <h2>Mothra</h2>
        <h3 className="kaiju-name">{mothraName}</h3>
        <MothraImageDisplay />
      </div>

      <div className="kaiju-information">
        <MothraAppearancesDisplay />
      </div>

      <div className="kaiju-information">
        <MothraAbilitiesDisplay />
      </div>

      <div className="kaiju-information">
        <MothraSizeDisplay />
      </div>
    </>
  );
};

export default MothraPath;
