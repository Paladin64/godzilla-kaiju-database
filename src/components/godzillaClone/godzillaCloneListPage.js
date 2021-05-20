import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GodzillaCloneLink from "./godzillaCloneListLine";

// class GodzillaCloneMount extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { godzillaClones: [] };
//   }

//   componentDidMount() {
//     axios
//       .get("http://localhost:5000/godzilla-clones/")
//       .then((response) => {
//         this.setState({ godzillaClones: response.data });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   render() {
//     return this.state.godzillaClones.map((res, i) => {
//       return <GodzillaCloneLink godzillaClone={res} key={res._id} />;
//     });
//   }
// }

class GodzillaCloneListDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = { godzillaClones: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/godzilla_clones/")
      .then((response) => {
        this.setState({ godzillaClones: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  GodzillaCloneLinkList() {
    return this.state.godzillaClones.map((currentGodzillaClone) => {
      return (
        <GodzillaCloneLink
          godzillaClone={currentGodzillaClone}
          deleteGodzillaClone={this.deleteGodzillaClone}
          key={currentGodzillaClone._id}
        />
      );
    });
  }

  render() {
    return (
      <>
        <div className="kaiju-header">
          <h2>Godzilla Clone</h2>
        </div>

        <div className="kaiju-list">
          <ul>{this.GodzillaCloneLinkList()}</ul>

          <li>
            <Link to="/godzilla-clone-list-create">Add Godzilla Clone</Link>
          </li>
        </div>
      </>
    );
  }
}

export default GodzillaCloneListDisplay;
