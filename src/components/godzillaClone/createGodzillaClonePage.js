import React, { Component } from "react";
import axios from "axios";

class CreateGodzillaClone extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeLink = this.onChangeLink.bind(this);
    this.onChangeImageUrl = this.onChangeImageUrl.bind(this);
    this.onChangeAppearances = this.onChangeAppearances.bind(this);
    this.onChangeAbilities = this.onChangeAbilities.bind(this);
    this.onChangeMeters = this.onChangeMeters.bind(this);
    this.onChangeFeet = this.onChangeFeet.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onAddAppearance = this.onAddAppearance.bind(this);
    this.onAddAbility = this.onAddAbility.bind(this);

    this.state = {
      name: "",
      link: "",
      image: "",
      appearances: [""],
      abilities: [""],
      meters: undefined,
      feet: undefined,
      godzillaClones: [],
      appearance: "",
      ability: ""
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeLink(e) {
    this.setState({
      link: e.target.value
    });
  }

  onChangeImageUrl(e) {
    this.setState({
      image: e.target.value
    });
  }

  onChangeAppearances(e) {
    let { appearances } = this.state;
    let appearanceIndex = e.target.id;
    appearances[appearanceIndex] = e.target.value;
    this.setState({
      appearances
    });
  }

  onChangeAbilities(e) {
    let { abilities } = this.state;
    let abilitiesIndex = e.target.id;
    abilities[abilitiesIndex] = e.target.value;
    this.setState({
      abilities
    });
  }

  onChangeMeters(e) {
    this.setState({
      meters: e.target.value
    });
  }

  onChangeFeet(e) {
    this.setState({
      feet: e.target.value
    });
  }

  onAddAppearance() {
    let { appearances } = this.state;
    appearances.push("");
    this.setState({
      appearances
    });
  }

  onAddAbility() {
    let { abilities } = this.state;
    abilities.push("");
    this.setState({
      abilities
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const godzillaClone = {
      name: this.state.name,
      link: this.state.link,
      image: this.state.image,
      appearances: this.state.appearances,
      abilities: this.state.abilities,
      height: {
        meters: this.state.meters,
        feet: this.state.feet
      }
    };

    console.log(godzillaClone);

    axios
      .post("http://localhost:5000/godzilla_clones/add", godzillaClone)
      .then((res) => console.log(res.data));
    this.setState({
      name: "",
      link: "",
      image: "",
      appearances: [""],
      abilities: [""],
      meters: undefined,
      feet: undefined,
      godzillaClones: [],
      appearance: "",
      ability: ""
    });
    window.location = "/godzilla-clone-list";
  }
  render() {
    return (
      <>
        <div className="kaiju-header">
          <h2>Godzilla Clone</h2>
          <h3>Add</h3>
        </div>

        <div className="kaiju-information">
          <div className="kaiju-input">
            <label>Name: *</label>
            <ul>
              <li className="input-list">
                <input
                  type="text"
                  required
                  className="kaiju-text-input"
                  value={this.state.name}
                  onChange={this.onChangeName}
                />
              </li>
            </ul>
          </div>

          <div className="kaiju-input">
            <label>Link: *</label>
            <ul>
              <li className="input-list">
                <input
                  type="text"
                  required
                  className="kaiju-text-input"
                  value={this.state.link}
                  onChange={this.onChangeLink}
                />
              </li>
            </ul>
          </div>

          <div className="kaiju-input">
            <label>Image URL: </label>
            <ul>
              <li className="input-list">
                <input
                  type="text"
                  className="kaiju-text-input"
                  value={this.state.image}
                  onChange={this.onChangeImageUrl}
                />
              </li>
            </ul>
          </div>

          <div className="kaiju-input">
            <label>Appearances: *</label>
            <ul id="appearance-list">
              {this.state.appearances.map((appearanceOf) => {
                return (
                  <li className="input-list">
                    <input
                      type="text"
                      key={appearanceOf}
                      required
                      id={`appearance-${appearanceOf}`}
                      className="kaiju-text-input"
                      defaultValue={appearanceOf}
                      value={this.state.appearances.indexOf(appearanceOf)}
                      onChange={this.onChangeAppearances}
                    />
                  </li>
                );
              })}
              <li className="input-list">
                <button onClick={this.onAddAppearance}>Add Appearance</button>
              </li>
            </ul>
          </div>

          <div className="kaiju-input">
            <label>Abilities: *</label>
            <ul id="abilities-list">
              {this.state.abilities.map((abilityOf) => {
                return (
                  <li className="input-list">
                    <input
                      type="text"
                      key={abilityOf}
                      required
                      id={`ability-${abilityOf}`}
                      className="kaiju-text-input"
                      value={abilityOf}
                      onChange={this.onChangeAbilities}
                    />
                  </li>
                );
              })}
              <li className="input-list">
                <button onClick={this.onAddAbility}>Add Ability</button>
              </li>
            </ul>
          </div>

          <div className="kaiju-input">
            <h5>Height</h5>
            <ul>
              <li className="input-list">
                <label>Meters: *</label>
                <input
                  type="text"
                  required
                  className="kaiju-text-input"
                  value={this.state.meters}
                  onChange={this.onChangeMeters}
                />
              </li>
              <li className="input-list">
                <label>Feet: *</label>
                <input
                  type="text"
                  required
                  className="kaiju-text-input"
                  value={this.state.feet}
                  onChange={this.onChangeFeet}
                />
              </li>
            </ul>
          </div>

          <p>*Required</p>

          <button className="submit" onClick={this.onSubmit}>
            Submit
          </button>
        </div>
      </>
    );
  }
}

export default CreateGodzillaClone;
