import React from "react";
import { Component } from "react";
import axios from "axios";

class GodzillaClonePath extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      link: "",
      image: "",
      appearances: [""],
      abilities: [""],
      height: { meters: undefined, feet: undefined },
      godzillaClones: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:5000/godzilla_clones/" + this.props.match.params.id
      )
      .then((response) => {
        this.setState({
          name: response.data.name,
          link: response.data.link,
          image: response.data.image,
          appearances: response.data.appearances,
          abilities: response.data.abilities,
          height: {
            meters: response.data.height.meters,
            feet: response.data.height.feet
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <div className="kaiju-header">
          <h2>Godzilla Clone</h2>
          <h3 className="kaiju-name">{this.state.name}</h3>
          <img src={this.state.image} alt={this.state.name} />
        </div>

        <div className="kaiju-information">
          <h4>Appearances</h4>
          <ul className="kaiju-list">
            {this.state.appearances.map((appearance) => {
              return <li>{appearance}</li>;
            })}
          </ul>
        </div>

        <div className="kaiju-information">
          <h4>Abilities</h4>
          <ul className="kaiju-list">
            {this.state.abilities.map((ability) => {
              return <li>{ability}</li>;
            })}
          </ul>
        </div>

        <div className="kaiju-information">
          <h4>Height</h4>
          <ul className="kaiju-size">
            <li>Meters: {this.state.height.meters}</li>
            <li>Feet: {this.state.height.feet}</li>
          </ul>
        </div>
      </>
    );
  }
}

export default GodzillaClonePath;
